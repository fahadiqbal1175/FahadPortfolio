import React, { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import GhostButton from '../components/GhostButton'
import { projects, type Project, type ProjectMedia } from '../data/projects'

const posterTreatments = [
  'from-[#17392f] via-[#0d211a] to-[#0A0F0D]',
  'from-[#193548] via-[#101d2c] to-[#0A0F0D]',
  'from-[#3a2d18] via-[#21170e] to-[#0A0F0D]',
]

function ProjectArtwork({ project, index, compact = false }: { project: Project; index: number; compact?: boolean }) {
  return (
    <div className={`group relative isolate overflow-hidden rounded-[28px] border border-[#D7E2EA]/15 bg-gradient-to-br ${posterTreatments[index % posterTreatments.length]} ${compact ? 'min-h-32' : 'min-h-56 sm:min-h-72'}`}>
      <img src={project.artwork} alt={project.artworkAlt} className="absolute inset-0 h-full w-full object-contain p-5 opacity-85 transition-transform duration-500 group-hover:scale-105 sm:p-8" loading="lazy" decoding="async" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0A0F0D]/80 via-transparent to-transparent" />
      <div className="relative flex h-full min-h-inherit flex-col justify-between p-5 sm:p-7">
        <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#D7E2EA]/60">{project.category}</span>
        <div>
          <span className="font-black hero-heading text-5xl leading-none sm:text-7xl">{project.number}</span>
          <p className="mt-3 max-w-[18ch] text-xl font-semibold uppercase leading-tight text-[#D7E2EA] sm:text-2xl">{project.name}</p>
        </div>
      </div>
    </div>
  )
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {project.links.map((link) => link.disabled ? (
        <span key={link.label} aria-disabled="true" className="cursor-not-allowed rounded-full border-2 border-[#D7E2EA]/25 px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-[#D7E2EA]/40 sm:px-6 sm:py-3">{link.label}</span>
      ) : (
        <GhostButton key={link.label} href={link.href} label={link.label} className="px-5 py-3 text-xs sm:px-6 sm:py-3" />
      ))}
    </div>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start 90%', 'start 45%'] })
  const y = useTransform(scrollYProgress, [0, 1], [24, 0])

  return (
    <motion.article ref={containerRef} style={{ y }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }} className="grid gap-5 rounded-[36px] border-2 border-[#D7E2EA]/20 bg-[#0A0F0D] p-4 sm:gap-7 sm:p-6 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:items-center md:p-8">
      <ProjectArtwork project={project} index={index} />
      <div className="flex h-full flex-col justify-between gap-8 p-1 sm:p-3">
        <div>
          <div className="mb-5 flex items-center justify-between gap-4">
            <span className="font-mono text-sm tracking-[0.18em] text-[#52E2B1]">{project.number}</span>
            <span className="text-right text-xs uppercase tracking-[0.16em] text-[#D7E2EA]/50">{project.category}</span>
          </div>
          <h3 className="text-3xl font-bold uppercase leading-tight text-[#D7E2EA] sm:text-4xl">{project.name}</h3>
          <p className="mt-4 max-w-prose text-base leading-7 text-[#D7E2EA]/65">{project.description}</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <a href={`#project/${project.slug}`} className="rounded-full bg-[#52E2B1] px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] text-[#0A0F0D] transition-transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#52E2B1] focus:ring-offset-2 focus:ring-offset-[#0A0F0D]">View Details</a>
          <ProjectLinks project={project} />
        </div>
      </div>
    </motion.article>
  )
}

