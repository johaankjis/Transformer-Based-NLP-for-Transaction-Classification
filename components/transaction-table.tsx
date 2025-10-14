"use client"

import { Badge } from "@/components/ui/badge"
import { mockTransactions } from "@/lib/mock-data"
import { formatDistanceToNow } from "date-fns"
import { CheckCircle2, AlertCircle } from "lucide-react"

export function TransactionTable() {
  const getConfidenceBadge = (confidence: number) => {
    if (confidence >= 0.95) {
      return (
        <Badge variant="default" className="gap-1 bg-chart-2/20 text-chart-2">
          <CheckCircle2 className="h-3 w-3" />
          High
        </Badge>
      )
    } else if (confidence >= 0.85) {
      return (
        <Badge variant="secondary" className="gap-1">
          Medium
        </Badge>
      )
    } else {
      return (
        <Badge variant="outline" className="gap-1 text-destructive">
          <AlertCircle className="h-3 w-3" />
          Low
        </Badge>
      )
    }
  }

  return (
    <div className="rounded-md border border-border">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground">Transaction ID</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground">Memo</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground">Amount</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground">Category</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground">Confidence</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground">Latency</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground">Time</th>
            </tr>
          </thead>
          <tbody>
            {mockTransactions.map((transaction, index) => (
              <tr
                key={transaction.id}
                className={`border-b border-border last:border-0 ${index % 2 === 0 ? "bg-card" : "bg-muted/20"}`}
              >
                <td className="px-4 py-3 text-sm font-mono text-card-foreground">{transaction.id}</td>
                <td className="px-4 py-3 text-sm text-card-foreground">
                  <div className="max-w-xs truncate">{transaction.memo}</div>
                </td>
                <td className="px-4 py-3 text-sm font-medium text-card-foreground">${transaction.amount.toFixed(2)}</td>
                <td className="px-4 py-3 text-sm">
                  <Badge variant="secondary">{transaction.category}</Badge>
                </td>
                <td className="px-4 py-3 text-sm">
                  <div className="flex items-center gap-2">
                    {getConfidenceBadge(transaction.confidence)}
                    <span className="text-xs text-muted-foreground">{(transaction.confidence * 100).toFixed(1)}%</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm">
                  <span className={`font-mono ${transaction.latency < 90 ? "text-chart-2" : "text-muted-foreground"}`}>
                    {transaction.latency}ms
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-muted-foreground">
                  {formatDistanceToNow(new Date(transaction.timestamp), { addSuffix: true })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
