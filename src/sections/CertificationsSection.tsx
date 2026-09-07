import React from 'react'
import FadeIn from '../components/FadeIn'
import { certifications } from '../data/certifications'

export default function CertificationsSection() {
  return (
    <section id="certifications" className="bg-[#0A0F0D] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <h2 
        className="hero-heading font-black uppercase text-center mb-16 sm:mb-20 md:mb-28" 
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        CERTIFICATIONS
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <FadeIn key={index} delay={index * 0.12}>
            <div className="rounded-[24px] sm:rounded-[30px] border-2 border-[#D7E2EA]/20 bg-[#D7E2EA]/5 overflow-hidden h-full flex flex-col backdrop-blur-sm">
              <img 
                src={cert.image} 
                alt={cert.title} 
                className="w-full h-48 sm:h-56 object-cover object-top" 
                loading="lazy"
              />
              <div className="p-5 sm:p-6 flex flex-col gap-1.5 flex-1">
                <h3 className="text-[#D7E2EA] font-bold text-base sm:text-lg leading-snug">{cert.title}</h3>
                <p className="text-[#D7E2EA]/60 font-mono text-sm">{cert.issuer}</p>
                {cert.code && (
                  <p className="text-[#52E2B1] font-mono text-sm mt-auto pt-2">{cert.code}</p>
                )}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
