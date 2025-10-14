import { NavHeader } from "@/components/nav-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TransactionTable } from "@/components/transaction-table"
import { TransactionStats } from "@/components/transaction-stats"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Download } from "lucide-react"

export default function TransactionsPage() {
  return (
    <div className="min-h-screen">
      <NavHeader />
      <main className="container py-6">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">Transaction Classification</h1>
            <p className="text-muted-foreground">Real-time NLP-powered transaction categorization</p>
          </div>
          <Button variant="outline" className="gap-2 bg-transparent">
            <Download className="h-4 w-4" />
            Export
          </Button>
        </div>

        <TransactionStats />

        <Card className="mt-6 bg-card">
          <CardHeader>
            <CardTitle className="text-card-foreground">Live Transaction Stream</CardTitle>
            <CardDescription className="text-muted-foreground">
              Transactions classified by transformer models in real-time
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4 flex items-center gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search transactions..." className="pl-8" />
              </div>
            </div>
            <TransactionTable />
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
