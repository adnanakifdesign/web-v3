"use client"

import { useEffect, useRef, useState } from "react"
import { useScrollHeight } from "@/hooks/use-scroll-height"

interface Project {
  id: string
  title: string
  category: string
  image: string
  slug: string
}

const projects: Project[] = [
  {
    id: "1",
    title: "Finure Health",
    category: "Branding",
    image: "https://05nt8uhx23vzdvuu.public.blob.vercel-storage.com/Visa%20Card.jpg",
    slug: "Finure-Health",
  },
  {
    id: "2",
    title: "Project Two",
    category: "Development",
    image: "/web-development-project.png",
    slug: "project-two",
  },
  {
    id: "3",
    title: "Project Three",
    category: "Branding",
    image: "/brand-identity-project.png",
    slug: "project-three",
  },
  {
    id: "4",
    title: "Project Four",
    category: "Strategy",
    image: "/strategic-planning-project.jpg",
    slug: "project-four",
  },
]

export function ProjectThumbnails() {
  const [visibleProjects, setVisibleProjects] = useState<boolean[]>([])
  const projectRefsArray = useRef<(HTMLDivElement | null)[]>([])

  const imageHeight = useScrollHeight({
    minHeight: 500,
    maxHeight: 550,
    scrollMultiplier: 0.3,
  })

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: "0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = projectRefsArray.current.indexOf(entry.target as HTMLDivElement)
          if (index !== -1) {
            setVisibleProjects((prev) => {
              const newVisible = [...prev]
              newVisible[index] = true
              return newVisible
            })
            observer.unobserve(entry.target)
          }
        }
      })
    }, observerOptions)

    projectRefsArray.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-12 md:py-16 lg:py-20 px-1 md:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3 md:gap-3 lg:gap-3 max-w-full mx-auto">
        {projects.map((project, index) => {
          const cardVisible = visibleProjects[index] || false

          return (
            <div
              key={project.id}
              ref={(el) => {
                projectRefsArray.current[index] = el
              }}
              className={`group bg-muted overflow-hidden transition-all duration-1000 transform flex flex-col cursor-pointer ${
                cardVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => (window.location.href = `/gallery/${project.slug}`)}
            >
              <div
                className={`w-full overflow-hidden relative bg-muted transition-all duration-100 ${
                  cardVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{
                  height: `${imageHeight}px`,
                  transitionDelay: `${index * 100 + 150}ms`,
                }}
              >
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div
                className={`bg-[#1e1e1e] p-4 flex justify-between items-end transition-all duration-1000 transform ${
                  cardVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100 + 300}ms` }}
              >
                <div>
                  <h3 className="text-card text-white font-medium text-base">{project.title}</h3>
                  <p className="text-card text-white text-sm">{project.category}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
