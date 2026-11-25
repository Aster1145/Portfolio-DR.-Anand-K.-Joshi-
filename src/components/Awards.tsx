import { useMemo, useState } from "react";
import { Award as AwardIcon, Check, Sparkles, Image as ImageIcon } from "lucide-react";
import { awardFilters, awards, type AwardFilter } from "../data";
import { FeatureIcon } from "./FeatureIcon";
import { Reveal, SectionHeading, Tag } from "./primitives";
import { cn } from "../utils/cn";

export default function Awards() {
  const [filter, setFilter] = useState<AwardFilter>("All");

  const visible = useMemo(
    () =>
      awards.filter(
        (award) => filter === "All" || award.categories.includes(filter as Exclude<AwardFilter, "All">)
      ),
    [filter]
  );

  const featured = visible.find((award) => award.featured);
  const rest = visible.filter((award) => !award.featured);

  const counts = useMemo(() => {
    return awardFilters.reduce<Record<string, number>>((acc, category) => {
      acc[category] =
        category === "All"
          ? awards.length
          : awards.filter((award) =>
              award.categories.includes(category as Exclude<AwardFilter, "All">)
            ).length;
      return acc;
    }, {});
  }, []);

  return (
    <section id="awards" className="relative overflow-hidden bg-sand py-20 sm:py-24 lg:py-28">
      <div
        className="pointer-events-none absolute inset-0 paper-texture opacity-70"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-24 top-10 h-[320px] w-[320px] rounded-full bg-gold-200/30 blur-[100px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <SectionHeading
            index="02"
            eyebrow="Honours & recognition"
            title={
              <>
                Recognition that follows{" "}
                <em className="font-normal italic text-gold-700">the work</em>.
              </>
            }
            description="National awards for research innovation, green mobility, emerging defence technologies, and teaching — backed by photographic evidence from national ceremonies."
          />

          <Reveal delay={120}>
            <div
              className="flex flex-wrap gap-2 lg:justify-end"
              role="group"
              aria-label="Filter awards by category"
            >
              {awardFilters.map((category) => {
                const selected = filter === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setFilter(category)}
                    aria-pressed={selected}
                    className={cn(
                      "inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-[11.5px] font-medium transition-all duration-300",
                      selected
                        ? "border-navy-950 bg-navy-950 text-ivory shadow-[0_10px_22px_-14px_rgba(7,25,38,0.8)]"
                        : "border-navy-900/15 bg-white/70 text-navy-600 hover:border-navy-900/30 hover:bg-white hover:text-navy-950"
                    )}
                  >
                    {category}
                    <span
                      className={cn(
                        "text-[9.5px] tabular-nums",
                        selected ? "text-gold-300" : "text-navy-400"
                      )}
                    >
                      {String(counts[category]).padStart(2, "0")}
                    </span>
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>

        <div className="mt-10 sm:mt-12">
          {featured ? (
            <Reveal>
              <article className="relative overflow-hidden rounded-3xl border border-gold-500/30 bg-white shadow-[0_30px_70px_-50px_rgba(7,25,38,0.6)]">
                <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-gold-300 via-gold-500 to-gold-300" aria-hidden="true" />
                <div
                  className="absolute -right-16 -top-16 h-52 w-52 rounded-full border border-gold-400/20"
                  aria-hidden="true"
                />

                <div className="relative grid gap-8 p-6 sm:p-8 lg:grid-cols-12 lg:items-center lg:p-10">
                  <div className="lg:col-span-7">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <Tag tone="gold" className="border-gold-500/30 bg-gold-50">
                        <Sparkles className="h-3 w-3" aria-hidden="true" />
                        Featured recognition
                      </Tag>
                      <span className="text-[10.5px] font-medium uppercase tracking-[0.16em] text-navy-400">
                        {featured.month}
                      </span>
                    </div>

                    <h3 className="mt-4 max-w-2xl font-display text-[1.65rem] leading-[1.15] tracking-[-0.015em] text-navy-950 sm:text-[2rem]">
                      {featured.title}
                    </h3>
                    <p className="mt-2.5 max-w-2xl text-[12px] font-semibold leading-relaxed text-gold-800">
                      {featured.issuer}
                    </p>
                    <p className="mt-3.5 max-w-2xl text-[13px] leading-relaxed text-navy-600">
                      {featured.description}
                    </p>

                    <div className="mt-5 flex flex-wrap items-center gap-2">
                      {featured.context ? <Tag>{featured.context}</Tag> : null}
                      {featured.categories.map((category) => (
                        <Tag key={category} tone="jade">
                          <Check className="h-2.5 w-2.5" aria-hidden="true" />
                          {category}
                        </Tag>
                      ))}
                      <a
                        href="#gallery"
                        className="inline-flex items-center gap-1.5 rounded-full border border-gold-400/30 bg-gold-50 px-2.5 py-1 text-[10.5px] font-medium text-gold-800 hover:bg-gold-100"
                      >
                        <ImageIcon className="h-3 w-3" />
                        View in Photo Archive
                      </a>
                    </div>
                  </div>

                  {/* Ceremony photo & medal badge */}
                  <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-4 items-center">
                    {featured.image && (
                      <div className="group relative w-full overflow-hidden rounded-2xl border border-gold-400/30 shadow-md">
                        <img
                          src={featured.image}
                          alt="Padma Vibhushan Prof. U.R. Rao Award presentation ceremony at KSTA"
                          className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                        <p className="absolute bottom-2.5 left-3 right-3 text-center text-[10px] font-medium text-ivory">
                          Award Presentation Ceremony · KSTA Auditorium Bangalore (Feb 2024)
                        </p>
                      </div>
                    )}

                    <div className="flex w-full items-center justify-between gap-4 rounded-xl border border-navy-900/10 bg-ivory/80 px-4 py-3">
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-100 text-gold-700">
                          <AwardIcon className="h-5 w-5" />
                        </span>
                        <div>
                          <p className="font-display text-base font-semibold text-navy-950">2024 Award</p>
                          <p className="text-[10px] text-navy-500">KSTA · Govt. of Karnataka</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-jade-700">
                        National Science Day
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ) : null}

          {/* Other Awards Grid */}
          <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {rest.map((award, index) => (
              <Reveal key={`${filter}-${award.id}`} delay={index * 70}>
                <article className="card-lift group flex h-full flex-col overflow-hidden rounded-2xl border border-navy-900/10 bg-white/90 p-5 hover:border-gold-500/50 hover:bg-white hover:shadow-[0_26px_50px_-34px_rgba(7,25,38,0.45)] sm:p-6">
                  {/* Photo thumbnail if available */}
                  {award.image && (
                    <div className="relative -mx-5 -mt-5 mb-4 aspect-[16/9] overflow-hidden border-b border-navy-900/10 bg-navy-900 sm:-mx-6 sm:-mt-6">
                      <img
                        src={award.image}
                        alt={award.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent opacity-70" />
                      <span className="absolute bottom-2 left-3 inline-flex items-center gap-1 text-[9px] font-medium text-ivory">
                        <ImageIcon className="h-2.5 w-2.5 text-gold-300" />
                        Ceremony Photo
                      </span>
                    </div>
                  )}

                  <div className="flex items-start justify-between gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-gold-500/20 bg-gold-50 text-gold-700 transition-colors duration-300 group-hover:border-navy-950 group-hover:bg-navy-950 group-hover:text-gold-300">
                      <FeatureIcon name={award.icon} className="h-[19px] w-[19px]" />
                    </span>
                    <span className="font-display text-[1.35rem] leading-none tracking-[-0.02em] text-navy-200 transition-colors duration-300 group-hover:text-gold-500">
                      {award.year}
                    </span>
                  </div>

                  <p className="mt-5 text-[8.5px] font-semibold uppercase tracking-[0.2em] text-gold-700">
                    {award.month}
                    {award.context ? ` · ${award.context}` : ""}
                  </p>
                  <h3 className="mt-2 font-display text-[1.18rem] leading-snug text-navy-950">
                    {award.title}
                  </h3>
                  <p className="mt-1.5 text-[11px] font-medium leading-relaxed text-navy-500">
                    {award.issuer}
                  </p>
                  <p className="mt-3 flex-1 text-[12px] leading-relaxed text-navy-600">
                    {award.description}
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-1.5 border-t border-navy-900/8 pt-3.5">
                    {award.categories.map((category) => (
                      <Tag key={category}>{category}</Tag>
                    ))}
                    {award.image && (
                      <a
                        href="#gallery"
                        className="ml-auto inline-flex items-center gap-1 text-[10px] font-medium text-gold-700 hover:text-gold-800"
                      >
                        Evidence &rarr;
                      </a>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="mt-6 flex flex-col gap-2 border-t border-navy-900/10 pt-5 text-[11px] text-navy-500 sm:flex-row sm:items-center sm:justify-between">
              <p>
                Showing {String(visible.length).padStart(2, "0")} of{" "}
                {String(awards.length).padStart(2, "0")} recognitions
                <span className="px-2 text-gold-500" aria-hidden="true">
                  ·
                </span>
                2019 – 2025
              </p>
              <p className="italic">Every honour reflects collaborative engineering and verified academic impact.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
