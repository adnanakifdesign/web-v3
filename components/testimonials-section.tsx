"use client"

import { useEffect, useRef, useState } from "react"

interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
  clientPhoto: string
  videoUrl: string
}

const testimonials: Testimonial[] = [
  {
    quote: "They transformed our brand identity completely. The attention to detail was exceptional.",
    author: "Raj Shamani",
    role: "Founder",
    company: "StockGro",
    clientPhoto: "/professional-man-entrepreneur.jpg",
    videoUrl: "https://esuczbm75utdovfn.public.blob.vercel-storage.com/%E2%80%9CTo%20whom%20much%20is%20given%2C%20much%20is%20expected%E2%80%9D%20Luke%2012-48.mp4",
  },
  {
    quote: "Outstanding creative direction. Our market presence increased significantly after their work.",
    author: "Nithin Kamath",
    role: "CEO",
    company: "Zerodha",
    clientPhoto: "/business-executive-professional.jpg",
    videoUrl: "/testimonial-video-2.jpg",
  },
  {
    quote: "Professional, innovative, and results-driven. Exactly what we needed for our rebrand.",
    author: "Nikunj Biyani",
    role: "Founder",
    company: "Absolut Fitness",
    clientPhoto: "/fitness-entrepreneur-headshot.jpg",
    videoUrl: "/testimonial-video-3.jpg",
  },
  {
    quote: "Their strategic approach to branding helped us stand out in a competitive market.",
    author: "Ranveer Singh",
    role: "Actor",
    company: "Xume Studios",
    clientPhoto: "/celebrity-professional-photo.jpg",
    videoUrl: "/testimonial-video-4.jpg",
  },
  {
    quote: "Creative excellence combined with strategic thinking. Highly recommend their services.",
    author: "Ashneer Grover",
    role: "Founder",
    company: "BharatPe",
    clientPhoto: "/startup-founder-portrait.jpg",
    videoUrl: "/testimonial-video-5.jpg",
  },
  {
    quote: "From concept to execution, they delivered beyond our expectations every single time.",
    author: "Sanjiyot Keer",
    role: "Entrepreneur",
    company: "Keer Industries",
    clientPhoto: "/business-owner-professional.jpg",
    videoUrl: "/testimonial-video-6.jpg",
  },
  {
    quote: "The most talented team I've worked with. They truly understand modern branding.",
    author: "Ranveer Allahbadia",
    role: "Content Creator",
    company: "BeerBiceps",
    clientPhoto: "/content-creator-headshot.jpg",
    videoUrl: "/testimonial-video-7.jpg",
  },
]

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const scrollTimeoutRef = useRef<NodeJS.Timeout>()
  const [phase, setPhase] = useState<"shrink" | "expand" | "idle">("expand")

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.4 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const handleWheel = (e: WheelEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) return

      const isAtEnd = activeIndex === testimonials.length - 1
      const isAtStart = activeIndex === 0
      const isScrollingDown = e.deltaY > 0
      const isScrollingUp = e.deltaY < 0

      if ((isAtEnd && isScrollingDown) || (isAtStart && isScrollingUp)) {
        return
      }

      e.preventDefault()

      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current)

      setPhase("shrink")
      scrollTimeoutRef.current = setTimeout(() => {
        if (isScrollingDown && activeIndex < testimonials.length - 1) {
          setActiveIndex((prev) => prev + 1)
        } else if (isScrollingUp && activeIndex > 0) {
          setActiveIndex((prev) => prev - 1)
        }
        setPhase("expand")
      }, 150)
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" && activeIndex < testimonials.length - 1) {
        setPhase("shrink")
        scrollTimeoutRef.current = setTimeout(() => {
          setActiveIndex((prev) => prev + 1)
          setPhase("expand")
        }, 150)
      } else if (e.key === "ArrowUp" && activeIndex > 0) {
        setPhase("shrink")
        scrollTimeoutRef.current = setTimeout(() => {
          setActiveIndex((prev) => prev - 1)
          setPhase("expand")
        }, 150)
      }
    }

    window.addEventListener("wheel", handleWheel, { passive: false })
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("wheel", handleWheel)
      window.removeEventListener("keydown", handleKeyDown)
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current)
    }
  }, [isVisible, activeIndex])

  const getBubbleStyle = () => {
    if (phase === "shrink") {
      return {
        scale: 0.3,
        opacity: 0,
      }
    }
    return {
      scale: 1,
      opacity: 1,
    }
  }

  const bubbleStyle = getBubbleStyle()

  return (
    <section ref={containerRef} className="min-h-screen bg-black flex items-center justify-center">
      <div className="max-w-full px-3 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <div
            className="relative w-full transition-all duration-300 ease-out"
            style={{
              transform: `scale(${bubbleStyle.scale})`,
              opacity: bubbleStyle.opacity,
            }}
          >
            {/* Outer glow effect */}
            <div className="absolute -inset-12 bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Main bubble card with video */}
            <div className="relative bg-gradient-to-br from-white/8 to-white/5 border border-white/20 rounded-3xl p-8 md:p-12 backdrop-blur-sm shadow-2xl">
              {/* Inner glow accent lines */}
              <div className="absolute top-0 left-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent transform -translate-x-1/2 opacity-50" />

              {/* Flex layout with video on right (hidden on mobile) */}
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
                {/* Left side - Quote section */}
                <div className="flex-1 flex flex-col justify-between">
                  <div className="space-y-6">
                    {/* Quote mark decoration */}
                    <div className="text-6xl md:text-7xl text-white/20">
                      "
                    </div>

                    <p
                      className="text-[16px] md:text-[18px] lg:text-[18px] font-regular text-white leading-relaxed tracking-tight transition-all duration-300"
                      style={{
                        opacity: phase === "expand" ? 1 : 0.2,
                        transform: phase === "expand" ? "translateY(0)" : "translateY(-10px)",
                        transitionDelay: "50ms",
                      }}
                    >
                      {testimonials[activeIndex].quote}
                    </p>
                  </div>

                  {/* Author info with expanding animation */}
                  <div
                    className="border-t border-white pt-8 transition-all duration-300 mt-8"
                    style={{
                      opacity: phase === "expand" ? 1 : 0.2,
                      transform: phase === "expand" ? "translateY(0)" : "translateY(10px)",
                      transitionDelay: "100ms",
                    }}
                  >
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/20 flex-shrink-0">
                          <img
                            src={testimonials[activeIndex].clientPhoto || "/placeholder.svg"}
                            alt={testimonials[activeIndex].author}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-[16px] tracking-tight leading-relaxed text-white font-medium">
                            {testimonials[activeIndex].author}
                          </p>
                          <p className="text-[14px] tracking-tight leading-none text-white font-medium">
                            {testimonials[activeIndex].role} at {testimonials[activeIndex].company}
                          </p>
                        </div>
                      </div>

                      
                    </div>
                  </div>
                </div>

                <div
                  className="hidden lg:flex lg:w-64 flex-shrink-0 transition-all duration-300"
                  style={{
                    opacity: phase === "expand" ? 1 : 0.2,
                    transform: phase === "expand" ? "translateY(0)" : "translateY(10px)",
                    transitionDelay: "150ms",
                  }}
                >
                  <div className="w-full aspect-[9/16] rounded-2xl overflow-hidden border border-white/20 bg-white/5 flex items-center justify-center">
                    <img
                      src={testimonials[activeIndex].videoUrl || "/placeholder.svg"}
                      alt={`${testimonials[activeIndex].author} video testimonial`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
