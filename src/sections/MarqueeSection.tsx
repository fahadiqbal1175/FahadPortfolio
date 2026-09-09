import React, { useEffect, useRef, useState } from 'react'

const row1Labels = ['PyTorch', 'FastAPI', 'Docker', 'TensorFlow', 'Python']
const row2Labels = ['Pandas', 'Git', 'AWS', 'Node.js', 'MySQL']

// Triple the labels for seamless loop
const row1 = [...row1Labels, ...row1Labels, ...row1Labels]
const row2 = [...row2Labels, ...row2Labels, ...row2Labels]

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      // Calculate offset based on scroll position relative to the section
      const calculatedOffset = (window.scrollY - sectionRef.current.offsetTop + window.innerHeight) * 0.3
      setOffset(calculatedOffset)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initialize

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section 
      ref={sectionRef} 
      className="bg-[#0A0F0D] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden flex flex-col gap-3"
    >
      {/* Row 1 */}
      <div 
        className="flex gap-3" 
        style={{ 
          transform: `translateX(${offset - 200}px)`, 
          willChange: 'transform' 
        }}
      >
        {row1.map((label, index) => (
          <div 
            key={`r1-${index}`} 
            className="flex-shrink-0 w-[320px] h-[200px] rounded-2xl bg-[#111A17] border border-[#52E2B1]/20 flex items-center justify-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#52E2B1]/5 to-[#47C8FF]/5" />
            <span className="text-[#D7E2EA] font-mono text-lg font-bold uppercase relative z-10">
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* Row 2 */}
      <div 
        className="flex gap-3" 
        style={{ 
          transform: `translateX(${-(offset - 200)}px)`, 
          willChange: 'transform' 
        }}
      >
        {row2.map((label, index) => (
          <div 
            key={`r2-${index}`} 
            className="flex-shrink-0 w-[320px] h-[200px] rounded-2xl bg-[#111A17] border border-[#52E2B1]/20 flex items-center justify-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#52E2B1]/5 to-[#47C8FF]/5" />
            <span className="text-[#D7E2EA] font-mono text-lg font-bold uppercase relative z-10">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
