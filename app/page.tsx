import { NavHeader } from "@/components/nav-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, Zap, Database, TrendingUp } from "lucide-react"
import { MetricsChart } from "@/components/metrics-chart"
import { LatencyChart } from "@/components/latency-chart"
import { RecentTransactions } from "@/components/recent-transactions"
import { ModelStatus } from "@/components/model-status"

export default function DashboardPage() {
  return (
    <div className="min-h-screen">
      <NavHeader />
      <main className="container py-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">Real-time monitoring of transformer-based transaction classification</p>
        </div>

        {/* Key Metrics */}
        <div className="mb-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="bg-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-card-foreground">Transactions Today</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-card-foreground">1,247,893</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-chart-2">+12.3%</span> from yesterday
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-card-foreground">Avg Latency</CardTitle>
              <Zap className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-card-foreground">87ms</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-chart-2">-8ms</span> from last hour
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-card-foreground">Model Accuracy</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-card-foreground">94.2%</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-chart-2">+22%</span> improvement
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-card-foreground">Active Models</CardTitle>
              <Database className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-card-foreground">3</div>
              <p className="text-xs text-muted-foreground">DistilBERT, GPT-2, GPT-3.5</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="mb-6 grid gap-4 md:grid-cols-2">
          <MetricsChart />
          <LatencyChart />
        </div>

        {/* Bottom Section */}
        <div className="grid gap-4 md:grid-cols-2">
          <RecentTransactions />
          <ModelStatus />
        </div>
      </main>
    </div>
  )
}
