import { useEffect, useState } from 'react'
import HeroSection from './sections/HeroSection'
import MarqueeSection from './sections/MarqueeSection'
import AboutSection from './sections/AboutSection'
import EducationSection from './sections/EducationSection'
import SkillsSection from './sections/SkillsSection'
import ProjectsSection, { ProjectDetail } from './sections/ProjectsSection'
import { projects } from './data/projects'
import CertificationsSection from './sections/CertificationsSection'
import ContactSection from './sections/ContactSection'

function getProjectFromHash() {
  const slug = window.location.hash.startsWith('#project/') ? window.location.hash.slice('#project/'.length) : ''
  return projects.find((project) => project.slug === slug)
}

export default function App() {
  const [selectedProject, setSelectedProject] = useState(() => getProjectFromHash())

  useEffect(() => {
    const handleHashChange = () => setSelectedProject(getProjectFromHash())
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  if (selectedProject) return <ProjectDetail project={selectedProject} />

  return (
    <div style={{ overflowX: 'clip' }} className="min-w-0">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <EducationSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificationsSection />
      <ContactSection />

      <footer className="border-t border-[#D7E2EA]/10 bg-[#07100c] px-5 py-12 sm:px-8 sm:py-14 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_1fr_1fr] lg:gap-16">
          <div className="min-w-0">
            <a href="#hero" className="inline-flex items-center gap-3 text-[#D7E2EA] focus:outline-none focus:ring-2 focus:ring-[#52E2B1]">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#52E2B1]/60 font-black text-[#52E2B1]" aria-hidden="true">FI</span>
              <span className="font-semibold tracking-wide">Fahad Iqbal</span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-7 text-[#D7E2EA]/65">AI/ML Engineer building practical, deployable systems.</p>
            <p className="mt-6 font-mono text-xs text-[#D7E2EA]/40">© {new Date().getFullYear()} Fahad Iqbal</p>
          </div>
          <nav aria-label="Footer navigation">
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[#52E2B1]">Explore</h2>
            <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
              {[
                ['Home', '#hero'],
                ['About', '#about'],
                ['Education', '#education'],
                ['Skills', '#skills'],
                ['Projects', '#projects'],
                ['Certifications', '#certifications'],
                ['Contact', '#contact'],
              ].map(([label, href]) => <a key={label} href={href} className="text-[#D7E2EA]/70 transition-colors hover:text-[#52E2B1] focus:outline-none focus:ring-2 focus:ring-[#52E2B1]">{label}</a>)}
            </div>
          </nav>
          <div>
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[#52E2B1]">Connect</h2>
            <div className="mt-4 flex flex-col items-start gap-3 text-sm">
              <a href="https://github.com/fahadiqbal1175" target="_blank" rel="noreferrer" aria-label="Fahad Iqbal on GitHub" className="text-[#D7E2EA]/70 transition-colors hover:text-[#52E2B1] focus:outline-none focus:ring-2 focus:ring-[#52E2B1]">GitHub</a>
              <a href="https://linkedin.com/in/fahad-iqbal-dev" target="_blank" rel="noreferrer" aria-label="Fahad Iqbal on LinkedIn" className="text-[#D7E2EA]/70 transition-colors hover:text-[#52E2B1] focus:outline-none focus:ring-2 focus:ring-[#52E2B1]">LinkedIn</a>
              <a href="mailto:hafizfahad1175@gmail.com" aria-label="Email Fahad Iqbal" className="break-words text-[#D7E2EA]/70 transition-colors hover:text-[#52E2B1] focus:outline-none focus:ring-2 focus:ring-[#52E2B1]">hafizfahad1175@gmail.com</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
