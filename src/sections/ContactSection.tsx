import React from 'react'
import FadeIn from '../components/FadeIn'
import ContactButton from '../components/ContactButton'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#0A0F0D] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <h2 
        className="hero-heading font-black uppercase text-center mb-16 sm:mb-20 md:mb-28" 
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        LET'S CONNECT
      </h2>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Column - Terminal */}
        <FadeIn delay={0}>
          <div className="rounded-[30px] border-2 border-[#D7E2EA]/20 bg-[#0D1411] overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 bg-black/30 border-b border-[#D7E2EA]/10">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
              </div>
              <span className="ml-3 text-[#D7E2EA]/50 font-mono text-xs">contact.sh</span>
            </div>
            
            <div className="p-5 sm:p-6 font-mono text-sm leading-relaxed">
              <p className="text-[#D7E2EA]/40"># Connect with Fahad</p>
              
              <div className="mt-2">
                <span className="text-[#52E2B1]">$ </span>
                <span className="text-[#D7E2EA]">echo $EMAIL</span>
                <p className="text-[#D7E2EA]/80 mt-1">hafizfahad1175@gmail.com</p>
              </div>
              
              <div className="mt-4">
                <span className="text-[#52E2B1]">$ </span>
                <span className="text-[#D7E2EA]">echo $GITHUB</span>
                <p className="text-[#D7E2EA]/80 mt-1">github.com/fahadiqbal1175</p>
              </div>
              
              <div className="mt-4">
                <span className="text-[#52E2B1]">$ </span>
                <span className="text-[#D7E2EA]">echo $LINKEDIN</span>
                <p className="text-[#D7E2EA]/80 mt-1">linkedin.com/in/fahad-iqbal-dev</p>
              </div>
              
              <div className="mt-4">
                <span className="text-[#52E2B1]">$ </span>
                <span className="text-[#D7E2EA]">echo $STATUS</span>
                <p className="text-[#52E2B1] mt-1">Open to AI/ML roles ✓</p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Right Column - CTA */}
        <FadeIn delay={0.2}>
          <div className="flex flex-col items-center gap-8">
            <p className="text-[#D7E2EA]/80 text-center leading-relaxed">
              I'm open to entry-level AI/ML Engineer opportunities where I can build models, integrate them into products, and keep learning with a strong engineering team.
            </p>
            
            <ContactButton />
            
            <div className="flex gap-6 items-center">
              <a href="https://github.com/fahadiqbal1175" target="_blank" rel="noopener noreferrer" className="text-[#D7E2EA]/60 hover:text-[#52E2B1] transition-colors">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/fahad-iqbal-dev" target="_blank" rel="noopener noreferrer" className="text-[#D7E2EA]/60 hover:text-[#52E2B1] transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:hafizfahad1175@gmail.com" className="text-[#D7E2EA]/60 hover:text-[#52E2B1] transition-colors">
                <Mail size={24} />
              </a>
            </div>
            
            <a href="/assets/documents/Fahad_Iqbal_Resume.pdf" download className="text-[#D7E2EA]/60 text-sm font-mono hover:text-[#52E2B1] transition-colors">
              ↓ Download Resume
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
