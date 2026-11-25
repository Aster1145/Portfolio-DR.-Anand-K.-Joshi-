import { Cpu, FlaskConical, MoveUpRight } from "lucide-react";
import { expertise, profile, tools } from "../data";
import { FeatureIcon } from "./FeatureIcon";
import { Divider, Reveal, SectionHeading, Tag } from "./primitives";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-ivory py-20 sm:py-24 lg:py-28">
      <div
        className="pointer-events-none absolute right-0 top-24 h-[380px] w-[380px] rounded-full bg-gold-200/20 blur-[110px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* ------------------------------ narrative ------------------------------ */}
          <div className="lg:col-span-5">
            <SectionHeading
              index="01"
              eyebrow="Profile"
              title={
                <>
                  Where rigorous engineering meets{" "}
                  <em className="font-normal italic text-gold-700">real-world impact</em>.
                </>
              }
            />

            <div className="mt-7 space-y-4 text-[0.94rem] leading-relaxed text-navy-600">
              <Reveal delay={80}>
                <p>
                  Dr. Anand K. Joshi is a distinguished academician, researcher and innovator with over
                  twelve years of experience across higher education, applied research, and technological
                  innovation. His pioneering work sits at the intersection of thermal engineering and
                  clean energy — developing patented hybrid battery thermal management systems, engineering
                  nano-enhanced phase change materials (PCMs), and advancing sustainable green mobility.
                </p>
              </Reveal>
              <Reveal delay={140}>
                <p>
                  He serves at Presidency University, Bengaluru, leads technological innovation through EJ Labs
                  (incubated at IISc Bangalore), and acts as a Scientific Advisor at Peak Amp Pvt. Ltd. (driving
                  cutting-edge research in battery recycling) and Technical Advisor to EV Retron Energies.
                  Across academia, defence, and clean-tech startups, his vision remains centered on research
                  that is rigorous, patented, and deployed for global sustainability.
                </p>
              </Reveal>
            </div>

            <Reveal delay={200}>
              <div className="mt-7 flex items-center gap-4">
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold-500/30 bg-gold-50 font-display text-base italic text-gold-800"
                  aria-hidden="true"
                >
                  AKJ
                </span>
                <div>
                  <p className="font-display text-[1.15rem] leading-tight text-navy-950">
                    {profile.name}
                  </p>
                  <p className="mt-1 text-[9.5px] font-medium uppercase tracking-[0.18em] text-navy-500">
                    {profile.institution} · 12+ years in academia
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <Divider className="mt-9" />
              <div className="mt-7 rounded-2xl border border-navy-900/10 bg-white p-5 shadow-[0_18px_40px_-36px_rgba(7,25,38,0.5)] sm:p-6">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-[9.5px] font-semibold uppercase tracking-[0.22em] text-navy-500">
                    Computational & technical toolkit
                  </p>
                  <Cpu className="h-4 w-4 text-gold-600" strokeWidth={1.6} aria-hidden="true" />
                </div>
                <ul className="mt-3 divide-y divide-navy-900/8">
                  {tools.map((tool) => (
                    <li key={tool.name} className="flex items-start justify-between gap-4 py-3.5">
                      <div className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-navy-50 text-navy-600">
                          {tool.type === "Computational" ? (
                            <Cpu className="h-3.5 w-3.5" strokeWidth={1.6} aria-hidden="true" />
                          ) : (
                            <FlaskConical className="h-3.5 w-3.5" strokeWidth={1.6} aria-hidden="true" />
                          )}
                        </span>
                        <div>
                          <p className="text-[13px] font-medium leading-snug text-navy-900">
                            {tool.name}
                          </p>
                          <p className="mt-0.5 text-[11px] text-navy-500">{tool.meta}</p>
                        </div>
                      </div>
                      <span className="mt-0.5 shrink-0 rounded-full border border-navy-900/10 bg-ivory px-2 py-1 text-[8.5px] font-medium uppercase tracking-[0.12em] text-navy-500">
                        {tool.type}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* ------------------------------ expertise grid ------------------------------ */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="flex items-center justify-between gap-4">
                <p className="text-[9.5px] font-semibold uppercase tracking-[0.22em] text-navy-500">
                  Core expertise
                </p>
                <p className="hidden text-[11px] text-navy-400 sm:block">Four connected research threads</p>
              </div>
            </Reveal>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {expertise.map((item, index) => (
                <Reveal key={item.title} delay={index * 80}>
                  <article className="card-lift group relative flex h-full flex-col overflow-hidden rounded-2xl border border-navy-900/10 bg-white p-5 hover:border-gold-400/60 hover:shadow-[0_24px_50px_-32px_rgba(7,25,38,0.4)] sm:p-6">
                    <div
                      className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-gold-400 to-gold-300 transition-transform duration-500 group-hover:scale-x-100"
                      aria-hidden="true"
                    />
                    <div className="flex items-start justify-between gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-950 text-gold-300 transition-all duration-300 group-hover:bg-gold-400 group-hover:text-navy-950">
                        <FeatureIcon name={item.icon} className="h-[21px] w-[21px]" />
                      </span>
                      <span
                        className="font-display text-[1.5rem] leading-none text-navy-100 transition-colors duration-300 group-hover:text-gold-200"
                        aria-hidden="true"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-[1.3rem] leading-tight tracking-[-0.01em] text-navy-950">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 flex-1 text-[12.5px] leading-relaxed text-navy-600">
                      {item.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal delay={200}>
              <a
                href="#leadership"
                className="group mt-4 flex items-center justify-between gap-4 rounded-2xl border border-navy-900/10 bg-navy-950 p-5 text-ivory transition-colors duration-300 hover:bg-navy-900 sm:p-6"
              >
                <div>
                  <p className="text-[9.5px] font-semibold uppercase tracking-[0.22em] text-gold-300">
                    Beyond the research
                  </p>
                  <p className="mt-1.5 font-display text-[1.15rem] leading-snug">
                    Academic leadership, jury service and student mentorship.
                  </p>
                </div>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-gold-300 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                  <MoveUpRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
