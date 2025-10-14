"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts"

export function CategoryDistribution() {
  const data = [
    { category: "Shopping", count: 245678, percentage: 28.2 },
    { category: "Food & Dining", count: 198432, percentage: 22.8 },
    { category: "Gas & Fuel", count: 156789, percentage: 18.0 },
    { category: "Groceries", count: 134567, percentage: 15.5 },
    { category: "Entertainment", count: 89234, percentage: 10.3 },
    { category: "Other", count: 45123, percentage: 5.2 },
  ]

  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle className="text-card-foreground">Category Distribution</CardTitle>
        <CardDescription className="text-muted-foreground">
          Transaction classification breakdown by category
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis
              type="number"
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${(value / 1000).toFixed(0)}K`}
            />
            <YAxis
              type="category"
              dataKey="category"
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="rounded-lg border border-border bg-popover p-3 shadow-sm">
                      <div className="grid gap-2">
                        <div className="flex flex-col">
                          <span className="text-[0.70rem] uppercase text-muted-foreground">Category</span>
                          <span className="font-bold text-popover-foreground">{payload[0].payload.category}</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[0.70rem] uppercase text-muted-foreground">Transactions</span>
                          <span className="font-bold text-popover-foreground">
                            {payload[0].value?.toLocaleString()}
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[0.70rem] uppercase text-muted-foreground">Percentage</span>
                          <span className="font-bold text-popover-foreground">{payload[0].payload.percentage}%</span>
                        </div>
                      </div>
                    </div>
                  )
                }
                return null
              }}
            />
            <Bar dataKey="count" fill="hsl(var(--chart-1))" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
