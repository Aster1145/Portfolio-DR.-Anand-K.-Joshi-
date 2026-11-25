import { ArrowUp, ArrowUpRight, Mail, MapPin } from "lucide-react";
import { expertise, navLinks, profile } from "../data";
import { Divider, Monogram } from "./primitives";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-navy-950 text-ivory">
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-30" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -left-24 -top-24 h-[320px] w-[320px] rounded-full bg-jade-700/15 blur-[110px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-5 pb-7 pt-14 sm:px-8 sm:pt-16 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <a href="#home" className="group inline-flex items-center gap-3">
              <Monogram className="border-white/15 bg-white/[0.06] text-ivory backdrop-blur" />
              <span>
                <span className="block font-display text-[1.25rem] leading-tight text-ivory">
                  Dr. Anand K. Joshi
                </span>
                <span className="mt-0.5 block text-[9px] font-medium uppercase tracking-[0.2em] text-navy-300">
                  Academician · Researcher · Innovator
                </span>
              </span>
            </a>

            <p className="mt-5 max-w-sm text-[12px] leading-relaxed text-navy-300">
              Academician at Presidency University, founder at EJ Labs (incubated at IISc Bangalore),
              and scientific advisor specializing in patented battery thermal management, nano-enhanced
              phase change materials, and green mobility.
            </p>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-3 py-1.5 text-[10px] font-medium text-navy-200">
              <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-jade-400 opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-jade-400" />
              </span>
              Open to research &amp; academic collaboration
            </div>
          </div>

          <nav className="lg:col-span-2" aria-label="Footer">
            <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-gold-300">Explore</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 sm:grid-cols-1">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="group inline-flex items-center gap-1.5 text-[12px] text-navy-200 transition-colors hover:text-gold-200"
                  >
                    {link.label}
                    <ArrowUpRight
                      className="h-3 w-3 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:opacity-100"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-gold-300">Focus</p>
            <ul className="mt-4 space-y-2.5">
              {expertise.map((item) => (
                <li key={item.title} className="text-[11.5px] leading-snug text-navy-300">
                  {item.title}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-gold-300">
              Get in touch
            </p>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="group flex items-start gap-2.5 text-[12px] text-navy-200 transition-colors hover:text-gold-200"
                >
                  <Mail className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-400/80" aria-hidden="true" />
                  <span className="break-all">{profile.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-[12px] text-navy-300">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-400/80" aria-hidden="true" />
                {profile.location}
              </li>
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 text-[12px] text-navy-200 transition-colors hover:text-gold-200"
                >
                  <span>Connect on LinkedIn</span>
                  <ArrowUpRight className="h-3 w-3 text-gold-400" aria-hidden="true" />
                </a>
              </li>
            </ul>

            <a
              href="#contact"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/18 px-4 py-2.5 text-[11.5px] font-medium text-ivory transition-colors duration-300 hover:border-gold-400/50 hover:bg-white/[0.06]"
            >
              Start a conversation
              <ArrowUpRight className="h-3.5 w-3.5 text-gold-300" aria-hidden="true" />
            </a>
          </div>
        </div>

        <Divider className="mt-11" />

        <div className="flex flex-col gap-3 pt-5 text-[10.5px] text-navy-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Dr. Anand K. Joshi. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <p className="hidden text-navy-500 sm:block">
              Academician · Researcher · Innovator · Scientific Advisor
            </p>
            <a
              href="#home"
              className="group inline-flex items-center gap-1.5 font-medium text-navy-300 transition-colors hover:text-gold-200"
            >
              Back to top
              <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/15 transition-transform duration-300 group-hover:-translate-y-0.5">
                <ArrowUp className="h-3 w-3" aria-hidden="true" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
