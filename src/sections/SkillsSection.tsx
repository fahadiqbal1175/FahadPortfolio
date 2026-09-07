import React from 'react'
import FadeIn from '../components/FadeIn'
import { skills } from '../data/skills'

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <h2 
        className="text-[#0A0F0D] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28" 
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        SKILLS
      </h2>

      <div className="max-w-5xl mx-auto w-full">
        {skills.map((skill, index) => (
          <FadeIn key={index} delay={index * 0.1}>
            <div className={`flex flex-row items-start gap-6 sm:gap-8 md:gap-12 py-8 sm:py-10 md:py-12 border-b border-[rgba(12,12,12,0.15)] ${index === 0 ? 'border-t' : ''}`}>
              <div 
                className="font-black text-[#0A0F0D] leading-none opacity-10 flex-shrink-0"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {skill.number}
              </div>
              <div className="flex flex-col gap-2">
                <h3 
                  className="font-medium uppercase text-[#0A0F0D]"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {skill.name}
                </h3>
                <p 
                  className="font-light text-[#0A0F0D] leading-relaxed max-w-2xl opacity-60"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                >
                  {skill.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
