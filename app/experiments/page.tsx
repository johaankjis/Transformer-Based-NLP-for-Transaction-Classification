import { NavHeader } from "@/components/nav-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExperimentTable } from "@/components/experiment-table"
import { ExperimentComparison } from "@/components/experiment-comparison"
import { Button } from "@/components/ui/button"
import { Plus, GitCompare } from "lucide-react"

export default function ExperimentsPage() {
  return (
    <div className="min-h-screen">
      <NavHeader />
      <main className="container py-6">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">Experiment Tracking</h1>
            <p className="text-muted-foreground">MLflow-powered experiment management and comparison</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2 bg-transparent">
              <GitCompare className="h-4 w-4" />
              Compare
            </Button>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              New Experiment
            </Button>
          </div>
        </div>

        <ExperimentComparison />

        <div className="mt-6">
          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="text-card-foreground">All Experiments</CardTitle>
              <CardDescription className="text-muted-foreground">
                Track and compare model training experiments
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ExperimentTable />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
