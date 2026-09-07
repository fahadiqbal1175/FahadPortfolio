import React from 'react'
import FadeIn from '../components/FadeIn'
import AnimatedText from '../components/AnimatedText'
import ContactButton from '../components/ContactButton'

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center relative px-5 sm:px-8 md:px-10 py-20 bg-[#0A0F0D]">
      {/* Decorative Corners */}
      <FadeIn delay={0.1} x={-80} y={0} duration={0.9} className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] text-6xl sm:text-7xl md:text-8xl opacity-30">
        🧠
      </FadeIn>
      <FadeIn delay={0.25} x={-80} y={0} duration={0.9} className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] text-6xl sm:text-7xl md:text-8xl opacity-30">
        ⚡
      </FadeIn>
      <FadeIn delay={0.15} x={80} y={0} duration={0.9} className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] text-6xl sm:text-7xl md:text-8xl opacity-30">
        🔬
      </FadeIn>
      <FadeIn delay={0.3} x={80} y={0} duration={0.9} className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] text-6xl sm:text-7xl md:text-8xl opacity-30">
        🤖
      </FadeIn>

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
