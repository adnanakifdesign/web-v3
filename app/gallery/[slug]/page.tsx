"use client"

import { useEffect, useState } from "react"
import { useRouter, useParams } from "next/navigation"
import { ArrowLeft } from "lucide-react"

const projectsData: {
  [key: string]: {
    title: string
    category: string
    featuredImage: string
    images: string[]
  }
} = {
  "Finure-Health": {
    title: "Finure Health",
    category: "HEALTH",
    featuredImage: "https://05nt8uhx23vzdvuu.public.blob.vercel-storage.com/Thumbnail.jpg",
    images: [
      "https://05nt8uhx23vzdvuu.public.blob.vercel-storage.com/Finure-Health-Logo-Variation.jpg",
      "https://05nt8uhx23vzdvuu.public.blob.vercel-storage.com/Visa%20Card.jpg",
      "https://05nt8uhx23vzdvuu.public.blob.vercel-storage.com/Business%20Card.jpg",
      "https://05nt8uhx23vzdvuu.public.blob.vercel-storage.com/Mobile%20App.jpg",
      "https://05nt8uhx23vzdvuu.public.blob.vercel-storage.com/Profile.jpg",
      "https://05nt8uhx23vzdvuu.public.blob.vercel-storage.com/Banner.jpg",
      "https://05nt8uhx23vzdvuu.public.blob.vercel-storage.com/Typography-%26-color.jpg",
      "https://05nt8uhx23vzdvuu.public.blob.vercel-storage.com/instagram%20story.jpg",
    ],
  },
  "project-two": {
    title: "Project Two",
    category: "Development",
    featuredImage: "/web-development-project.png",
    images: [
      "/web-development-project.png",
      "/brand-identity-project.png",
      "/strategic-planning-project.jpg",
      "/modern-design-project.jpg",
      "/web-development-project.png",
      "/brand-identity-project.png",
      "/strategic-planning-project.jpg",
      "/modern-design-project.jpg",
      "/web-development-project.png",
    ],
  },
  "project-three": {
    title: "Project Three",
    category: "Branding",
    featuredImage: "/brand-identity-project.png",
    images: [
      "/brand-identity-project.png",
      "/strategic-planning-project.jpg",
      "/modern-design-project.jpg",
      "/web-development-project.png",
      "/brand-identity-project.png",
      "/strategic-planning-project.jpg",
      "/modern-design-project.jpg",
      "/web-development-project.png",
      "/brand-identity-project.png",
    ],
  },
  "project-four": {
    title: "Project Four",
    category: "Strategy",
    featuredImage: "/strategic-planning-project.jpg",
    images: [
      "/strategic-planning-project.jpg",
      "/modern-design-project.jpg",
      "/web-development-project.png",
      "/brand-identity-project.png",
      "/strategic-planning-project.jpg",
      "/modern-design-project.jpg",
      "/web-development-project.png",
      "/brand-identity-project.png",
      "/strategic-planning-project.jpg",
    ],
  },
}

export default function ProjectGalleryPage() {
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const params = useParams()
  const slug = params.slug as string

  const projectData = projectsData[slug]

  useEffect(() => {
    // Simulate loading time for gallery content
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1200)

    return () => clearTimeout(timer)
  }, [])

  if (!projectData) {
    return (
      <main className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-center">
          <h1 className="text-2xl font-regular mb-4">Project not found</h1>
          <button
            onClick={() => router.back()}
            className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200 transition"
          >
            Go Back
          </button>
        </div>
      </main>
    )
  }

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
            src={projectData.featuredImage || "/placeholder.svg?height=1440&width=1080&query=featured project"}
            alt={projectData.title}
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
              <h2 className="text-[48px] md:text-4xl lg:text-[96px] font-regular text-white">{projectData.title}</h2>
            </div>
          </div>
        </div>

        {/* Images in 2-column grid below hero */}
        <div className="px-3 lg:px-8 py-16 md:py-24 bg-black">
          <div className="max-w-full mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-3">
              {projectData.images.map((image, index) => (
                <div key={index} className="overflow-hidden group cursor-pointer">
                  <div className="w-full aspect-16:9 overflow-hidden bg-muted">
                    <img
                      src={image || "/placeholder.svg?height=500&width=500&query=gallery project"}
                      alt={`${projectData.title} - Image ${index + 1}`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500"
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
