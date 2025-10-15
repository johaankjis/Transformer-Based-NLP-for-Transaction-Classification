# Transformer-Based NLP for Transaction Classification

A modern, enterprise-grade web application for real-time transaction classification using transformer-based NLP models. Built with Next.js 15, React 19, and TypeScript, this platform provides a comprehensive dashboard for monitoring, managing, and analyzing machine learning models for financial transaction categorization.

## 📸 Screenshots

### Dashboard
![Dashboard](https://github.com/user-attachments/assets/9e7653da-de39-4588-bb48-a54b8670b3e0)
*Real-time monitoring dashboard with key metrics, charts, and model status*

### Transaction Classification
![Transactions](https://github.com/user-attachments/assets/9b5f95d3-ef14-42e5-8908-1ff978218f9b)
*Live transaction stream with real-time NLP classification and confidence scores*

### Model Registry
![Models](https://github.com/user-attachments/assets/9c96a76d-3701-44b8-87e2-f8e41a502764)
*Manage and monitor deployed transformer models with detailed metrics*

## 🚀 Features

### Dashboard & Monitoring
- **Real-time Metrics**: Live monitoring of transaction volume, latency, and model accuracy
- **Performance Visualization**: Interactive charts displaying throughput, latency trends, and system metrics
- **Model Status**: Track deployed transformer models (DistilBERT, GPT-2, GPT-3.5) with live status updates

### Transaction Classification
- **Live Transaction Stream**: Real-time processing and categorization of financial transactions
- **High Confidence Predictions**: NLP-powered categorization with confidence scores
- **Transaction Statistics**: Comprehensive analytics on processed transactions
- **Search & Filter**: Advanced transaction search and filtering capabilities
- **Export Functionality**: Export transaction data for further analysis

### Model Registry
- **Multi-Model Support**: Deploy and manage multiple transformer models simultaneously
- **Model Metrics**: Track accuracy, latency, and version information for each model
- **Model Lifecycle Management**: Deploy, pause, and archive models with ease
- **Performance Comparison**: Compare metrics across different model versions

### Experiment Tracking
- **MLflow Integration**: Professional experiment tracking and management
- **Hyperparameter Tuning**: Track experiments with different configurations
- **Metrics Comparison**: Compare accuracy, precision, recall, and F1 scores
- **Experiment History**: Maintain a complete history of training experiments

### Analytics
- **Performance Insights**: Deep dive into system and model performance
- **Category Distribution**: Visualize transaction categories and patterns
- **Accuracy Trends**: Track model accuracy over time
- **Throughput Analysis**: Monitor system capacity and utilization

## 🛠️ Technology Stack

### Frontend
- **Framework**: Next.js 15.2.4 (React 19)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.1.9 with custom design system
- **UI Components**: Radix UI primitives
- **Charts**: Recharts for data visualization
- **Icons**: Lucide React
- **Date Handling**: date-fns
- **Forms**: React Hook Form with Zod validation

### Key Libraries
- **State Management**: React Hooks
- **Theming**: next-themes for dark mode support
- **Animations**: tailwindcss-animate & tw-animate-css
- **Notifications**: Sonner for toast notifications
- **Analytics**: Vercel Analytics integration

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js**: Version 18.x or higher
- **Package Manager**: npm (comes with Node.js) or pnpm (recommended)

## 🚀 Getting Started

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/johaankjis/Transformer-Based-NLP-for-Transaction-Classification.git
   cd Transformer-Based-NLP-for-Transaction-Classification
   ```

2. **Install dependencies**
   
   Using npm:
   ```bash
   npm install --legacy-peer-deps
   ```
   
   Or using pnpm (recommended):
   ```bash
   pnpm install
   ```

### Development

Start the development server:

Using npm:
```bash
npm run dev
```

Or using pnpm:
```bash
pnpm dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

### Building for Production

Create an optimized production build:

Using npm:
```bash
npm run build
```

Or using pnpm:
```bash
pnpm build
```

Start the production server:

Using npm:
```bash
npm start
```

Or using pnpm:
```bash
pnpm start
```

### Linting

Run ESLint to check code quality:

Using npm:
```bash
npm run lint
```

Or using pnpm:
```bash
pnpm lint
```

## 📁 Project Structure

```
├── app/                      # Next.js app directory
│   ├── analytics/           # Analytics page
│   ├── experiments/         # Experiment tracking page
│   ├── models/              # Model registry page
│   ├── transactions/        # Transaction classification page
│   ├── globals.css          # Global styles and theme variables
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Dashboard homepage
├── components/              # React components
│   ├── ui/                  # Reusable UI components (buttons, cards, etc.)
│   ├── accuracy-trend.tsx   # Accuracy trend visualization
│   ├── category-distribution.tsx
│   ├── experiment-comparison.tsx
│   ├── experiment-table.tsx
│   ├── latency-chart.tsx
│   ├── metrics-chart.tsx
│   ├── model-cards.tsx
│   ├── model-metrics.tsx
│   ├── model-status.tsx
│   ├── nav-header.tsx       # Main navigation header
│   ├── performance-metrics.tsx
│   ├── recent-transactions.tsx
│   ├── transaction-stats.tsx
│   ├── transaction-table.tsx
│   └── throughput-chart.tsx
├── lib/                     # Utility functions and data
│   ├── mock-data.ts         # Mock data for development
│   └── utils.ts             # Utility functions
├── public/                  # Static assets
├── hooks/                   # Custom React hooks
└── styles/                  # Additional stylesheets
```

## 🎨 Design System

The application features a custom dark theme design system inspired by modern ML platforms:

### Color Palette
- **Background**: Deep navy (`oklch(0.12 0.01 264)`)
- **Card**: Slightly lighter navy (`oklch(0.16 0.01 264)`)
- **Primary**: Purple accent (`oklch(0.65 0.25 280)`)
- **Success/Chart**: Teal (`oklch(0.7 0.2 200)`)
- **Foreground**: Near white (`oklch(0.98 0 0)`)

### Theme Variables
All theme colors are defined using OKLCH color space for perceptually uniform color variations and are fully customizable through CSS custom properties in `app/globals.css`.

## 🔧 Configuration

### Next.js Configuration
The project is configured with:
- TypeScript and ESLint error ignoring during builds (for rapid development)
- Unoptimized images for faster builds
- Modern ES6+ target

### TypeScript Configuration
- Strict mode enabled
- Path aliases configured (`@/*` maps to root)
- Modern module resolution (bundler)

## 📊 Data Models

### Transaction
```typescript
interface Transaction {
  id: string
  memo: string              // Transaction description
  amount: number            // Transaction amount
  timestamp: string         // ISO timestamp
  category: string          // Classified category
  confidence: number        // Classification confidence (0-1)
  latency: number          // Processing time in ms
}
```

### Model
```typescript
interface Model {
  id: string
  name: string
  type: "DistilBERT" | "GPT-2" | "GPT-3.5"
  accuracy: number          // Model accuracy percentage
  latency: number          // Average inference latency (ms)
  version: string          // Semantic version
  status: "active" | "archived" | "training"
  deployedAt: string       // ISO timestamp
}
```

### Experiment
```typescript
interface Experiment {
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
```

## 🌐 Pages & Routes

| Route | Description |
|-------|-------------|
| `/` | Dashboard with key metrics and overview |
| `/transactions` | Live transaction classification stream |
| `/models` | Model registry and management |
| `/experiments` | Experiment tracking and comparison |
| `/analytics` | Performance analytics and insights |

## 🎯 Key Features in Detail

### Real-time Transaction Processing
The platform simulates real-time transaction classification with:
- Automatic categorization using transformer models
- Confidence scores for each prediction
- Sub-100ms average latency
- Support for multiple transaction types

### Model Management
- Deploy multiple transformer models simultaneously
- Monitor model performance in real-time
- Track model versions and deployment history
- Archive outdated models

### Experiment Tracking
- MLflow-compatible experiment tracking
- Hyperparameter tuning history
- Model comparison tools
- Performance metrics visualization

## 🔒 Security & Best Practices

- TypeScript for type safety
- Strict ESLint configuration
- Component-based architecture
- Responsive design for all screen sizes
- Accessibility-first UI components (ARIA compliant)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👥 Authors

- **johaankjis** - Initial work - [GitHub Profile](https://github.com/johaankjis)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [Radix UI](https://www.radix-ui.com/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons by [Lucide](https://lucide.dev/)
- Inspired by modern ML platforms like Vercel and Braintrust

## 📧 Contact

For questions or support, please open an issue on GitHub.

---

**Note**: This is a demonstration application using mock data. For production use, integrate with actual transformer models and transaction data sources.
