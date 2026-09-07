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

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <FadeIn key={index} delay={index * 0.15}>
            <div className="rounded-[30px] border-2 border-[#D7E2EA]/20 bg-[#D7E2EA]/5 p-6 sm:p-8 backdrop-blur-sm h-full flex flex-col">
              {cert.image ? (
                <img src={cert.image} alt={cert.title} className="rounded-xl mb-4 w-full h-40 object-cover" />
              ) : (
                <div className="h-32 mb-4 flex items-center justify-center text-5xl opacity-30">
                  🏆
                </div>
              )}
              <h3 className="text-[#D7E2EA] font-bold text-lg sm:text-xl mb-2">{cert.title}</h3>
              <p className="text-[#D7E2EA]/60 font-mono text-sm">{cert.issuer}</p>
              {cert.code && (
                <p className="text-[#52E2B1] font-mono text-sm mt-1">{cert.code}</p>
              )}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
