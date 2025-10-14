"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Zap, TrendingUp, Database } from "lucide-react"

export function ModelMetrics() {
  const metrics = [
    {
      title: "Best Accuracy",
      value: "96.5%",
      model: "GPT-3.5-Optimized",
      icon: Target,
    },
    {
      title: "Fastest Latency",
      value: "87ms",
      model: "DistilBERT-v3",
      icon: Zap,
    },
    {
      title: "Accuracy Improvement",
      value: "+22%",
      model: "vs Baseline",
      icon: TrendingUp,
    },
    {
      title: "Total Models",
      value: "3",
      model: "1 Active, 1 Training",
      icon: Database,
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => {
        const Icon = metric.icon
        return (
          <Card key={metric.title} className="bg-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-card-foreground">{metric.title}</CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-card-foreground">{metric.value}</div>
              <p className="text-xs text-muted-foreground">{metric.model}</p>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
