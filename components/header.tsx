"use client"
import Link from "next/link"

export function Header() {
  return (
    <header className="w-full bg-black text-white font-sans hidden lg:block">
      <div className="max-w-full mx-auto px-1 lg:px-8 py-6 grid grid-cols-4 items-center gap-8">
        {/* Grid 1: Brand - made into link to homepage */}
        <Link href="/" className="nav-link text-base lg:text-[18px] font-medium tracking-wide">
          lozinr.com
        </Link>

        {/* Grid 2: Agency Title */}
        <div className="text-2xl lg:text-[18px] font-medium tracking-normal">Branding Agency</div>

        {/* Grid 3: Navigation */}
        <nav className="flex gap-6 lg:text-[18px] text-base font-medium justify-center">
          <Link href="/" className="nav-link">
            Home
          </Link>
          <Link href="/work" className="nav-link">
            Work
          </Link>
          <Link href="/services" className="nav-link">
            Services
          </Link>
          <Link href="/about" className="nav-link">
            About
          </Link>
        </nav>

        {/* Grid 4: CTA Button */}
        <div className="flex justify-end">
          <Link
            href="/contact"
            className="bg-white lg:text-[18px] text-black px-4 py-1 font-medium font-sans group inline-flex items-center gap-1"
          >
            Let's Talk
            <svg
              className="w-4 h-4 transition-transform"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  )
}
