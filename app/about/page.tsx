"use client"
import Link from "next/link"

import { Header } from "@/components/header"
import { DesktopScrollHeader } from "@/components/desktop-scroll-header"
import { ScrollHeader } from "@/components/scroll-header"
import { WorkHeader } from "@/components/work-header"
import Image from "next/image"
import { useRef, useEffect, useState } from "react"

export default function About() {
  const imageRef = useRef<HTMLDivElement>(null)
  const descriptionRef = useRef<HTMLDivElement>(null)
  const [imageAnimated, setImageAnimated] = useState(false)
  const [animatedLines, setAnimatedLines] = useState<boolean[]>([])
  const agencyRef = useRef<HTMLDivElement>(null)
  const agencyTextRef = useRef<HTMLDivElement>(null)
  const [agencyAnimated, setAgencyAnimated] = useState(false)
  const founderImageRef = useRef<HTMLDivElement>(null)
  const founderTextRef = useRef<HTMLDivElement>(null)
  const [founderImageAnimated, setFounderImageAnimated] = useState(false)
  const [founderTextAnimated, setFounderTextAnimated] = useState<boolean[]>([])
  const [studioLinesAnimated, setStudioLinesAnimated] = useState<boolean[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImageAnimated(true)
        }
      },
      { threshold: 0.3 },
    )

    if (imageRef.current) {
      observer.observe(imageRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const lines = [
            "lOZ!NR was built on a simple belief that great design isn't just something you see, it's something you feel.",
            "We work closely with founders, startups and global teams to build brands that are bold in thinking and refined in execution.",
            "Our process is hands-on and collaborative, combining clear strategy with creative instinct to create work that's thoughtful, lasting and truly you.",
          ]

          setAnimatedLines(new Array(lines.length).fill(false))

          lines.forEach((_, index) => {
            setTimeout(() => {
              setAnimatedLines((prev) => {
                const newLines = [...prev]
                newLines[index] = true
                return newLines
              })
            }, index * 300)
          })
        }
      },
      { threshold: 0.5 },
    )

    if (descriptionRef.current) {
      observer.observe(descriptionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAgencyAnimated(true)
        }
      },
      { threshold: 0.3 },
    )

    if (agencyRef.current) {
      observer.observe(agencyRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFounderImageAnimated(true)
        }
      },
      { threshold: 0.3 },
    )

    if (founderImageRef.current) {
      observer.observe(founderImageRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const lines = [
            "Design should feel like clarity not noise. At lOZ!NR, we don't just design brands, we shape identities that speak without shouting, and last without forcing.",
          ]

          setFounderTextAnimated(new Array(lines.length).fill(false))

          lines.forEach((_, index) => {
            setTimeout(() => {
              setFounderTextAnimated((prev) => {
                const newLines = [...prev]
                newLines[index] = true
                return newLines
              })
            }, index * 300)
          })
        }
      },
      { threshold: 0.5 },
    )

    if (founderTextRef.current) {
      observer.observe(founderTextRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStudioLinesAnimated(new Array(4).fill(false))

          // Animate each line with stagger
          for (let i = 0; i < 4; i++) {
            setTimeout(() => {
              setStudioLinesAnimated((prev) => {
                const newLines = [...prev]
                newLines[i] = true
                return newLines
              })
            }, i * 200)
          }
        }
      },
      { threshold: 0.5 },
    )

    if (descriptionRef.current) {
      observer.observe(descriptionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <main className="bg-black text-white lg:px-0 ">
      <DesktopScrollHeader />
      <Header />
      <ScrollHeader />
      <WorkHeader title="About Us" showFilters={false} />

      <section className="py-0 px-0 md:px-4 lg:px-8 border-b border-white/30">
        <div className="max-w-full mx-auto">
          <div ref={imageRef} className="relative w-full aspect-[16/9] overflow-hidden">
            <Image src="/images/design-mode/img2.avif" alt="lOZ!NR Studio Team" fill className="object-cover" />
          </div>
        </div>
      </section>

      <section className="py-20 px-3 md:px-4 lg:px-8 bg-black">
        <div className="max-w-full mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left side - Title */}
            <div className="text-4xl md:text-5xl lg:text-[36px] tracking-tight font-medium">Studio Story</div>

            <div ref={descriptionRef} className="space-y-6">
              <div
                style={{
                  opacity: studioLinesAnimated[0] ? 1 : 0,
                  transform: studioLinesAnimated[0] ? "translateY(0)" : "translateY(30px)",
                  transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
                }}
              >
                <p className="text-lg md:text-xl lg:text-[30px] tracking-tight leading-0.7 font-medium">
                  lOZ!NR was built on a simple belief that great design isn't just something you see, it's something you
                  feel.
                </p>
              </div>
              <div
                style={{
                  opacity: studioLinesAnimated[1] ? 1 : 0,
                  transform: studioLinesAnimated[1] ? "translateY(0)" : "translateY(30px)",
                  transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
                }}
              >
                <p className="text-lg md:text-xl lg:text-[30px] tracking-tight leading-0.7 font-medium">
                  We work closely with founders, startups and global teams to build brands that are bold in thinking and
                  refined in execution.
                </p>
              </div>
              <div
                style={{
                  opacity: studioLinesAnimated[2] ? 1 : 0,
                  transform: studioLinesAnimated[2] ? "translateY(0)" : "translateY(30px)",
                  transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
                }}
              >
                <p className="text-lg md:text-xl lg:text-[30px] tracking-tight leading-0.7 font-medium">
                  Our process is hands-on and collaborative, combining clear strategy with creative instinct to create
                  work that's thoughtful, lasting and truly you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-3 md:px-4 lg:px-8 bg-black border-t border-white/30">
        <div className="max-w-full mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left side - Image */}
            <div
              ref={agencyRef}
              className="relative w-full aspect-square overflow-hidden order-2 md:order-1"
              style={{
                opacity: agencyAnimated ? 1 : 0,
                transform: agencyAnimated ? "translateY(0)" : "translateY(60px)",
                transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
            >
              <Image src="/images/design-mode/img2.avif" alt="lOZ!NR Agency Team" fill className="object-cover" />
            </div>

            {/* Right side - Content */}
            <div className="order-1 md:order-2">
              <h2 className="text-[16px]  font-medium mb-4 text-white/90">[] Our Agency</h2>
              <h3 className="text-[16px]  font-medium mb-8 text-white/90">Where creativity meets technology.</h3>

              <div ref={agencyTextRef} className="space-y-6">
                {[
                  "At lOZ!NR, we create brand experiences that are timeless, scalable and built to connect. Through thoughtful design systems, we help founders bring their ideas to life with clarity, emotion and intention.",
                  "We believe great design should move with meaning. Our vision is to build brands that lead. By bringing together strategy, motion and craft, we aim to shape the next wave of iconic identities that push culture and business forward.",
                ].map((line, index) => (
                  <p
                    key={index}
                    className="text-[16px] leading-0.7 font-regular font-medium text-white/90"
                    style={{
                      opacity: agencyAnimated ? 1 : 0,
                      transform: agencyAnimated ? "translateY(0)" : "translateY(30px)",
                      transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
                      transitionDelay: `${index * 0.1}s`,
                    }}
                  >
                    {line}
                  </p>
                ))}
              </div>
              <div className="mt-8 inline-block relative group">
                <Link href="/contact" className="flex items-center gap-2 text-white text-[14px] font-regular">
                  <span className="relative">
                    Contact Us
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
                  </span>
                  <svg
                    className="w-4 h-4 transform transition-transform duration-300 group-hover:rotate-[45deg]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-3 md:px-4 lg:px-8 bg-black">
        {/* White decorative shape at top */}
        <div className="absolute top-0 lg:left-8 lg:right-8 right-3 left-3  h-16 bg-white"></div>

        <div className="max-w-full mx-auto pt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            {/* Left side - Label */}
            <div className="text-[16px] font-medium text-white/90">Our founder</div>

            {/* Center - Image */}
            <div
              ref={founderImageRef}
              className="relative w-full aspect-square overflow-hidden"
              style={{
                opacity: founderImageAnimated ? 1 : 0,
                transform: founderImageAnimated ? "translateY(0)" : "translateY(60px)",
                transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
            >
              <Image src="/images/design-mode/img2.avif" alt="Founder Portrait" fill className="object-cover" />
            </div>

            {/* Right side - Content */}
            <div ref={founderTextRef} className="space-y-6">
              {[
                "Design should feel like clarity not noise. At lOZ!NR, we don't just design brands, we shape identities that speak without shouting, and last without forcing.",
              ].map((line, index) => (
                <p
                  key={index}
                  className="text-[16px] leading-1.6 font-regular text-white/90"
                  style={{
                    opacity: founderTextAnimated[index] ? 1 : 0,
                    transform: founderTextAnimated[index] ? "translateY(0)" : "translateY(30px)",
                    transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  }}
                >
                  {line}
                </p>
              ))}

              <div className="space-y-3 pt-4">
                <p className="text-white font-medium text-[16px]">Adnan Akif</p>
                <p className="text-white/60 text-[14px]">Founder & Creative Director</p>
              </div>

              <div className="flex flex-col gap-3 pt-6">
                {[
                  { name: "Instagram", href: "https://www.instagram.com/adnanakifdesign/" },
                  { name: "Facebook", href: "https://web.facebook.com/brandzinr" },
                  { name: "Youtube", href: "https://www.youtube.com/@adnanakifdesign" },
                ].map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-white text-[14px] flex items-center gap-2 relative group"
                  >
                    <span className="relative inline-block">
                      {item.name}
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
                    </span>

                    <svg
                      className="w-4 h-4 transform transition-transform duration-500 group-hover:rotate-[45deg]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
