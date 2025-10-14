import { NavHeader } from "@/components/nav-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ModelCards } from "@/components/model-cards"
import { ModelMetrics } from "@/components/model-metrics"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function ModelsPage() {
  return (
    <div className="min-h-screen">
      <NavHeader />
      <main className="container py-6">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">Model Registry</h1>
            <p className="text-muted-foreground">Manage and monitor transformer models</p>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Deploy Model
          </Button>
        </div>

        <ModelMetrics />

        <div className="mt-6">
          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="text-card-foreground">Deployed Models</CardTitle>
              <CardDescription className="text-muted-foreground">
                Active and archived transformer models for transaction classification
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ModelCards />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
