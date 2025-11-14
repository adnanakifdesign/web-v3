"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { COUNTRIES } from "@/data/countries"

export function PhoneInput({ value, onChange, placeholder = "00000 00000", className = "" }: PhoneInputProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0])
  const dropdownRef = useRef<HTMLDivElement>(null)

  const filteredCountries = COUNTRIES.filter(
    (country) => country.country.toLowerCase().includes(searchTerm.toLowerCase()) || country.code.includes(searchTerm),
  )

  const handleCountrySelect = (country: (typeof COUNTRIES)[0]) => {
    setSelectedCountry(country)
    setIsOpen(false)
    setSearchTerm("")
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      return () => {
        document.removeEventListener("mousedown", handleClickOutside)
      }
    }
  }, [isOpen])

  return (
    <div className={`w-full ${className}`}>
      <div ref={dropdownRef} className="relative w-full min-w-0">
        <div className="relative w-full bg-white text-black rounded-lg border border-gray-300 flex items-center h-18 overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">
          {/* Country Selector Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="h-full px-3 py-2 flex rounded-l-lg items-center gap-1 border-r border-gray-300 hover:bg-gray-50 transition-colors flex-shrink-0"
          >
            <span className="text-lg">{selectedCountry.flag}</span>
            <span className="text-xs sm:text-sm font-medium whitespace-nowrap">{selectedCountry.code}</span>
            <svg
              className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>

          {/* Phone Number Input */}
          <input
            type="tel"
            value={value}
            onChange={handlePhoneChange}
            placeholder={placeholder}
            className="flex-1 h-full px-4 py-2 bg-white text-black placeholder-[#888] placeholder:text-[16px] focus:outline-none min-w-0"
          />
        </div>

        {/* Dropdown */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-[#111] border border-[#333] rounded-lg z-50 max-h-64 flex flex-col animate-in fade-in slide-in-from-top-2 duration-200">
            {/* Search Input */}
            <div className="p-3 border-b border-[#333] sticky top-0">
              <div className="relative">
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
                <input
                  type="text"
                  placeholder="Search countries..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-sm border border-[#333] rounded-lg"
                  autoFocus
                />
              </div>
            </div>

            {/* Country List */}
            <div className="overflow-y-auto flex-1">
              {filteredCountries.length > 0 ? (
                filteredCountries.map((country) => (
                  <button
                    key={`${country.code}-${country.country}`}
                    onClick={() => handleCountrySelect(country)}
                    className="w-full px-4 py-3 text-left text-sm hover:bg-[#222] transition-colors flex items-center gap-3 border-b border-[#333] last:border-b-0"
                  >
                    <span className="text-lg">{country.flag}</span>
                    <span className="font-medium">{country.code}</span>
                    <span className="text-white">{country.country}</span>
                  </button>
                ))
              ) : (
                <div className="px-4 py-8 text-center text-white text-sm">No countries found</div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

interface PhoneInputProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
}
