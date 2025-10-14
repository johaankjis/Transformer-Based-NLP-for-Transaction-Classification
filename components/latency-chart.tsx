"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts"
import { generateLatencyData } from "@/lib/mock-data"

export function LatencyChart() {
  const data = generateLatencyData(24)

  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle className="text-card-foreground">Inference Latency</CardTitle>
        <CardDescription className="text-muted-foreground">P50, P95, P99 latency over time</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis
              dataKey="time"
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => {
                const date = new Date(value)
                return `${date.getHours()}:00`
              }}
            />
            <YAxis
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}ms`}
            />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="rounded-lg border border-border bg-popover p-2 shadow-sm">
                      <div className="grid gap-2">
                        {payload.map((entry, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full" style={{ backgroundColor: entry.color }} />
                            <span className="text-xs text-muted-foreground">{entry.name}:</span>
                            <span className="text-xs font-bold text-popover-foreground">{entry.value}ms</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                }
                return null
              }}
            />
            <Line type="monotone" dataKey="p50" stroke="hsl(var(--chart-2))" strokeWidth={2} dot={false} name="P50" />
            <Line type="monotone" dataKey="p95" stroke="hsl(var(--chart-3))" strokeWidth={2} dot={false} name="P95" />
            <Line type="monotone" dataKey="p99" stroke="hsl(var(--chart-4))" strokeWidth={2} dot={false} name="P99" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
