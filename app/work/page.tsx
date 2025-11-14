"use client"

import { Header } from "@/components/header"
import { ScrollHeader } from "@/components/scroll-header"
import { DesktopScrollHeader } from "@/components/desktop-scroll-header"
import { WorkHeader } from "@/components/work-header"
import { WorkThumbnails } from "@/components/work-thumbnails"

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-black">
      <DesktopScrollHeader />
      <Header />
      <ScrollHeader />
      <WorkHeader showFilters={false} />
      <WorkThumbnails />
    </main>
  )
}
