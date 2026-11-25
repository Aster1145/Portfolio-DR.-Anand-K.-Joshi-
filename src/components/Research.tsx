import { useState } from "react";
import {
  ArrowUpRight,
  BadgeCheck,
  ChevronDown,
  ClipboardList,
  Cpu,
  FileCheck2,
  Rocket,
  Users,
} from "lucide-react";
import { isroRecognition, patent, presentations, censeFacility } from "../data";
import { Reveal, SectionHeading, Tag } from "./primitives";

export default function Research() {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [showCert, setShowCert] = useState(false);

  return (
    <section id="research" className="relative overflow-hidden bg-navy-950 py-20 text-ivory sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-40" aria-hidden="true" />
      <div
        className="pointer-events-none absolute right-0 top-0 h-[520px] w-[520px] rounded-full bg-jade-700/15 blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-gold-600/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-14">
          <SectionHeading
            tone="dark"
            index="03"
            eyebrow="Research & patents"
            title={
              <>
                From the laboratory to the{" "}
                <em className="font-normal italic text-gold-300">patent office</em>.
              </>
            }
            description="A granted Indian patent, sponsored research facilities at CeNSE IISc, ISRO leadership appreciation, and deep contributions to energy storage science."
          />

          <Reveal delay={140}>
            <div className="flex flex-wrap gap-2 lg:max-w-[20rem] lg:justify-end">
              {["Battery thermal management", "Nano-enhanced PCMs", "Green mobility", "Space energy systems"].map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-white/12 bg-white/[0.04] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.13em] text-navy-200"
                >
                  {area}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        {/* ------------------------------ patent ------------------------------ */}
        <div className="mt-10 grid gap-6 lg:grid-cols-12 sm:mt-12">
          <Reveal className="lg:col-span-7">
            <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-sm sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-jade-400/25 bg-jade-500/10 px-2.5 py-1 text-[9.5px] font-semibold uppercase tracking-[0.16em] text-jade-200">
                  <BadgeCheck className="h-3 w-3" strokeWidth={2} aria-hidden="true" />
                  Patent granted
                </span>
                <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-gold-300">
                  Patent No. {patent.number}
                </span>
              </div>

              <h3 className="mt-5 font-display text-[1.85rem] leading-[1.12] tracking-[-0.02em] text-ivory sm:text-[2.3rem]">
                {patent.title}
              </h3>
              <p className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] font-medium text-navy-300">
                {patent.office}
                <span className="h-1 w-1 rounded-full bg-gold-400" aria-hidden="true" />
                Granted {patent.granted}
                <span className="h-1 w-1 rounded-full bg-gold-400" aria-hidden="true" />
                Patentee: {patent.patentee}
              </p>

              <p className="mt-5 text-[13px] leading-relaxed text-navy-200/85 sm:text-[13.5px]">
                {patent.description}
              </p>

              <div className="mt-6">
                <p className="flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-navy-400">
                  <Users className="h-3 w-3" aria-hidden="true" />
                  Inventors
                </p>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {patent.coInventors.map((inventor) => (
                    <span
                      key={inventor}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-navy-900/60 py-1 pl-1 pr-3 text-[11.5px] text-navy-100"
                    >
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold-400/15 text-[8.5px] font-semibold tracking-wider text-gold-200">
                        {inventor
                          .replace("Dr. ", "")
                          .split(" ")
                          .filter((part) => /^[A-Za-z]/.test(part))
                          .slice(0, 2)
                          .map((part) => part[0])
                          .join("")}
                      </span>
                      {inventor}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-3 border-t border-white/10 pt-5">
                <button
                  type="button"
                  onClick={() => setDetailsOpen((open) => !open)}
                  aria-expanded={detailsOpen}
                  aria-controls="patent-details"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-4 py-2.5 text-[11.5px] font-medium text-ivory transition-colors duration-300 hover:border-gold-400/50 hover:bg-white/[0.08]"
                >
                  <ClipboardList className="h-3.5 w-3.5 text-gold-300" aria-hidden="true" />
                  {detailsOpen ? "Hide technical details" : "View technical details"}
                  <ChevronDown
                    className={`h-3.5 w-3.5 text-navy-300 transition-transform duration-300 ${
                      detailsOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>

                <button
                  type="button"
                  onClick={() => setShowCert((open) => !open)}
                  className="group inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-500/10 px-4 py-2.5 text-[11.5px] font-medium text-gold-200 transition-colors duration-300 hover:bg-gold-500/20"
                >
                  <FileCheck2 className="h-3.5 w-3.5 text-gold-400" aria-hidden="true" />
                  {showCert ? "Hide certificate preview" : "View patent certificate"}
                </button>
              </div>

              <div className="patent-details" data-open={detailsOpen} id="patent-details">
                <div>
                  <dl className="mt-4 grid gap-x-6 gap-y-3 rounded-xl border border-white/10 bg-navy-950/70 p-4 sm:grid-cols-2">
                    {[
                      ["Patent Number", patent.number],
                      ["Application Number", patent.applicationNumber],
                      ["Date of Filing", patent.dateOfFiling],
                      ["Date of Grant", patent.granted],
                      ["Patentee Institution", patent.patentee],
                      ["Term of Patent", patent.term],
                      ["Issuing Authority", patent.office],
                      ["Primary Domain", patent.domain],
                    ].map(([label, value]) => (
                      <div key={label}>
                        <dt className="text-[8.5px] font-semibold uppercase tracking-[0.18em] text-navy-400">
                          {label}
                        </dt>
                        <dd className="mt-1 text-[11.5px] leading-snug text-navy-100">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>

              {/* Collapsible Certificate Preview */}
              {showCert && (
                <div className="mt-4 overflow-hidden rounded-xl border border-gold-400/30 bg-navy-950/80 p-3">
                  <p className="mb-2 text-[9.5px] font-semibold uppercase tracking-[0.18em] text-gold-300">
                    Official Patent Certificate — The Patent Office, Govt. of India
                  </p>
                  <img
                    src={patent.certificateImage}
                    alt="Official Patent Certificate No. 542165"
                    className="max-h-96 w-full rounded-lg object-contain bg-white"
                  />
                </div>
              )}
            </article>
          </Reveal>

          {/* Patent engineering figure */}
          <Reveal delay={120} className="lg:col-span-5">
            <figure className="group relative h-full min-h-[22rem] overflow-hidden rounded-2xl border border-white/10 bg-navy-900">
              <img
                src={patent.image}
                alt="Engineering model of a lithium-ion battery pack on a machined hybrid cooling plate"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                loading="lazy"
                width={1536}
                height={1024}
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-navy-950/10"
                aria-hidden="true"
              />
              <div
                className="absolute right-4 top-4 flex h-16 w-16 flex-col items-center justify-center rounded-full border border-gold-300/40 bg-navy-950/70 text-center backdrop-blur"
                aria-hidden="true"
              >
                <span className="text-[7px] font-semibold uppercase tracking-[0.16em] text-gold-300">
                  Granted
                </span>
                <span className="font-display text-lg leading-none text-ivory">2024</span>
              </div>
              <figcaption className="absolute inset-x-5 bottom-5">
                <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-gold-300">
                  Patent In Focus
                </p>
                <p className="mt-1.5 font-display text-[1.3rem] leading-tight text-ivory">
                  Hybrid Thermal Architecture for Li-ion Packs
                </p>
                <p className="mt-1 text-[11px] leading-relaxed text-navy-200/90">
                  Preventing thermal runaway & cell degradation in electric mobility & aerospace platforms.
                </p>
              </figcaption>
            </figure>
          </Reveal>
        </div>

        {/* ------------------------------ ISRO Recognition Spotlight ------------------------------ */}
        <Reveal delay={100}>
          <div className="mt-12 overflow-hidden rounded-2xl border border-gold-400/30 bg-gradient-to-r from-navy-900 via-navy-950 to-navy-900 p-6 sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="lg:max-w-xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-3 py-1 text-[9.5px] font-semibold uppercase tracking-[0.18em] text-gold-300">
                  <Rocket className="h-3.5 w-3.5 text-gold-300" />
                  ISRO Space Research Endorsement · 2024
                </div>
                <h3 className="mt-3 font-display text-[1.65rem] leading-tight text-ivory sm:text-[1.95rem]">
                  Appreciation & Blessings from{" "}
                  <span className="text-gold-gradient">ISRO Leadership & Scientists</span>
                </h3>
                <p className="mt-3 text-[13px] leading-relaxed text-navy-200">
                  {isroRecognition.summary}
                </p>
                <p className="mt-2 text-[11.5px] text-navy-400">
                  Also serving as the Institute Coordinator for the <strong className="text-navy-200">IIRS–ISRO Outreach Programme</strong>, connecting academic institutions with national space science missions.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:w-[26rem]">
                {isroRecognition.photos.map((photo, idx) => (
                  <div key={idx} className="group relative overflow-hidden rounded-xl border border-white/15 bg-navy-950">
                    <img
                      src={photo.src}
                      alt={photo.title}
                      className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent" />
                    <p className="absolute bottom-2.5 inset-x-2 text-center text-[10px] font-medium leading-snug text-ivory/95">
                      {photo.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* ------------------------------ CeNSE IISc Facility Spotlight ------------------------------ */}
        <Reveal delay={120}>
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-7">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-jade-800/80 text-jade-300">
                  <Cpu className="h-4 w-4" />
                </span>
                <div>
                  <h4 className="font-display text-[1.2rem] text-ivory">{censeFacility.title}</h4>
                  <p className="text-[10.5px] text-navy-300">{censeFacility.sponsor} · {censeFacility.year}</p>
                </div>
              </div>
              <span className="rounded-full border border-jade-400/20 bg-jade-900/30 px-3 py-1 text-[9.5px] font-semibold uppercase tracking-[0.15em] text-jade-200">
                CeNSE, IISc Bangalore
              </span>
            </div>
            <p className="mt-3.5 text-[12.5px] leading-relaxed text-navy-200">
              {censeFacility.summary}
            </p>

            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-5">
              {censeFacility.photos.map((p, idx) => (
                <div key={idx} className="group relative overflow-hidden rounded-lg border border-white/10 bg-navy-900">
                  <img
                    src={p.src}
                    alt={p.caption}
                    className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-transparent to-transparent opacity-80" />
                  <p className="absolute bottom-1.5 inset-x-1.5 text-center text-[8.5px] font-medium leading-tight text-ivory">
                    {p.caption.split(" at ")[0].split(".")[0]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* ------------------------------ presentations ------------------------------ */}
        <div className="mt-14 grid gap-6 border-t border-white/10 pt-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-4">
            <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-gold-300">
              <span className="h-px w-7 bg-gold-400/70" aria-hidden="true" />
              Conferences & talks
            </p>
            <h3 className="mt-4 font-display text-[1.8rem] leading-tight tracking-[-0.015em] text-ivory">
              Sharing the work,
              <span className="block italic text-gold-200">widening the conversation.</span>
            </h3>
            <p className="mt-4 max-w-sm text-[12.5px] leading-relaxed text-navy-300">
              Selected papers, symposia, and invited panels across India's leading research forums including IEEE Space Conference, IISc Bangalore, and IEI National Conventions.
            </p>
          </Reveal>

          <div className="lg:col-span-8">
            <ol className="border-t border-white/10">
              {presentations.map((item, index) => (
                <Reveal key={`${item.title}-${item.year}`} delay={index * 70}>
                  <li className="group border-b border-white/10">
                    <div className="grid grid-cols-[3.4rem_1fr_auto] items-start gap-3 py-5 transition-colors duration-300 sm:grid-cols-[4.5rem_1fr_auto] sm:items-center sm:gap-5">
                      <span className="font-display text-[1.05rem] leading-none text-gold-300">
                        {item.year}
                      </span>
                      <div>
                        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5">
                          <h4 className="font-display text-[1.1rem] leading-snug text-ivory transition-colors duration-300 group-hover:text-gold-200 sm:text-[1.2rem]">
                            {item.title}
                          </h4>
                          <Tag tone="dark">{item.type}</Tag>
                        </div>
                        <p className="mt-1.5 text-[11px] font-medium text-gold-400/90">
                          {item.conference}
                        </p>
                        <p className="mt-0.5 text-[11px] leading-relaxed text-navy-300">
                          {item.venue}
                        </p>
                        <p className="mt-1 text-[9px] font-medium uppercase tracking-[0.16em] text-jade-300/90">
                          {item.highlight}
                        </p>
                      </div>
                      <span
                        className="mt-1 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-navy-300 transition-all duration-300 group-hover:border-gold-400/40 group-hover:text-gold-300 sm:mt-0"
                        aria-hidden="true"
                      >
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
