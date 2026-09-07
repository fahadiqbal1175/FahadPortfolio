import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import GhostButton from '../components/GhostButton'
import { projects } from '../data/projects'

function ProjectCard({ project, index, total }: { project: any, index: number, total: number }) {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"]
  })

  const targetScale = 1 - (total - 1 - index) * 0.03
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale])

  return (
    <div ref={containerRef} className="h-[85vh] w-full relative">
      <motion.div 
        style={{ 
          scale, 
          top: `calc(6rem + ${index * 28}px)` 
        }} 
        className="sticky w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA]/30 bg-[#0A0F0D] p-4 sm:p-6 md:p-8 flex flex-col gap-4 sm:gap-6"
      >
        <div className="flex justify-between items-start gap-4">
          <div className="flex items-baseline gap-4">
            <span className="font-black hero-heading leading-none" style={{ fontSize: 'clamp(2rem, 6vw, 80px)' }}>
              {project.number}
            </span>
            <div className="flex flex-col">
              <span className="text-[#D7E2EA]/60 text-sm uppercase tracking-wider">{project.category}</span>
              <span className="text-[#D7E2EA] font-medium text-xl sm:text-2xl md:text-3xl uppercase">{project.name}</span>
            </div>
          </div>
          {project.link && (
            <GhostButton href={project.link} label={project.linkLabel || 'View'} />
          )}
        </div>

        <div className="flex gap-3 sm:gap-4 flex-1">
          <div className="w-[40%] flex flex-col gap-3 sm:gap-4 h-full">
            <div className="rounded-[30px] sm:rounded-[40px] md:rounded-[50px] overflow-hidden relative" style={{ height: 'clamp(130px, 16vw, 230px)' }}>
              {project.col1Images?.[0]?.src ? (
                <img src={project.col1Images[0].src} alt={project.col1Images[0].alt} className="object-cover w-full h-full" />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-[#52E2B1]/10 to-[#47C8FF]/10 border border-[#D7E2EA]/10 flex items-center justify-center text-[#D7E2EA]/30 text-sm font-mono text-center p-2">
                  {project.col1Images?.[0]?.alt || 'Placeholder'}
                </div>
              )}
            </div>
            <div className="rounded-[30px] sm:rounded-[40px] md:rounded-[50px] overflow-hidden relative flex-1" style={{ minHeight: 'clamp(160px, 22vw, 340px)' }}>
              {project.col1Images?.[1]?.src ? (
                <img src={project.col1Images[1].src} alt={project.col1Images[1].alt} className="object-cover w-full h-full" />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-[#52E2B1]/10 to-[#47C8FF]/10 border border-[#D7E2EA]/10 flex items-center justify-center text-[#D7E2EA]/30 text-sm font-mono text-center p-2">
                  {project.col1Images?.[1]?.alt || 'Placeholder'}
                </div>
              )}
            </div>
          </div>
          
          <div className="w-[60%] rounded-[30px] sm:rounded-[40px] md:rounded-[50px] overflow-hidden relative h-full">
            {project.col2Image?.src ? (
              <img src={project.col2Image.src} alt={project.col2Image.alt} className="object-cover w-full h-full" />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-[#52E2B1]/10 to-[#47C8FF]/10 border border-[#D7E2EA]/10 flex items-center justify-center text-[#D7E2EA]/30 text-sm font-mono text-center p-2">
                {project.col2Image?.alt || 'Placeholder'}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-[#0A0F0D] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <h2 
        className="hero-heading font-black uppercase text-center mb-16 sm:mb-20 md:mb-28" 
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        PROJECTS
      </h2>
      
      <div className="max-w-6xl mx-auto flex flex-col">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} total={projects.length} />
        ))}
      </div>
    </section>
  )
}
