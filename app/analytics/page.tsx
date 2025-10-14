import { NavHeader } from "@/components/nav-header"
import { PerformanceMetrics } from "@/components/performance-metrics"
import { CategoryDistribution } from "@/components/category-distribution"
import { ThroughputChart } from "@/components/throughput-chart"
import { AccuracyTrend } from "@/components/accuracy-trend"
import { Button } from "@/components/ui/button"
import { Download, Calendar } from "lucide-react"

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen">
      <NavHeader />
      <main className="container py-6">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">Analytics</h1>
            <p className="text-muted-foreground">Performance insights and system metrics</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2 bg-transparent">
              <Calendar className="h-4 w-4" />
              Last 7 Days
            </Button>
            <Button variant="outline" className="gap-2 bg-transparent">
              <Download className="h-4 w-4" />
              Export Report
            </Button>
          </div>
        </div>

        <PerformanceMetrics />

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <ThroughputChart />
          <AccuracyTrend />
        </div>

        <div className="mt-6">
          <CategoryDistribution />
        </div>
      </main>
    </div>
  )
}
