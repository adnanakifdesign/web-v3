"use client"

import { useState } from "react"

const faqs = [
  {
    question: "What services does your agency provide?",
    answer:
      "Our branding agency offers brand strategy, logo design, visual identity development, brand guidelines, and marketing collateral to establish and elevate your brand.",
  },
  {
    question: "How does your branding process work?",
    answer:
      "We begin with discovery and strategy, move into design concepts, gather your feedback through revisions, and finalize with brand guidelines delivery.",
  },
  {
    question: "What is the typical project timeline?",
    answer:
      "Most branding projects take 4-8 weeks depending on scope and complexity. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "How much does branding cost?",
    answer:
      "Our branding packages range from $3,000 to $15,000+ depending on the scope. We customize quotes based on your specific needs and goals.",
  },
  {
    question: "Can I see examples of your past work?",
    answer:
      "Yes, we maintain a portfolio of our best work on our website. Each project showcases our process and the results we've delivered for our clients.",
  },
  {
    question: "Do you offer logo design only?",
    answer:
      "While logo design is our specialty, we offer comprehensive branding services including identity systems, brand guidelines, and marketing materials.",
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-black text-white py-20 px-4 lg:px-8">
      <div className="max-w-full mx-auto">
        <h2 className="text-[48px] lg:text-[96px] font-medium text-white mb-12 leading-none tracking-tight">
  <span className="block">Frequently Asked</span>
  <span className="block">Questions</span>
</h2>

        <div className="border-t border-{#494949] mb-0" />

        {/* FAQ Items */}
        <div>
          {faqs.map((faq, index) => (
            <div key={index}>
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 flex items-center justify-between text-left group"
              >
                <h3 className="text-[16px] lg:text-[24px] font-medium text-[#b4b4b4] pr-4">{faq.question}</h3>
                <span
                  className={`flex-shrink-0 text-2xl text-[#494949] transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="pb-6">
                  <p className="text-[#494949] leading-relaxed text-[14px] lg:text-[18px]">{faq.answer}</p>
                </div>
              </div>

              {/* Divider between FAQ items */}
              <div className="border-b border-[#494949]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
