import React from 'react'
import FadeIn from '../components/FadeIn'
import AnimatedText from '../components/AnimatedText'
import ContactButton from '../components/ContactButton'

/* Subtle geometric SVG decorations instead of emojis */
const DecoNode = ({ className, delay, x }: { className: string; delay: number; x: number }) => (
  <FadeIn delay={delay} x={x} y={0} duration={0.9} className={`absolute pointer-events-none select-none ${className}`}>
    <svg viewBox="0 0 120 120" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Neural network node cluster */}
      <circle cx="60" cy="60" r="8" fill="#52E2B1" opacity="0.15" />
      <circle cx="60" cy="60" r="24" stroke="#52E2B1" strokeWidth="1" opacity="0.1" />
      <circle cx="60" cy="60" r="48" stroke="#47C8FF" strokeWidth="0.5" opacity="0.08" />
      <circle cx="30" cy="35" r="4" fill="#47C8FF" opacity="0.12" />
      <circle cx="90" cy="85" r="4" fill="#52E2B1" opacity="0.12" />
      <circle cx="85" cy="30" r="3" fill="#D7E2EA" opacity="0.1" />
      <circle cx="35" cy="90" r="3" fill="#D7E2EA" opacity="0.1" />
      <line x1="60" y1="60" x2="30" y2="35" stroke="#52E2B1" strokeWidth="0.5" opacity="0.1" />
      <line x1="60" y1="60" x2="90" y2="85" stroke="#47C8FF" strokeWidth="0.5" opacity="0.1" />
      <line x1="60" y1="60" x2="85" y2="30" stroke="#D7E2EA" strokeWidth="0.5" opacity="0.08" />
      <line x1="60" y1="60" x2="35" y2="90" stroke="#D7E2EA" strokeWidth="0.5" opacity="0.08" />
    </svg>
  </FadeIn>
)

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center relative px-5 sm:px-8 md:px-10 py-20 bg-[#0A0F0D] overflow-hidden">
      {/* Subtle geometric corner decorations */}
      <DecoNode className="top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[100px] sm:w-[140px] md:w-[180px]" delay={0.1} x={-80} />
      <DecoNode className="bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[80px] sm:w-[110px] md:w-[150px]" delay={0.25} x={-80} />
      <DecoNode className="top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[100px] sm:w-[140px] md:w-[180px]" delay={0.15} x={80} />
      <DecoNode className="bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[80px] sm:w-[110px] md:w-[150px]" delay={0.3} x={80} />

      {/* Center Content */}
      <div className="flex flex-col items-center w-full">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase text-center tracking-tight leading-none" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
            ABOUT ME
          </h2>
        </FadeIn>

        <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16 w-full mt-10 sm:mt-14 md:mt-16">
          <AnimatedText 
            text="I'm an AI/ML engineer focused on building practical, deployable AI systems across computer vision, recommender systems, and applied NLP. I combine machine learning with full-stack engineering to take ideas from model development to real, user-facing applications. Let's build something intelligent together!" 
            className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px]"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          />

          <div className="mt-16 sm:mt-20 md:mt-24">
            <ContactButton />
          </div>
        </div>
      </div>
    </section>
  )
}
