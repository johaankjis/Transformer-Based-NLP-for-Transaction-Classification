"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { mockTransactions } from "@/lib/mock-data"
import { formatDistanceToNow } from "date-fns"

export function RecentTransactions() {
  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle className="text-card-foreground">Recent Transactions</CardTitle>
        <CardDescription className="text-muted-foreground">Latest classified transactions</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockTransactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-start justify-between border-b border-border pb-4 last:border-0 last:pb-0"
            >
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none text-card-foreground">{transaction.memo}</p>
                <p className="text-xs text-muted-foreground">
                  {formatDistanceToNow(new Date(transaction.timestamp), { addSuffix: true })}
                </p>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="text-xs">
                    {transaction.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {(transaction.confidence * 100).toFixed(1)}% confidence
                  </span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-card-foreground">${transaction.amount.toFixed(2)}</p>
                <p className="text-xs text-muted-foreground">{transaction.latency}ms</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
