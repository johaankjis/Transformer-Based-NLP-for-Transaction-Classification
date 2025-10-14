"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { mockModels } from "@/lib/mock-data"
import { CheckCircle2, Clock, Archive, MoreVertical, Play, Pause } from "lucide-react"
import { formatDistanceToNow } from "date-fns"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function ModelCards() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active":
        return <CheckCircle2 className="h-4 w-4 text-chart-2" />
      case "training":
        return <Clock className="h-4 w-4 text-chart-3" />
      case "archived":
        return <Archive className="h-4 w-4 text-muted-foreground" />
      default:
        return null
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return (
          <Badge className="gap-1 bg-chart-2/20 text-chart-2">
            <CheckCircle2 className="h-3 w-3" />
            Active
          </Badge>
        )
      case "training":
        return (
          <Badge variant="secondary" className="gap-1">
            <Clock className="h-3 w-3" />
            Training
          </Badge>
        )
      case "archived":
        return (
          <Badge variant="outline" className="gap-1">
            <Archive className="h-3 w-3" />
            Archived
          </Badge>
        )
      default:
        return null
    }
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {mockModels.map((model) => (
        <div key={model.id} className="rounded-lg border border-border bg-card p-6">
          <div className="mb-4 flex items-start justify-between">
            <div className="flex items-center gap-2">
              {getStatusIcon(model.status)}
              <h3 className="font-semibold text-card-foreground">{model.name}</h3>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Play className="mr-2 h-4 w-4" />
                  Deploy
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Pause className="mr-2 h-4 w-4" />
                  Pause
                </DropdownMenuItem>
                <DropdownMenuItem className="text-destructive">
                  <Archive className="mr-2 h-4 w-4" />
                  Archive
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="mb-4 space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Type</span>
              <span className="font-medium text-card-foreground">{model.type}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Version</span>
              <span className="font-mono text-card-foreground">v{model.version}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Accuracy</span>
              <span className="font-semibold text-chart-2">{model.accuracy}%</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Avg Latency</span>
              <span className="font-mono text-card-foreground">{model.latency}ms</span>
            </div>
          </div>

          <div className="mb-4 border-t border-border pt-4">
            <div className="text-xs text-muted-foreground">
              Deployed {formatDistanceToNow(new Date(model.deployedAt), { addSuffix: true })}
            </div>
          </div>

          <div className="flex items-center justify-between">
            {getStatusBadge(model.status)}
            <Button variant="outline" size="sm" className="bg-transparent">
              View Details
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}
