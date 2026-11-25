import { ArrowUpRight, Leaf } from "lucide-react";
import { commitments } from "../data";
import { FeatureIcon } from "./FeatureIcon";
import { Reveal } from "./primitives";

export default function Sustainability() {
  return (
    <section
      id="sustainability"
      aria-labelledby="sustainability-title"
      className="relative overflow-hidden bg-jade-950 py-20 text-ivory sm:py-24"
    >
      <div className="pointer-events-none absolute inset-0 dot-pattern opacity-30" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-jade-500/15 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-20 bottom-0 h-[300px] w-[300px] rounded-full bg-gold-500/10 blur-[100px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.26em] text-gold-300">
                <span className="h-px w-8 bg-gold-400/70" aria-hidden="true" />
                <span>05</span>
                <span className="text-jade-600" aria-hidden="true">
                  /
                </span>
                <span>Social commitment</span>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h2
                id="sustainability-title"
                className="mt-5 max-w-2xl font-display text-[2.1rem] leading-[1.08] tracking-[-0.02em] sm:text-[2.7rem] lg:text-[3rem]"
              >
                Sustainability is a responsibility,{" "}
                <em className="font-normal italic text-gold-200">not a footnote</em>.
              </h2>
            </Reveal>

            <Reveal delay={140}>
              <p className="mt-5 max-w-xl text-[0.94rem] leading-relaxed text-jade-100/75">
                Alongside research and teaching, Dr. Joshi contributes to the communities and causes
                around the campus — from blood donation drives and tree plantation campaigns to
                sustained advocacy for clean energy.
              </p>
            </Reveal>

            <Reveal delay={190}>
              <div className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-gold-300/30 bg-white/[0.06] px-3.5 py-2 text-[10px] font-medium uppercase tracking-[0.16em] text-gold-100">
                <Leaf className="h-3.5 w-3.5 text-gold-300" strokeWidth={1.7} aria-hidden="true" />
                UN SDG 7 · Affordable & clean energy
              </div>
            </Reveal>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {commitments.map((item, index) => (
                <Reveal key={item.title} delay={220 + index * 70}>
                  <article className="group h-full rounded-xl border border-white/10 bg-white/[0.05] p-4 transition-colors duration-300 hover:border-gold-300/35 hover:bg-white/[0.08]">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-jade-800 text-gold-200 transition-colors duration-300 group-hover:bg-gold-400 group-hover:text-navy-950">
                      <FeatureIcon name={item.icon} className="h-[17px] w-[17px]" />
                    </span>
                    <h3 className="mt-3.5 font-display text-[1.02rem] leading-snug">{item.title}</h3>
                    <p className="mt-1.5 text-[11px] leading-relaxed text-jade-100/65">
                      {item.description}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={200} className="lg:col-span-5">
            <div className="relative">
              <div
                className="absolute -bottom-3 -right-3 hidden h-full w-full rounded-2xl border border-gold-300/20 sm:block"
                aria-hidden="true"
              />
              <figure className="relative overflow-hidden rounded-2xl border border-white/12">
                <img
                  src="/images/sustainability.jpg"
                  alt="Hands planting a sapling in rich soil during golden-hour light, with a wind turbine in the distance"
                  className="aspect-[4/3.4] w-full object-cover"
                  loading="lazy"
                  width={1280}
                  height={1088}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-jade-950/80 via-jade-950/10 to-transparent"
                  aria-hidden="true"
                />
                <figcaption className="absolute inset-x-4 bottom-4 rounded-xl border border-white/15 bg-jade-950/60 p-4 backdrop-blur-md">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[8.5px] font-semibold uppercase tracking-[0.2em] text-gold-300">
                        Beyond the classroom
                      </p>
                      <p className="mt-1 font-display text-[1.05rem] leading-snug">
                        Greener campuses, healthier communities.
                      </p>
                    </div>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold-300/40 text-gold-200">
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                  </div>
                </figcaption>
              </figure>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
