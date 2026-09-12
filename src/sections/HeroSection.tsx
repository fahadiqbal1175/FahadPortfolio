import React from 'react'
import Navbar from '../components/Navbar'
import FadeIn from '../components/FadeIn'
import ContactButton from '../components/ContactButton'
import Magnet from '../components/Magnet'
import avatarImg from '../assets/images/fahad-avatar-better-green.jpeg'

export default function HeroSection() {
  return (
    <section id="hero" className="h-screen flex flex-col" style={{ overflowX: 'clip' }}>
      {/* Navbar */}
      <Navbar />

      {/* Main content: flex-1, relative for portrait positioning */}
      <div className="flex-1 relative flex flex-col justify-between px-6 pt-24 sm:pt-28 md:px-10 md:pt-32">
        
        {/* Massive heading */}
        <FadeIn delay={0.15} y={40}>
          <div className="overflow-hidden">
            <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17vw] mt-6 sm:mt-4">
              HI, I&apos;M FAHAD
            </h1>
          </div>
        </FadeIn>

        {/* Subtitle */}
        <FadeIn delay={0.25} y={20}>
          <p className="text-[#52E2B1] tracking-[0.3em] font-medium" style={{ fontSize: 'var(--text-hero-subtitle)' }}>
            AI / ML Engineer
          </p>
        </FadeIn>

        {/* Bottom bar */}
        <div className="flex flex-col items-start gap-5 pb-7 sm:flex-row sm:items-end sm:gap-10 sm:pb-8 md:gap-14 md:pb-10">
          <FadeIn delay={0.35} y={20}>
            <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[220px] md:max-w-[260px]" style={{ fontSize: 'var(--text-hero-support)' }}>
              building practical AI systems, from computer vision to deployed recommendation engines
            </p>
          </FadeIn>

          <FadeIn delay={0.5} y={20}>
            <ContactButton />
          </FadeIn>
        </div>

        {/* Centered magnetic portrait */}
        <FadeIn delay={0.6} y={30} className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-auto">
          <Magnet padding={120} strength={3}>
            <img
              src={avatarImg}
              alt="Fahad Iqbal | AI/ML Engineer"
              className="w-[260px] sm:w-[340px] md:w-[420px] lg:w-[500px] rounded-card object-cover"
              style={{ filter: 'drop-shadow(0 0 40px rgba(82, 226, 177, 0.15))' }}
            />
          </Magnet>
        </FadeIn>
      </div>
    </section>
  )
}
