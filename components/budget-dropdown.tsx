"use client"

import { useState, useRef, useEffect } from "react"

interface BudgetDropdownProps {
  value: string
  onChange: (value: string) => void
  options: Array<{ label: string; value: string }>
  required?: boolean
}

export function BudgetDropdown({ value, onChange, options, required = false }: BudgetDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedBudget, setSelectedBudget] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      return () => document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  const handleSelect = (budgetValue: string) => {
    setSelectedBudget(budgetValue)
    onChange(budgetValue)
    setIsOpen(false)
  }

  return (
    <div ref={dropdownRef} className="relative w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between h-18 px-4 bg-white rounded-lg text-black"
        type="button"
      >
        <span className={selectedBudget ? "text-black" : "text-muted-foreground"}>
          {selectedBudget || "Select a Budget"}
        </span>
        <svg
          className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          {/* Currency label */}
          <div className="px-4 py-2 text-xs text-[#555] bg-white border-b border-border">$USD</div>

          {/* Budget options */}
          <div className="divide-y divide-border">
            {options.map((budget, index) => (
              <button
                key={budget.value}
                onClick={() => handleSelect(budget.value)}
                className={`w-full text-left px-4 py-3 transition-colors ${
                  selectedBudget === budget.value
                    ? "bg-white text-black"
                    : "hover:bg-black hover:text-white text-black "
                } animate-in fade-in slide-in-from-top-2`}
                style={{
                  animationDelay: `${index * 50}ms`,
                  animationFillMode: "both",
                }}
                type="button"
              >
                {budget.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
