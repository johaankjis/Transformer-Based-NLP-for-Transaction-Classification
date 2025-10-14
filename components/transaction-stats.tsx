"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Clock, Target, Zap } from "lucide-react"

export function TransactionStats() {
  const stats = [
    {
      title: "Processed Today",
      value: "1,247,893",
      change: "+12.3%",
      icon: TrendingUp,
    },
    {
      title: "Avg Confidence",
      value: "96.2%",
      change: "+2.1%",
      icon: Target,
    },
    {
      title: "Avg Latency",
      value: "87ms",
      change: "-8ms",
      icon: Clock,
    },
    {
      title: "Throughput",
      value: "52K/min",
      change: "+5.2%",
      icon: Zap,
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon
        return (
          <Card key={stat.title} className="bg-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-card-foreground">{stat.title}</CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-card-foreground">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-chart-2">{stat.change}</span> from last hour
              </p>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
