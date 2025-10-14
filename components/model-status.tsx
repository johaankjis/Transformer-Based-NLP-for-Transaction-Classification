"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { mockModels } from "@/lib/mock-data"
import { CheckCircle2, Clock, Archive } from "lucide-react"

export function ModelStatus() {
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

  const getStatusVariant = (status: string): "default" | "secondary" | "outline" => {
    switch (status) {
      case "active":
        return "default"
      case "training":
        return "secondary"
      default:
        return "outline"
    }
  }

  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle className="text-card-foreground">Model Registry</CardTitle>
        <CardDescription className="text-muted-foreground">Deployed transformer models</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockModels.map((model) => (
            <div
              key={model.id}
              className="flex items-start justify-between border-b border-border pb-4 last:border-0 last:pb-0"
            >
              <div className="flex-1 space-y-1">
                <div className="flex items-center gap-2">
                  {getStatusIcon(model.status)}
                  <p className="text-sm font-medium leading-none text-card-foreground">{model.name}</p>
                </div>
                <p className="text-xs text-muted-foreground">
                  {model.type} • v{model.version}
                </p>
                <div className="flex items-center gap-2">
                  <Badge variant={getStatusVariant(model.status)} className="text-xs capitalize">
                    {model.status}
                  </Badge>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-card-foreground">{model.accuracy}%</p>
                <p className="text-xs text-muted-foreground">{model.latency}ms avg</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
