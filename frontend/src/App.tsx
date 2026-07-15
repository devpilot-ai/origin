import { DashboardPreview, FeatureCards, Hero, Navbar } from './components/landing'
import { AppShell } from './layouts/app-shell'

function App() {
  return (
    <AppShell header={<Navbar />}>
      <Hero />
      <FeatureCards />
      <DashboardPreview />
    </AppShell>
  )
}

export default App