function YouTubeEmbed({ url, title }: { url: string; title: string }) {
  let embedUrl: string | null = null
  try {
    const parsed = new URL(url)
    const videoId = parsed.hostname === 'youtu.be' ? parsed.pathname.slice(1) : parsed.searchParams.get('v')
    if (videoId) embedUrl = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}`
  } catch {
    embedUrl = null
  }
  if (!embedUrl) return <div className="flex aspect-video items-center justify-center bg-[#D7E2EA]/5 p-6 text-center text-[#D7E2EA]/60">This video is unavailable.</div>
  return <iframe src={embedUrl} title={title} className="aspect-video w-full" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
}

function SelectedMedia({ media }: { media: ProjectMedia }) {
  if (media.youtubeUrl) return <YouTubeEmbed url={media.youtubeUrl} title={media.alt} />
  if (!media.src) return <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-[#52E2B1]/10 to-[#47C8FF]/10 p-8 text-center text-[#D7E2EA]/60">{media.alt}</div>
  if (media.mediaType === 'video') return <video src={media.src} aria-label={media.alt} className="aspect-video w-full object-contain" controls playsInline preload="none" />
  return <img src={media.src} alt={media.alt} className="aspect-video w-full object-contain" loading="lazy" decoding="async" />
}

function SectionList({ title, items }: { title: string; items: string[] }) {
  return (
    <section>
      <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[#52E2B1]">{title}</h2>
      <ul className="mt-4 space-y-3 text-base leading-7 text-[#D7E2EA]/72">{items.map((item) => <li key={item} className="border-l border-[#52E2B1]/40 pl-4">{item}</li>)}</ul>
    </section>
  )
}

export function ProjectDetail({ project }: { project: Project }) {
  const [selected, setSelected] = useState(false)
  return (
    <main className="min-h-screen bg-[#0A0F0D] px-5 py-8 text-[#D7E2EA] sm:px-8 md:px-10 md:py-12">
      <div className="mx-auto max-w-6xl">
        <a href="#projects" className="inline-flex rounded-full border border-[#D7E2EA]/30 px-4 py-2 text-sm uppercase tracking-[0.14em] text-[#D7E2EA]/75 transition-colors hover:border-[#52E2B1] hover:text-[#52E2B1] focus:outline-none focus:ring-2 focus:ring-[#52E2B1]">← Back to Projects</a>
        <div className="mt-14 grid gap-10 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:items-start">
          <div>
            <ProjectArtwork project={project} index={projects.indexOf(project)} compact />
            <span className="mt-8 block font-mono text-sm tracking-[0.2em] text-[#52E2B1]">{project.number} / {project.category}</span>
            <h1 className="mt-5 text-5xl font-black uppercase leading-[0.95] sm:text-7xl">{project.name}</h1>
            <p className="mt-6 max-w-prose text-lg leading-8 text-[#D7E2EA]/70">{project.description}</p>
            <div className="mt-8"><ProjectLinks project={project} /></div>
          </div>
          <div className="rounded-[32px] border-2 border-[#D7E2EA]/20 bg-[#0A0F0D] p-3 sm:p-5">
            <div className="overflow-hidden rounded-[24px] border border-[#D7E2EA]/10">{selected ? <SelectedMedia media={project.media} /> : <ProjectArtwork project={project} index={projects.indexOf(project)} compact />}</div>
            <button type="button" onClick={() => setSelected((value) => !value)} className="mt-4 w-full rounded-full border border-[#52E2B1]/60 px-4 py-3 text-sm font-bold uppercase tracking-[0.14em] text-[#52E2B1] transition-colors hover:bg-[#52E2B1]/10 focus:outline-none focus:ring-2 focus:ring-[#52E2B1]">{selected ? 'Hide Media' : 'Load Project Media'}</button>
            <p className="mt-3 text-xs text-[#D7E2EA]/45">Media loads only when selected.</p>
          </div>
        </div>
        <div className="mt-16 grid gap-10 border-t border-[#D7E2EA]/15 pt-10 md:grid-cols-2">
          <section><h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[#52E2B1]">Overview</h2><p className="mt-4 text-base leading-8 text-[#D7E2EA]/72">{project.sections.overview}</p></section>
          <section><h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[#52E2B1]">Problem</h2><p className="mt-4 text-base leading-8 text-[#D7E2EA]/72">{project.sections.problem}</p></section>
          <SectionList title="Approach" items={project.sections.approach} />
          <SectionList title="Technology" items={project.sections.technology} />
          <SectionList title="Results" items={project.sections.results} />
        </div>
      </div>
    </main>
  )
}

export default function ProjectsSection() {
  return <section id="projects" className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0A0F0D] px-5 py-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:py-32"><h2 className="hero-heading mb-16 text-center font-black uppercase sm:mb-20 md:mb-28" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>PROJECTS</h2><div className="mx-auto grid max-w-6xl gap-6">{projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div></section>
}
