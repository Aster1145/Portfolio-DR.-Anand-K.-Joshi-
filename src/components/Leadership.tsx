import { ArrowUpRight, BookOpen, Building2, Gavel, Globe2, MapPin, Users } from "lucide-react";
import { juryService, leadership, mentorship } from "../data";
import { Reveal, SectionHeading, Tag } from "./primitives";

const roleIcons = [Building2, Globe2, BookOpen];

export default function Leadership() {
  return (
    <section id="leadership" className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      <div
        className="pointer-events-none absolute right-0 top-20 h-[360px] w-[360px] rounded-full bg-jade-100/40 blur-[110px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          index="05"
          eyebrow="Leadership & service"
          title={
            <>
              Service that extends{" "}
              <em className="font-normal italic text-gold-700">beyond the lab</em>.
            </>
          }
          description="From department leadership and university curriculum chairmanship to national jury panels and hands-on student mentorship."
        />

        <div className="mt-11 grid gap-6 lg:grid-cols-12">
          {/* leadership roles */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="flex items-center justify-between gap-3">
                <p className="text-[9.5px] font-semibold uppercase tracking-[0.22em] text-navy-500">
                  Academic leadership
                </p>
                <span className="hidden text-[10.5px] text-navy-400 sm:block">
                  Institutional service & governance
                </span>
              </div>
            </Reveal>

            <ol className="mt-4 space-y-3">
              {leadership.map((item, index) => {
                const RoleIcon = roleIcons[index] ?? Building2;
                return (
                  <Reveal key={item.role} delay={index * 80}>
                    <li className="card-lift group relative overflow-hidden rounded-2xl border border-navy-900/10 bg-ivory/70 p-5 hover:border-gold-400/50 hover:bg-white hover:shadow-[0_22px_45px_-34px_rgba(7,25,38,0.4)] sm:p-6">
                      <div className="flex gap-4">
                        <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-navy-900/10 bg-white text-navy-700 transition-colors duration-300 group-hover:border-gold-400/40 group-hover:bg-gold-50 group-hover:text-gold-700">
                          <RoleIcon className="h-[19px] w-[19px]" strokeWidth={1.5} aria-hidden="true" />
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="font-display text-[1.22rem] leading-tight text-navy-950">
                              {item.role}
                            </h3>
                            <Tag tone="gold">{item.meta}</Tag>
                          </div>
                          <p className="mt-1.5 text-[11.5px] font-medium text-gold-700">{item.unit}</p>
                          <p className="mt-2.5 text-[12.5px] leading-relaxed text-navy-600">
                            {item.description}
                          </p>
                        </div>
                        <span
                          className="hidden self-start font-display text-[1.2rem] leading-none text-navy-200 sm:block"
                          aria-hidden="true"
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </li>
                  </Reveal>
                );
              })}
            </ol>
          </div>

          {/* jury + mentorship */}
          <div className="space-y-6 lg:col-span-5">
            {/* Jury card */}
            <Reveal delay={100}>
              <div className="rounded-2xl border border-navy-900/10 bg-ivory/60 p-5 sm:p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-950 text-gold-300">
                    <Gavel className="h-[18px] w-[18px]" strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-[1.2rem] leading-tight text-navy-950">
                      Jury & Evaluation
                    </h3>
                    <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-navy-400">
                      Doctoral Colloquia & National Project Exhibitions
                    </p>
                  </div>
                </div>

                <ul className="mt-4 divide-y divide-navy-900/8">
                  {juryService.map((item) => (
                    <li key={item.title} className="group py-3.5">
                      <div className="flex items-start gap-3">
                        <span className="mt-0.5 shrink-0 rounded-md border border-gold-500/25 bg-gold-50 px-1.5 py-1 font-mono text-[9.5px] font-medium text-gold-800">
                          {item.year}
                        </span>
                        <div className="flex-1">
                          <p className="text-[12.5px] font-medium leading-snug text-navy-900 transition-colors group-hover:text-gold-700">
                            {item.title}
                          </p>
                          <p className="mt-1 text-[11px] leading-relaxed text-navy-500">{item.detail}</p>
                        </div>
                        {item.image && (
                          <img
                            src={item.image}
                            alt={item.title}
                            className="h-10 w-10 shrink-0 rounded-lg object-cover border border-navy-900/10 shadow-sm"
                          />
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Mentorship card with Atria students photos */}
            <Reveal delay={180}>
              <div className="rounded-2xl border border-jade-600/20 bg-jade-50 p-5 sm:p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-jade-800 text-jade-100">
                    <Users className="h-[18px] w-[18px]" strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-[1.2rem] leading-tight text-jade-900">
                      Student Mentorship & Field Visits
                    </h3>
                    <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-jade-600">
                      Industrial Visits, IISc Tours & Prototype Guidance
                    </p>
                  </div>
                </div>

                <p className="mt-3.5 text-[12.5px] leading-relaxed text-jade-900/80">
                  {mentorship.description}
                </p>

                {/* Mentorship Photos */}
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {mentorship.photos.map((ph, i) => (
                    <div key={i} className="group relative overflow-hidden rounded-lg border border-jade-600/30">
                      <img
                        src={ph.src}
                        alt={ph.caption}
                        className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  ))}
                </div>

                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {mentorship.centres.map((centre) => (
                    <li
                      key={centre}
                      className="inline-flex items-center gap-1.5 rounded-full border border-jade-700/15 bg-white/70 px-2.5 py-1 text-[10px] font-medium text-jade-800"
                    >
                      <MapPin className="h-2.5 w-2.5" aria-hidden="true" />
                      {centre}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={120}>
          <div className="relative mt-6 overflow-hidden rounded-2xl bg-navy-950 px-6 py-7 text-ivory sm:px-8">
            <div className="pointer-events-none absolute inset-0 grid-pattern opacity-40" aria-hidden="true" />
            <div className="relative flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-gold-300">
                  Academic & Technical Service
                </p>
                <p className="mt-2 max-w-xl font-display text-[1.25rem] leading-snug sm:text-[1.4rem]">
                  Looking for doctoral evaluation, conference session chairing, or project guidance?{" "}
                  <span className="italic text-gold-200">I welcome the opportunity to contribute.</span>
                </p>
              </div>
              <a
                href="#contact"
                className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-gold-400 px-5 py-3 text-[12px] font-semibold text-navy-950 transition-colors duration-300 hover:bg-gold-300"
              >
                Send an invitation
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
