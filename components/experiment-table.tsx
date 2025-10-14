"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { mockExperiments } from "@/lib/mock-data"
import { formatDistanceToNow } from "date-fns"
import { CheckCircle2, Clock, XCircle, MoreVertical } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function ExperimentTable() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <Badge className="gap-1 bg-chart-2/20 text-chart-2">
            <CheckCircle2 className="h-3 w-3" />
            Completed
          </Badge>
        )
      case "running":
        return (
          <Badge variant="secondary" className="gap-1">
            <Clock className="h-3 w-3" />
            Running
          </Badge>
        )
      case "failed":
        return (
          <Badge variant="outline" className="gap-1 text-destructive">
            <XCircle className="h-3 w-3" />
            Failed
          </Badge>
        )
      default:
        return null
    }
  }

  return (
    <div className="rounded-md border border-border">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground">Experiment</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground">Model Type</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground">Accuracy</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground">Precision</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground">Recall</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground">F1 Score</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground">Latency</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground">Status</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground">Created</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground"></th>
            </tr>
          </thead>
          <tbody>
            {mockExperiments.map((experiment, index) => (
              <tr
                key={experiment.id}
                className={`border-b border-border last:border-0 ${index % 2 === 0 ? "bg-card" : "bg-muted/20"}`}
              >
                <td className="px-4 py-3 text-sm font-medium text-card-foreground">
                  <div className="max-w-xs truncate">{experiment.name}</div>
                </td>
                <td className="px-4 py-3 text-sm text-card-foreground">
                  <Badge variant="outline">{experiment.modelType}</Badge>
                </td>
                <td className="px-4 py-3 text-sm font-semibold text-chart-2">{experiment.accuracy}%</td>
                <td className="px-4 py-3 text-sm text-card-foreground">{experiment.precision}%</td>
                <td className="px-4 py-3 text-sm text-card-foreground">{experiment.recall}%</td>
                <td className="px-4 py-3 text-sm text-card-foreground">{experiment.f1Score}%</td>
                <td className="px-4 py-3 text-sm font-mono text-card-foreground">{experiment.latency}ms</td>
                <td className="px-4 py-3 text-sm">{getStatusBadge(experiment.status)}</td>
                <td className="px-4 py-3 text-sm text-muted-foreground">
                  {formatDistanceToNow(new Date(experiment.createdAt), { addSuffix: true })}
                </td>
                <td className="px-4 py-3 text-sm">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem>Compare</DropdownMenuItem>
                      <DropdownMenuItem>Deploy Model</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
