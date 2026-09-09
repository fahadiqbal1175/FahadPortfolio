import FadeIn from '../components/FadeIn'

export default function EducationSection() {
  return (
    <section
      id="education"
      className="bg-[#0A0F0D] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn y={40}>
        <h2
          className="hero-heading font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          EDUCATION
        </h2>
      </FadeIn>

      <div className="max-w-4xl mx-auto">
        <FadeIn delay={0.15} y={30}>
          <article className="relative overflow-hidden rounded-[32px] sm:rounded-[44px] border-2 border-[#D7E2EA]/20 bg-[#D7E2EA]/5 p-7 sm:p-10 md:p-14">
            <div className="absolute -right-16 -top-20 h-48 w-48 rounded-full border border-[#52E2B1]/20" />
            <div className="absolute -right-6 -top-10 h-28 w-28 rounded-full border border-[#47C8FF]/20" />

            <div className="relative flex flex-col gap-8 sm:gap-10">
              <div className="flex flex-col gap-3">
                <h3 className="max-w-3xl text-2xl font-medium uppercase leading-tight text-[#D7E2EA] sm:text-4xl md:text-5xl">
                  Bachelor of Science in Information Technology (BSIT)
                </h3>
              </div>

              <div className="grid gap-6 border-t border-[#D7E2EA]/15 pt-6 sm:grid-cols-2 sm:gap-10">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#D7E2EA]/45">
                    Duration
                  </p>
                  <p className="mt-2 text-lg text-[#D7E2EA] sm:text-xl">
                    Nov 2022 – Jun 2026
                  </p>
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#D7E2EA]/45">
                    Institution
                  </p>
                  <p className="mt-2 text-lg text-[#D7E2EA] sm:text-xl">
                    University of Sargodha
                  </p>
                </div>
              </div>
            </div>
          </article>
        </FadeIn>
      </div>
    </section>
  )
}
