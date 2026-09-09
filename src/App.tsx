import HeroSection from './sections/HeroSection'
import MarqueeSection from './sections/MarqueeSection'
import AboutSection from './sections/AboutSection'
import EducationSection from './sections/EducationSection'
import SkillsSection from './sections/SkillsSection'
import ProjectsSection from './sections/ProjectsSection'
import CertificationsSection from './sections/CertificationsSection'
import ContactSection from './sections/ContactSection'

export default function App() {
  return (
    <div style={{ overflowX: 'clip' }}>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <EducationSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificationsSection />
      <ContactSection />

      {/* Footer */}
      <footer className="bg-dark border-t border-silver/10 py-8 px-5 sm:px-8 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-silver/40 text-sm font-mono">
            © {new Date().getFullYear()} Fahad Iqbal
          </span>
          <span className="text-silver/40 text-sm font-mono">
            AI/ML Engineer
          </span>
        </div>
      </footer>
    </div>
  )
}
