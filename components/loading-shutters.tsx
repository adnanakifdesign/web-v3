"use client"

import { useEffect, useState } from "react"

export function LoadingShutters() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Trigger animation after a brief delay
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* Top Shutter */}
      <div
        className={`fixed top-0 left-0 w-full bg-background z-50 transition-transform duration-1000 ease-in-out ${
          isOpen ? "-translate-y-full" : "translate-y-0"
        }`}
        style={{ height: "50vh" }}
      />

      {/* Bottom Shutter */}
      <div
        className={`fixed bottom-0 left-0 w-full bg-background z-50 transition-transform duration-1000 ease-in-out ${
          isOpen ? "translate-y-full" : "translate-y-0"
        }`}
        style={{ height: "50vh" }}
      />

      {/* Hidden when shutters are closed */}
      {isOpen && (
        <style>{`
          body {
            overflow: auto;
          }
        `}</style>
      )}
    </>
  )
}
