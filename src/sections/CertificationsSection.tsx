import React from 'react'
import FadeIn from '../components/FadeIn'
import { certifications } from '../data/certifications'

export default function CertificationsSection() {
  return (
    <section id="certifications" className="bg-[#0A0F0D] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <h2 
        className="section-heading hero-heading font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
      >
        CERTIFICATIONS
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <FadeIn key={index} delay={index * 0.12} className={certifications.length % 2 === 1 && index === certifications.length - 1 ? 'sm:col-span-2 sm:w-[calc(50%-0.75rem)] sm:justify-self-center' : undefined}>
            <div className="rounded-card border-2 border-[#D7E2EA]/20 bg-[#D7E2EA]/5 overflow-hidden h-full flex flex-col backdrop-blur-sm">
              <a
                href={cert.image}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${cert.title} image in a new tab`}
              >
                <div className="aspect-[16/10] w-full bg-[#D7E2EA]/5">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="h-full w-full object-cover object-top"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </a>
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
