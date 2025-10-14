"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, TrendingDown, Activity, Zap, Target, Clock } from "lucide-react"

export function PerformanceMetrics() {
  const metrics = [
    {
      title: "Total Transactions",
      value: "8.7M",
      change: "+18.2%",
      trend: "up",
      icon: Activity,
    },
    {
      title: "Avg Accuracy",
      value: "94.2%",
      change: "+22%",
      trend: "up",
      icon: Target,
    },
    {
      title: "P95 Latency",
      value: "95ms",
      change: "-12ms",
      trend: "up",
      icon: Zap,
    },
    {
      title: "Uptime",
      value: "99.98%",
      change: "+0.02%",
      trend: "up",
      icon: Clock,
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => {
        const Icon = metric.icon
        const TrendIcon = metric.trend === "up" ? TrendingUp : TrendingDown
        return (
          <Card key={metric.title} className="bg-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-card-foreground">{metric.title}</CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-card-foreground">{metric.value}</div>
              <p className="flex items-center gap-1 text-xs text-muted-foreground">
                <TrendIcon className="h-3 w-3 text-chart-2" />
                <span className="text-chart-2">{metric.change}</span> from last week
              </p>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
