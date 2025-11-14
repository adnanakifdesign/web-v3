import { HomePageShutters } from "@/components/homepage-shutters"
import { Header } from "@/components/header"
import { ScrollHeader } from "@/components/scroll-header"
import { Hero } from "@/components/hero"
import { DesktopScrollHeader } from "@/components/desktop-scroll-header"
import { VideoSection } from "@/components/video-section"
import { ProjectThumbnails } from "@/components/project-thumbnails"
import { ServicesSection } from "@/components/services-section"
import { TestimonialsSection } from "@/components/testimonials-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <HomePageShutters />
      <DesktopScrollHeader />
      <Header />
      <ScrollHeader />
      <Hero />
      <VideoSection />
      <ProjectThumbnails />
      <ServicesSection />
      <TestimonialsSection />
    </main>
  )
}
