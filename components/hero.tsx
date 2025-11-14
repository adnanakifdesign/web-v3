"use client"

import { useEffect, useRef, useState } from "react"

export function Hero() {
  const [animationKey, setAnimationKey] = useState(0)
  const heroRef = useRef(null)
  const svgRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimationKey((prev) => prev + 1)

          setTimeout(() => {
            if (svgRef.current) {
              const letters = svgRef.current.querySelectorAll(".letter")
              letters.forEach((letter) => {
                letter.classList.add("animate")
              })
            }
          }, 10)
        }
      },
      { threshold: 0.4 },
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="w-full bg-black" ref={heroRef}>
      <style>{`
        @keyframes slideDownLetter {
          0% {
            opacity: 0;
            transform: translateY(-40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .letter {
          opacity: 0;
        }

        .letter.animate {
          animation: slideDownLetter 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .svg-container {
          filter: drop-shadow(0 0 15px rgba(255, 255, 255, 0.08));
          transition: filter 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .svg-container:hover {
          filter: drop-shadow(0 0 25px rgba(255, 255, 255, 0.15));
        }
      `}</style>

      {/* Hero SVG Section */}
      <div className="py-25 md:py-24 lg:py-20 flex items-center justify-center">
        <div className="w-full max-w-full px-3 md:px-6 lg:px-4">
          <svg
            ref={svgRef}
            viewBox="0 0 864.88 213.87"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto svg-container"
            preserveAspectRatio="xMidYMid meet"
            key={animationKey}
          >
            <defs>
              <style>
                {`.cls-1 {
                  fill: #fff;
                }`}
              </style>
            </defs>
            <path
              className={`cls-1 letter`}
              d="M10.89,201.34V11.21h37.07v190.13H10.89Z"
              style={{ animationDelay: "0.05s" }}
            />
            <path
              className={`cls-1 letter`}
              d="M68.25,106.02c0-54.65,40.67-94.81,93.29-94.81s93.79,40.16,93.79,94.81-40.92,95.32-93.79,95.32-93.29-40.67-93.29-95.32ZM215.42,106.02c0-33.55-20.33-60.24-53.89-60.24s-53.63,26.69-53.63,60.24,20.33,60.75,53.63,60.75,53.89-27.2,53.89-60.75Z"
              style={{ animationDelay: "0.12s" }}
            />
            <path
              className={`cls-1 letter`}
              d="M261.4,201.34v-31.78l97.18-123.66h-96.92V11.21h146.44v32.31l-97.71,123.14h100.89v34.69h-149.88Z"
              style={{ animationDelay: "0.19s" }}
            />
            <path
              className={`cls-1 letter`}
              d="M460.78,202.66c-14.56,0-25.42-10.06-25.42-24.1s10.59-24.36,25.42-24.36,25.42,10.33,25.42,24.36-10.86,24.1-25.42,24.1ZM446.75,144.14l-9.27-132.93h46.61l-9.53,132.93h-27.8Z"
              style={{ animationDelay: "0.26s" }}
            />
            <path
              className={`cls-1 letter`}
              d="M547.09,68.67v132.67h-36.81V11.21h43.43l82.88,126.05V11.21h37.07v190.13h-39.46l-87.12-132.67Z"
              style={{ animationDelay: "0.33s" }}
            />
            <path
              className={`cls-1 letter`}
              d="M697.75,201.34V11.21h74.41c47.93,0,75.73,22.24,75.73,61.7,0,25.69-15.89,46.08-42.9,55.08l48.99,73.35h-47.93l-42.9-67.26h-25.16v67.26h-40.25ZM738,100.98h32.31c24.36,0,37.34-9.53,37.34-28.07s-12.97-28.33-37.34-28.33h-32.31v56.4Z"
              style={{ animationDelay: "0.4s" }}
            />
          </svg>
        </div>
      </div>

      {/* ProjectThumbnails moved to page.tsx after video section */}
    </section>
  )
}
