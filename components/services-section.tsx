"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { ServiceCards } from "./service-cards"

export function ServicesSection() {
  const servicesRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Placeholder for any future intersection logic
        }
      },
      { threshold: 0.5 },
    )

    if (servicesRef.current) {
      observer.observe(servicesRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="w-full bg-black py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-8">
      <div className="max-w-full mx-auto">
        <div className="space-y-0 md:space-y-2 overflow-hidden -mt-2 md:mt-0">
          <h2 className="text-[48px] lg:text-[128px] font-medium text-white mb-0 leading-none tracking-tight">
  <span className="block">Service</span>
  <span className="block">We Provide</span>
</h2>
        </div>

        <div className="mt-0 md:mt-16 lg:mt-10 flex items-center gap-0 group cursor-pointer">
          <Link
            href="/services"
            className="hidden md:flex items-center justify-between w-full max-w-lg bg-white/10 px-0 md:px-0 py-3 md:py-4 border-t border-gray-300 text-white font-medium text-lg md:text-xl hover:border-[#2563eb] hover:text-[#2563eb] hover:bg-[#2563eb]/20 
             transition-all duration-300 ease-out group cursor-pointer"
          >
            Learn More
            <svg
              className="w-5 h-5 md:w-6 md:h-6 text-white transition-transform duration-300 
               group-hover:rotate-[-30deg] group-hover:text-[#2563eb]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
                fill="currentColor"
              />
            </svg>
          </Link>
        </div>

        <ServiceCards />
      </div>
    </section>
  )
}
