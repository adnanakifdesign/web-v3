"use client"

import { useEffect, useState } from "react"

export function HomePageShutters() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Trigger animation immediately on component mount
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      {/* Top Shutter */}
      <div
        className="fixed top-0 left-0 right-0 h-1/2 bg-background transition-all duration-1000 ease-out"
        style={{
          transform: isOpen ? "translateY(-100%)" : "translateY(0)",
        }}
      />
      {/* Bottom Shutter */}
      <div
        className="fixed bottom-0 left-0 right-0 h-1/2 bg-background transition-all duration-1000 ease-out"
        style={{
          transform: isOpen ? "translateY(100%)" : "translateY(0)",
        }}
      />
    </div>
  )
}
