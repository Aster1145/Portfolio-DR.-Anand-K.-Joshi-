import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navLinks, profile } from "../data";
import { cn } from "../utils/cn";
import { Monogram } from "./primitives";

const sectionIds = navLinks.map((link) => link.id);

function useScrollSpyLinks(ids: string[]) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const update = () => {
      const marker = window.scrollY + window.innerHeight * 0.32;
      let current = ids[0];

      for (const id of ids) {
        const element = document.getElementById(id);
        if (element && element.offsetTop <= marker) current = id;
      }

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8) {
        current = ids[ids.length - 1];
      }

      setActive(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [ids]);

  return active;
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useScrollSpyLinks(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, []);

  const solid = scrolled || menuOpen;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        solid
          ? "border-b border-navy-900/10 bg-ivory/92 shadow-[0_18px_40px_-32px_rgba(7,25,38,0.6)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:h-[80px] lg:px-8 xl:gap-4">
        <a href="#home" className="group flex shrink-0 items-center gap-2.5 sm:gap-3" aria-label="Dr. Anand K. Joshi — home">
          <Monogram
            variant={solid ? "light" : "dark"}
            className={cn(
              "h-10 w-10 transition-colors duration-500",
              !solid && "border-white/20 bg-white/[0.06] text-ivory backdrop-blur-sm"
            )}
          />
          <span className="leading-tight">
            <span
              className={cn(
                "block whitespace-nowrap font-display text-[1.08rem] tracking-[-0.01em] transition-colors duration-500 sm:text-[1.12rem]",
                solid ? "text-navy-950" : "text-ivory"
              )}
            >
              Dr. Anand K. Joshi
            </span>
            <span
              className={cn(
                "mt-0.5 hidden whitespace-nowrap text-[9px] font-medium uppercase tracking-[0.2em] transition-colors duration-500 xl:block",
                solid ? "text-navy-500" : "text-navy-200/70"
              )}
            >
              Academician · Researcher · Innovator
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-0.5 lg:flex xl:gap-1" aria-label="Primary">
          {navLinks.map((link) => {
            const isActive = active === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "relative whitespace-nowrap rounded-full px-2.5 py-1.5 text-[12px] font-medium transition-colors duration-300 xl:px-3.5 xl:py-2 xl:text-[12.5px]",
                  solid
                    ? isActive
                      ? "text-navy-950"
                      : "text-navy-600 hover:text-navy-950"
                    : isActive
                      ? "text-ivory"
                      : "text-navy-100/70 hover:text-ivory"
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute bottom-0 left-1/2 h-[3px] w-[3px] -translate-x-1/2 rounded-full bg-gold-400 transition-all duration-300",
                    isActive ? "opacity-100" : "opacity-0"
                  )}
                  aria-hidden="true"
                />
              </a>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2.5">
          <a
            href="#contact"
            className="group hidden shrink-0 items-center gap-2 rounded-full bg-gold-400 py-2.5 pl-4 pr-3 text-[12px] font-semibold whitespace-nowrap text-navy-950 transition-all duration-300 hover:bg-gold-300 hover:shadow-[0_10px_24px_-14px_rgba(206,170,91,0.9)] sm:inline-flex xl:text-[12.5px]"
          >
            Get in touch
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-navy-950/10 transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight className="h-3 w-3" strokeWidth={2} aria-hidden="true" />
            </span>
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-300 lg:hidden",
              solid
                ? "border-navy-900/15 text-navy-900 hover:bg-navy-900/5"
                : "border-white/20 text-ivory hover:bg-white/10"
            )}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      <div
        id="mobile-navigation"
        className={cn(
          "fixed inset-x-0 top-[72px] z-40 origin-top overflow-y-auto border-t border-white/10 bg-navy-950 transition-all duration-300 lg:hidden",
          menuOpen
            ? "pointer-events-auto max-h-[calc(100dvh-72px)] opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        )}
      >
        <nav className="px-5 py-6 sm:px-8" aria-label="Mobile">
          <ul className="divide-y divide-white/10">
            {navLinks.map((link, index) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="group flex items-center justify-between gap-4 py-4"
                >
                  <span className="flex items-baseline gap-4">
                    <span className="text-[10px] font-medium tabular-nums tracking-[0.18em] text-gold-400/80">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={cn(
                        "font-display text-xl transition-colors",
                        active === link.id ? "text-gold-200" : "text-ivory group-hover:text-gold-200"
                      )}
                    >
                      {link.label}
                    </span>
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 text-navy-300 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold-300"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold-300">
              Direct contact
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-2 block break-all text-sm text-ivory/90 hover:text-gold-200"
            >
              {profile.email}
            </a>
            <p className="mt-1 text-sm text-navy-300">{profile.location}</p>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 rounded-full bg-gold-400 px-4 py-3 text-[12.5px] font-semibold text-navy-950"
            >
              Start a conversation
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
