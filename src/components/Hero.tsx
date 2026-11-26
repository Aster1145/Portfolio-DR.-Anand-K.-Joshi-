import { ArrowRight, ArrowUpRight, Award, BadgeCheck } from "lucide-react";
import { affiliations, currentRoles, profile, stats } from "../data";
import { Reveal } from "./primitives";

export default function Hero() {
  return (
    <>
      <section id="home" className="relative overflow-hidden bg-navy-950 text-ivory">
        {/* ambient background */}
        <div className="pointer-events-none absolute inset-0 grid-pattern opacity-70" aria-hidden="true" />
        <div
          className="pointer-events-none absolute -right-32 -top-40 h-[620px] w-[620px] rounded-full bg-jade-700/20 blur-[140px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -left-40 top-1/3 h-[460px] w-[460px] rounded-full bg-gold-600/10 blur-[120px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-28 sm:px-8 sm:pt-32 lg:px-10 lg:pb-20 lg:pt-36">
          <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-12 xl:gap-16">
            {/* ------------------------------ copy ------------------------------ */}
            <div className="lg:col-span-7">
              <Reveal>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] font-medium uppercase tracking-[0.24em] text-navy-200/80 sm:text-[10.5px]">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold-400" aria-hidden="true" />
                  <span>Academician</span>
                  <span className="text-gold-500/70" aria-hidden="true">
                    |
                  </span>
                  <span>Researcher</span>
                  <span className="text-gold-500/70" aria-hidden="true">
                    |
                  </span>
                  <span>Innovator</span>
                  <span className="text-gold-500/70" aria-hidden="true">
                    |
                  </span>
                  <span className="text-gold-200">Scientific Advisor</span>
                </div>
              </Reveal>

              <Reveal delay={80}>
                <h1 className="mt-6 whitespace-nowrap font-display text-[clamp(2.1rem,5.2vw,4.15rem)] leading-[1.05] tracking-[-0.03em]">
                  <span className="text-ivory">Dr. Anand </span>
                  <span className="text-gold-gradient italic">K. Joshi</span>
                </h1>
              </Reveal>

              <Reveal delay={150}>
                <p className="mt-7 max-w-[37rem] text-[0.96rem] leading-[1.75] text-navy-100/80 sm:text-[1.02rem]">
                  {profile.shortBio}
                </p>
              </Reveal>

              <Reveal delay={210}>
                <div className="mt-8 max-w-[37rem] border-l border-gold-400/40 pl-5">
                  <p className="text-[9.5px] font-semibold uppercase tracking-[0.24em] text-gold-300">
                    Current engagements
                  </p>
                  <ul className="mt-3 space-y-2.5">
                    {currentRoles.map((item) => (
                      <li key={item.role} className="flex items-start gap-2.5 text-[13px] leading-snug">
                        <span
                          className="mt-[7px] h-[3px] w-[3px] shrink-0 rounded-full bg-gold-400"
                          aria-hidden="true"
                        />
                        <span>
                          <span className="font-medium text-ivory">{item.role}</span>
                          <span className="text-navy-300"> · {item.organisation}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={270}>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href="#research"
                    className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-gold-400 px-6 py-3.5 text-[13px] font-semibold text-navy-950 transition-all duration-300 hover:bg-gold-300 hover:shadow-[0_16px_36px_-18px_rgba(206,170,91,0.85)]"
                  >
                    Explore research & patents
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </a>
                  <a
                    href="#contact"
                    className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-white/20 bg-white/[0.03] px-6 py-3.5 text-[13px] font-medium text-ivory transition-all duration-300 hover:border-white/35 hover:bg-white/[0.08]"
                  >
                    Contact & collaboration
                    <ArrowUpRight
                      className="h-4 w-4 text-gold-300 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </a>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Connect on LinkedIn"
                    className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.03] px-4 py-3.5 text-[13px] font-medium text-ivory transition-all duration-300 hover:border-gold-400/50 hover:bg-white/[0.08]"
                  >
                    <span className="font-semibold text-gold-300">in</span>
                    <span>LinkedIn</span>
                    <ArrowUpRight
                      className="h-3.5 w-3.5 text-navy-300 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold-300"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </Reveal>
            </div>

            {/* ------------------------------ portrait ------------------------------ */}
            <div className="lg:col-span-5">
              <Reveal delay={200} className="relative mx-auto w-full max-w-[26rem] lg:max-w-none">
                <div
                  className="absolute -left-3 -top-3 hidden h-full w-full rounded-[1.55rem] border border-gold-400/25 sm:block"
                  aria-hidden="true"
                />
                <div className="relative overflow-hidden rounded-[1.4rem] border border-white/15 bg-navy-800 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.8)]">
                  <img
                    src="/images/portrait.jpg"
                    alt="Dr. Anand K. Joshi at the Mechanical Maker Space"
                    className="aspect-[4/5] w-full object-cover object-[center_35%]"
                    width={576}
                    height={1024}
                    fetchPriority="high"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-navy-950/55 via-navy-950/5 to-transparent"
                    aria-hidden="true"
                  />
                  <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/25 bg-navy-950/45 px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.16em] text-ivory/90 backdrop-blur">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold-400" aria-hidden="true" />
                    Scientific Advisor
                  </div>
                </div>

                <div className="absolute -right-2 top-6 z-20 hidden w-[15rem] rotate-[1.5deg] rounded-xl border border-white/60 bg-ivory/95 p-3.5 text-navy-950 shadow-[0_24px_50px_-24px_rgba(0,0,0,0.7)] backdrop-blur sm:block lg:-right-5">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gold-100 text-gold-700">
                      <Award className="h-[18px] w-[18px]" strokeWidth={1.6} aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-[8.5px] font-semibold uppercase tracking-[0.18em] text-gold-800">
                        KSTA · 2024
                      </p>
                      <p className="mt-0.5 text-[11.5px] font-semibold leading-tight">U.R. Rao Award</p>
                    </div>
                  </div>
                  <p className="mt-2 text-[10px] leading-snug text-navy-500">
                    Innovation in Research · Govt. of Karnataka
                  </p>
                </div>

                <div className="relative z-20 mx-3 -mt-9 rounded-xl border border-navy-900/10 bg-ivory p-3.5 shadow-[0_20px_45px_-20px_rgba(0,0,0,0.55)] sm:mx-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-jade-100 text-jade-700">
                      <BadgeCheck className="h-5 w-5" strokeWidth={1.7} aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="text-[8.5px] font-semibold uppercase tracking-[0.18em] text-jade-700">
                          Patent granted
                        </p>
                        <span className="h-px flex-1 bg-navy-900/10" aria-hidden="true" />
                        <p className="shrink-0 text-[9px] font-medium text-navy-500">June 2024</p>
                      </div>
                      <p className="mt-1 truncate text-[12.5px] font-semibold text-navy-950">
                        Hybrid Battery Thermal Management System
                      </p>
                      <p className="mt-0.5 text-[10.5px] text-navy-500">
                        Patent No. 542165 · Govt. of India (Presidency University)
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-5 flex items-center justify-center gap-2 text-center text-[10px] font-medium uppercase tracking-[0.16em] text-navy-300">
                  <span className="h-px w-4 bg-gold-400/60" aria-hidden="true" />
                  Engineering a cooler, cleaner future
                  <span className="h-px w-4 bg-gold-400/60" aria-hidden="true" />
                </p>
              </Reveal>
            </div>
          </div>

          {/* ------------------------------ stats ------------------------------ */}
          <Reveal delay={320}>
            <dl className="mt-16 grid grid-cols-2 gap-x-4 gap-y-7 border-t border-white/10 pt-8 sm:mt-20 md:grid-cols-4 md:gap-0 md:divide-x md:divide-white/10">
              {stats.map((stat, index) => (
                <div key={stat.label} className={index === 0 ? "md:pr-8" : "md:px-8"}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="font-display text-[2.1rem] leading-none tracking-[-0.02em] text-ivory">
                      {stat.value}
                    </span>
                    <span className="mt-2 block text-[10.5px] font-medium uppercase leading-relaxed tracking-[0.14em] text-navy-300">
                      {stat.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <AffiliationsBar />
    </>
  );
}

function AffiliationsBar() {
  const track = [...affiliations, ...affiliations];

  return (
    <section
      aria-label="Institutional and professional affiliations"
      className="border-b border-navy-900/10 bg-white"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-5 sm:px-8 md:flex-row md:items-center md:gap-8 lg:px-10">
        <p className="shrink-0 text-[9px] font-semibold uppercase leading-relaxed tracking-[0.22em] text-navy-400 md:max-w-[7.5rem]">
          Affiliated with
        </p>
        <div className="marquee min-w-0 flex-1">
          <div className="marquee-track items-center">
            {track.map((name, index) => (
              <span
                key={`${name}-${index}`}
                aria-hidden="true"
                className="flex shrink-0 items-center gap-6 pr-6 text-[10px] font-medium uppercase tracking-[0.19em] whitespace-nowrap text-navy-500"
              >
                {name}
                <span className="h-[5px] w-[5px] rotate-45 bg-gold-400/80" aria-hidden="true" />
              </span>
            ))}
          </div>
        </div>
        <ul className="sr-only">
          {affiliations.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
