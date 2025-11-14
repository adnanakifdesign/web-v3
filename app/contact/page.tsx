import { DesktopScrollHeader } from "@/components/desktop-scroll-header"
import { ScrollHeader } from "@/components/scroll-header"
import { Header } from "@/components/header"
import { WorkHeader } from "@/components/work-header"
import { ContactForm } from "@/components/contact-form"
import { FaqSection } from "@/components/faq-section"

export default function Contact() {
  return (
    <main className="min-h-screen bg-black text-white">
      <DesktopScrollHeader />
      <Header />
      <ScrollHeader />
      <WorkHeader title="Contact" showFilters={false} />
      <ContactForm />
      <FaqSection />
    </main>
  )
}
