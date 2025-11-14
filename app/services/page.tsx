import { Header } from "@/components/header"
import { DesktopScrollHeader } from "@/components/desktop-scroll-header"
import { ScrollHeader } from "@/components/scroll-header"
import { WorkHeader } from "@/components/work-header"
import { ServicesDetailGrid } from "@/components/services-detail-grid"

export default function Services() {
  return (
    <main className="min-h-screen bg-black text-white">
      <DesktopScrollHeader />
      <Header />
      <ScrollHeader />
      <WorkHeader title="Services" showFilters={false} />
      <ServicesDetailGrid />
    </main>
  )
}
