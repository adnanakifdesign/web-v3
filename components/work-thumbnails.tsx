"use client"

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
    category: "TECH",
    image: "/web-development-project.png",
    slug: "project-two",
  },
  {
    id: "3",
    title: "Project Three",
    category: "FASHION & LIFESTYLE",
    image: "/brand-identity-project.png",
    slug: "project-three",
  },
  {
    id: "4",
    title: "Project Four",
    category: "BEAUTY & CARE",
    image: "/strategic-planning-project.jpg",
    slug: "project-four",
  },
]

export function WorkThumbnails() {
  const imageHeight = useScrollHeight({
    minHeight: 500,
    maxHeight: 550,
    scrollMultiplier: 0.5,
  })

  return (
    <section className="px-1 md:px-6 px-4 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3 md:gap-3 lg:gap-3 max-w-full mx-auto">
        {projects.map((project) => {
          return (
            <div
              key={project.id}
              className="group bg-muted overflow-hidden flex flex-col cursor-pointer"
              onClick={() => (window.location.href = `/gallery/${project.slug}`)}
            >
              <div
                className="w-full overflow-hidden relative bg-muted transition-all duration-100"
                style={{ height: `${imageHeight}px` }}
              >
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="bg-[#333] p-4 flex justify-between items-end">
                <div>
                  <h3 className="text-card text-white font-medium text-[16px]">{project.title}</h3>
                  <p className="text-card text-white text-[14px]">{project.category}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
