"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"

export default function GalleryPage() {
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Simulate loading time for gallery content
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1200)

    return () => clearTimeout(timer)
  }, [])

  const projects = [
    {
      id: "1",
      title: "Hantura",
      category: "Design",
      image: "https://tkyy9tub5efxttep.public.blob.vercel-storage.com/Screenshot%202025-11-05%20at%209.10.18%E2%80%AFAM.png",
    },
    {
      id: "2",
      title: "Project Two",
      category: "Development",
      image: "/web-development-project.png",
    },
    {
      id: "3",
      title: "Project Three",
      category: "Branding",
      image: "/brand-identity-project.png",
    },
    {
      id: "4",
      title: "Project Four",
      category: "Strategy",
      image: "/strategic-planning-project.jpg",
    },
    {
      id: "5",
      title: "Project Five",
      category: "Design",
      image: "/modern-design-project.jpg",
    },
    {
      id: "6",
      title: "Project Six",
      category: "Development",
      image: "/web-development-project.png",
    },
    {
      id: "7",
      title: "Project Seven",
      category: "Branding",
      image: "/brand-identity-project.png",
    },
    {
      id: "8",
      title: "Project Eight",
      category: "Strategy",
      image: "/strategic-planning-project.jpg",
    },
    {
      id: "9",
      title: "Project Nine",
      category: "Design",
      image: "/modern-design-project.jpg",
    },
    {
      id: "10",
      title: "Project Ten",
      category: "Development",
      image: "/web-development-project.png",
    },
  ]

  return (
    <main className="min-h-screen bg-black">
      {/* Loading Animation */}
      {isLoading && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          <div className="flex flex-col items-center gap-8">
            <div className="relative w-16 h-16">
              {/* Outer rotating ring */}
              <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-white border-r-white animate-spin" />
              {/* Middle rotating ring with opposite direction */}
              <div
                className="absolute inset-2 rounded-full border-2 border-transparent border-b-white border-l-white animate-spin"
                style={{ animationDirection: "reverse" }}
              />
              {/* Inner dot */}
              <div className="absolute inset-4 rounded-full bg-white" />
            </div>
            <p className="text-white text-sm tracking-widest">Loading...</p>
          </div>
        </div>
      )}

      {/* Gallery Content */}
      <div className={`transition-opacity duration-1000 ${isLoading ? "opacity-0" : "opacity-100"}`}>
        {/* Full width hero image with back button overlay */}
        <div className="relative w-full aspect-[9/16] md:aspect-[4/6] lg:aspect-[16/9]">
          <img
            src={projects[0]?.image || "/placeholder.svg?height=1440&width=1080&query=featured project"}
            alt="Featured Project"
            className="w-full h-full object-cover"
          />

          <button
            onClick={() => router.back()}
            className="absolute top-6 left-3 z-10 flex items-center gap-2 text-white px-4 py-3 transition-all duration-300 backdrop-blur-sm group"
            aria-label="Go back"
          >
            <ArrowLeft size={20} className="group-hover:transition-transform duration-300" />
            <span className="text-sm lg:text-[16px] font-medium">Back</span>
          </button>

          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/70 to-transparent p-6 md:p-8">
            <div className="max-w-xl">
              <h2 className="text-[48px] md:text-4xl lg:text-[96px] font-regular text-white">{projects[0]?.title}</h2>
            </div>
          </div>
        </div>

        {/* 10 images in 2-column grid below hero */}
        <div className="px-4 py-16 md:py-24 bg-black">
          <div className="max-w-full mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {projects.slice(1).map((project) => (
                <div key={project.id} className="overflow-hidden group cursor-pointer">
                  <div className="w-full aspect-square overflow-hidden bg-muted">
                    <img
                      src={project.image || "/placeholder.svg?height=500&width=500&query=gallery project"}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
