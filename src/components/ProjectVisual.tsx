import type { ProjectVisualVariant } from '../data/projects'

interface ProjectVisualProps {
  variant: ProjectVisualVariant
}

const visualLabels: Record<ProjectVisualVariant, string> = {
  medilens: 'MediLens medical visual',
  movielens: 'MovieLens Recommender film visual',
  wellpulse: 'WellPulse wellbeing visual',
}

function MediLensVisual() {
  return (
    <>
      <svg viewBox="0 0 480 360" preserveAspectRatio="none" className="absolute inset-0 h-full w-full text-[#B9FFE8]/20" aria-hidden="true">
        <path d="M0 220h84l22-42 26 86 27-122 24 78 24-30h273" fill="none" stroke="currentColor" strokeWidth="3" />
        <path d="M0 260h120l18-24 20 48 20-70 24 46 20-16h258" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
      <svg viewBox="0 0 120 160" preserveAspectRatio="xMidYMid meet" className="relative h-3/5 w-3/5 max-w-[220px] text-[#E9FFF8]" aria-hidden="true">
        <path d="M34 22h52v18H34zM28 40h64v87a15 15 0 0 1-15 15H43a15 15 0 0 1-15-15V40Z" fill="currentColor" opacity=".9" />
        <path d="M34 68h52M34 90h52" stroke="#247A68" strokeWidth="7" />
        <path d="M60 108v-28M46 94h28" stroke="#247A68" strokeWidth="7" strokeLinecap="round" />
      </svg>
    </>
  )
}

function MovieLensVisual() {
  return (
    <>
      <svg viewBox="0 0 480 360" preserveAspectRatio="none" className="absolute inset-0 h-full w-full text-[#FFD77A]/15" aria-hidden="true">
        <path d="M24 92h432M24 156h432M24 220h432M24 284h432M88 48v264M176 48v264M264 48v264M352 48v264M440 48v264" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
      <svg viewBox="0 0 160 160" preserveAspectRatio="xMidYMid meet" className="relative h-3/5 w-3/5 max-w-[220px] text-[#FFF1C4]" aria-hidden="true">
        <circle cx="80" cy="80" r="62" fill="currentColor" opacity=".9" />
        <circle cx="80" cy="80" r="15" fill="#5A367F" />
        <circle cx="80" cy="38" r="11" fill="#5A367F" />
        <circle cx="116" cy="101" r="11" fill="#5A367F" />
        <circle cx="44" cy="101" r="11" fill="#5A367F" />
        <path d="m72 68 30 12-30 12Z" fill="#5A367F" />
      </svg>
    </>
  )
}

function WellPulseVisual() {
  return (
    <>
      <svg viewBox="0 0 480 360" preserveAspectRatio="none" className="absolute inset-0 h-full w-full text-[#E6D9FF]/20" aria-hidden="true">
        <path d="M0 256c45-56 70 52 116-8s72-6 111-42 74 23 112-17 79 22 141-27" fill="none" stroke="currentColor" strokeWidth="4" />
        <path d="M0 304c53-24 78 12 123-24s76 7 112-12 75 10 112-17 74 4 133-18" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
      <svg viewBox="0 0 180 150" preserveAspectRatio="xMidYMid meet" className="relative h-3/5 w-3/5 max-w-[240px] text-[#F1ECFF]" aria-hidden="true">
        <path d="M25 95a65 65 0 0 1 130 0" fill="none" stroke="currentColor" strokeWidth="16" strokeLinecap="round" />
        <path d="M38 95a52 52 0 0 1 104 0" fill="none" stroke="#7563B1" strokeWidth="7" strokeLinecap="round" strokeDasharray="2 19" />
        <path d="m90 95 27-31" stroke="#7563B1" strokeWidth="8" strokeLinecap="round" />
        <circle cx="90" cy="95" r="10" fill="#7563B1" />
        <path d="M48 122h84" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
      </svg>
    </>
  )
}

export default function ProjectVisual({ variant }: ProjectVisualProps) {
  const visual = {
    medilens: <MediLensVisual />,
    movielens: <MovieLensVisual />,
    wellpulse: <WellPulseVisual />,
  }[variant]

  return (
    <div
      role="img"
      aria-label={visualLabels[variant]}
      className={`group relative isolate mx-auto flex aspect-[4/3] w-full max-w-2xl items-center justify-center overflow-hidden rounded-[28px] border border-[#D7E2EA]/15 ${
        variant === 'medilens'
          ? 'bg-gradient-to-br from-[#168D78] via-[#116B63] to-[#092D35]'
          : variant === 'movielens'
            ? 'bg-gradient-to-br from-[#38205E] via-[#5A367F] to-[#C18D3A]'
            : 'bg-gradient-to-br from-[#3C3B88] via-[#6E68B4] to-[#C4B8E8]'
      }`}
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white/10 via-transparent to-black/25" />
      <div className="transition-transform duration-500 group-hover:scale-105">{visual}</div>
    </div>
  )
}
