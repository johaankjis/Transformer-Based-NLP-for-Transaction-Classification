// Mock data for the application

export interface Transaction {
  id: string
  memo: string
  amount: number
  timestamp: string
  category: string
  confidence: number
  latency: number
}

export interface Model {
  id: string
  name: string
  type: "DistilBERT" | "GPT-2" | "GPT-3.5"
  accuracy: number
  latency: number
  version: string
  status: "active" | "archived" | "training"
  deployedAt: string
}

export interface Experiment {
  id: string
  name: string
  modelType: string
  accuracy: number
  precision: number
  recall: number
  f1Score: number
  latency: number
  createdAt: string
  status: "completed" | "running" | "failed"
}

export const mockTransactions: Transaction[] = [
  {
    id: "txn_001",
    memo: "AMAZON.COM*2K8HJ3 SEATTLE WA",
    amount: 49.99,
    timestamp: new Date(Date.now() - 1000 * 60 * 5).toISOString(),
    category: "Shopping",
    confidence: 0.96,
    latency: 87,
  },
  {
    id: "txn_002",
    memo: "STARBUCKS STORE #12345",
    amount: 5.75,
    timestamp: new Date(Date.now() - 1000 * 60 * 15).toISOString(),
    category: "Food & Dining",
    confidence: 0.98,
    latency: 72,
  },
  {
    id: "txn_003",
    memo: "SHELL OIL 57432198765",
    amount: 45.2,
    timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
    category: "Gas & Fuel",
    confidence: 0.94,
    latency: 95,
  },
  {
    id: "txn_004",
    memo: "NETFLIX.COM MONTHLY",
    amount: 15.99,
    timestamp: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
    category: "Entertainment",
    confidence: 0.99,
    latency: 68,
  },
  {
    id: "txn_005",
    memo: "WHOLE FOODS MKT #10234",
    amount: 127.43,
    timestamp: new Date(Date.now() - 1000 * 60 * 60).toISOString(),
    category: "Groceries",
    confidence: 0.97,
    latency: 81,
  },
]

export const mockModels: Model[] = [
  {
    id: "model_001",
    name: "DistilBERT-v3",
    type: "DistilBERT",
    accuracy: 94.2,
    latency: 87,
    version: "3.2.1",
    status: "active",
    deployedAt: "2024-01-15T10:30:00Z",
  },
  {
    id: "model_002",
    name: "GPT-2-Fine-Tuned",
    type: "GPT-2",
    accuracy: 91.8,
    latency: 112,
    version: "2.1.0",
    status: "archived",
    deployedAt: "2023-12-10T14:20:00Z",
  },
  {
    id: "model_003",
    name: "GPT-3.5-Optimized",
    type: "GPT-3.5",
    accuracy: 96.5,
    latency: 145,
    version: "1.0.0",
    status: "training",
    deployedAt: "2024-01-20T09:15:00Z",
  },
]

export const mockExperiments: Experiment[] = [
  {
    id: "exp_001",
    name: "DistilBERT Hyperparameter Tuning",
    modelType: "DistilBERT",
    accuracy: 94.2,
    precision: 93.8,
    recall: 94.6,
    f1Score: 94.2,
    latency: 87,
    createdAt: "2024-01-15T08:00:00Z",
    status: "completed",
  },
  {
    id: "exp_002",
    name: "GPT-2 Learning Rate Optimization",
    modelType: "GPT-2",
    accuracy: 91.8,
    precision: 91.2,
    recall: 92.4,
    f1Score: 91.8,
    latency: 112,
    createdAt: "2024-01-10T10:30:00Z",
    status: "completed",
  },
  {
    id: "exp_003",
    name: "GPT-3.5 Fine-tuning Experiment",
    modelType: "GPT-3.5",
    accuracy: 96.5,
    precision: 96.1,
    recall: 96.9,
    f1Score: 96.5,
    latency: 145,
    createdAt: "2024-01-20T09:00:00Z",
    status: "running",
  },
  {
    id: "exp_004",
    name: "DistilBERT Batch Size Testing",
    modelType: "DistilBERT",
    accuracy: 93.1,
    precision: 92.7,
    recall: 93.5,
    f1Score: 93.1,
    latency: 92,
    createdAt: "2024-01-12T14:20:00Z",
    status: "completed",
  },
]

export function generateTimeSeriesData(points = 24) {
  return Array.from({ length: points }, (_, i) => ({
    time: new Date(Date.now() - (points - i) * 60 * 60 * 1000).toISOString(),
    value: Math.floor(Math.random() * 5000) + 15000,
  }))
}

export function generateLatencyData(points = 24) {
  return Array.from({ length: points }, (_, i) => ({
    time: new Date(Date.now() - (points - i) * 60 * 60 * 1000).toISOString(),
    p50: Math.floor(Math.random() * 20) + 70,
    p95: Math.floor(Math.random() * 30) + 90,
    p99: Math.floor(Math.random() * 40) + 110,
  }))
}
