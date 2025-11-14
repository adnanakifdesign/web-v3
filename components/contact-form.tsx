"use client"

import type React from "react"
import { PhoneInput } from "@/components/phone-input"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { BudgetDropdown } from "@/components/budget-dropdown"
import { COUNTRIES } from "@/data/countries"

interface FormData {
  name: string
  organization: string
  email: string
  phone: string
  countryCode: string
  socialLink: string
  budget: string
  services: {
    logoDesign: boolean
    brandIdentity: boolean
    packagingDesign: boolean
    brandConsultation: boolean
    webDesign: boolean
  }
  message: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    organization: "",
    email: "",
    phone: "",
    countryCode: "+1",
    socialLink: "",
    budget: "",
    services: {
      logoDesign: false,
      brandIdentity: false,
      packagingDesign: false,
      brandConsultation: false,
      webDesign: false,
    },
    message: "",
  })

  const [showSuccess, setShowSuccess] = useState(false)

  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => {
        setShowSuccess(false)
      }, 6000)
      return () => clearTimeout(timer)
    }
  }, [showSuccess])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleCheckboxChange = (service: keyof FormData["services"]) => {
    setFormData((prev) => ({
      ...prev,
      services: {
        ...prev.services,
        [service]: !prev.services[service],
      },
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!formData.name.trim()) {
      alert("Please enter your name")
      return
    }

    if (!formData.organization.trim()) {
      alert("Please enter your organization name")
      return
    }

    if (!formData.email.trim()) {
      alert("Please enter your email")
      return
    }

    if (!formData.phone.trim()) {
      alert("Please enter your phone number")
      return
    }

    if (!formData.socialLink.trim()) {
      alert("Please enter your social link")
      return
    }

    if (!formData.budget) {
      alert("Please select a budget")
      return
    }

    const hasSelectedService = Object.values(formData.services).some((value) => value === true)
    if (!hasSelectedService) {
      alert("Please select at least one service")
      return
    }

    if (!formData.message.trim()) {
      alert("Please enter a message about your project")
      return
    }

    const formElement = e.currentTarget
    const formDataObj = new FormData(formElement)

    const countryData = COUNTRIES.find((c) => c.code === formData.countryCode)
    const phoneWithFlag = `${countryData?.flag || ""} ${formData.countryCode}${formData.phone}`

    // Add additional fields from state
    formDataObj.set("email", formData.email || "")
    formDataObj.set("phone", phoneWithFlag)
    formDataObj.set("budget", formData.budget)
    formDataObj.set(
      "services",
      Object.entries(formData.services)
        .filter(([, checked]) => checked)
        .map(([service]) => service)
        .join(", "),
    )

    fetch("https://formspree.io/f/xjkoweql", {
      method: "POST",
      body: formDataObj,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log("Form submitted successfully to Formspree")
          setShowSuccess(true)
          // Reset form
          setFormData({
            name: "",
            organization: "",
            email: "",
            phone: "",
            countryCode: "+1",
            socialLink: "",
            budget: "",
            services: {
              logoDesign: false,
              brandIdentity: false,
              packagingDesign: false,
              brandConsultation: false,
              webDesign: false,
            },
            message: "",
          })
        }
      })
      .catch((error) => console.error("Form submission error:", error))
  }

  const budgetOptions = [
    { label: "$400 - $1,000", value: "$400-$1000" },
    { label: "$1,000 - $5,000", value: "$1000-$5000" },
    { label: "$5,000 - more", value: "$5000+" },
  ]

  return (
    <section className="min-h-screen bg-black text-white py-1 px-3 lg:px-8">
      {showSuccess && (
        <div className="fixed top-0 left-0 right-0 flex justify-center items-center z-50 pointer-events-none">
          <div className="animate-in fade-in slide-in-from-top-8 duration-500 mt-8 bg-[#0dce8d] text-white px-8 py-4 rounded-lg font-medium shadow-lg">
            ✓ Message sent successfully! We'll get back to you soon.
          </div>
        </div>
      )}

      <div className="max-w-full mx-auto grid grid-cols-1 lg:grid-cols-10 gap-12">
        {/* Left Column - 30% - Hidden on mobile */}
        <div className="hidden lg:flex lg:col-span-4 flex-col justify-start">
          <div className="mb-3">
            <h2 className="text-4xl lg:text-[20px] font-medium mb-3 text-white">Let's Build Bold Together</h2>
            <p className="text-[#777] lg:text-[16px] leading-0.8 mb-0">
              Whether you're ready to start a<br />
              project or just exploring, we'd love
              <br />
              to hear from you.
            </p>
          </div>

          {/* Contact Info */}
          <div className="mb-3">
            <a href="mailto:hello@lozinr.com" className="lg:text-[20px] font-bold mb-4 hover-underline cursor-pointer">
              hello@lozinr.com
            </a>
          </div>
        </div>

        {/* Right Column - 70% - Form */}
        <form onSubmit={handleSubmit} className="lg:col-span-6 space-y-4">
          {/* Name and Organization Row - Added required attribute */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="h-18 w-full bg-white text-black placeholder-[#888] rounded-lg placeholder:text-[16px]"
            />
            <Input
              type="text"
              name="organization"
              placeholder="Your Organization Name"
              value={formData.organization}
              onChange={handleInputChange}
              required
              className="h-18 w-full bg-white text-black placeholder-[#888] rounded-lg placeholder:text-[16px]"
            />
          </div>

          {/* Email + Phone Row - Added required attribute */}
          <div className="grid grid-cols-2 lg:grid-cols-2 gap-4">
            <Input
              type="email"
              name="email"
              placeholder="Email *"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="h-18 w-full bg-white text-black placeholder-[#888] rounded-lg placeholder:text-[16px]"
            />

            <div>
              <PhoneInput
                value={formData.phone}
                onChange={(phone) => setFormData((prev) => ({ ...prev, phone: phone }))}
              />
            </div>
          </div>

          {/* Social Link and Budget Row - Added required attribute to social link and removed Optional text */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
            <Input
              type="text"
              name="socialLink"
              placeholder="Your Social Link *"
              value={formData.socialLink}
              onChange={handleInputChange}
              required
              className="h-18 w-full bg-white text-black placeholder-[#888] rounded-lg placeholder:text-[16px]"
            />
            <BudgetDropdown
              value={formData.budget}
              onChange={(value) => setFormData((prev) => ({ ...prev, budget: value }))}
              options={budgetOptions}
              required
            />
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-xl lg:text-[24px] font-medium tracking-tight mb-4">
              What services are you interested in? <span className="text-red-500">*</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.services.logoDesign}
                  onChange={() => handleCheckboxChange("logoDesign")}
                  className="w-5 h-5 rounded border-gray-300 cursor-pointer"
                />
                <span>Logo design</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.services.brandIdentity}
                  onChange={() => handleCheckboxChange("brandIdentity")}
                  className="w-5 h-5 rounded border-gray-300 cursor-pointer"
                />
                <span>Brand identity development</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.services.packagingDesign}
                  onChange={() => handleCheckboxChange("packagingDesign")}
                  className="w-5 h-5 rounded border-gray-300 cursor-pointer"
                />
                <span>Packaging design</span>
              </label>
            </div>
          </div>

          {/* Message Section - Added required attribute */}
          <div>
            <h3 className="text-xl font-medium lg:text-[24px] tracking-tight mb-4">
              Tell us more about your project *
            </h3>
            <Textarea
              name="message"
              placeholder="Tell us more about your project"
              value={formData.message}
              onChange={handleInputChange}
              required
              className="min-h-40 w-full bg-white text-black placeholder-[#888] rounded-lg placeholder:text-[16px]"
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="h-18 w-full bg-[#2563eb] text-white font-medium py-3 rounded-lg lg:text-[16px] transition-all duration-300 hover:opacity-90 hover:bg-[#2563eb]"
          >
            Send
          </Button>
        </form>
      </div>
    </section>
  )
}
