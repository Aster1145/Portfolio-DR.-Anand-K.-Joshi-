import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { cn } from "../utils/cn";

/* ------------------------------------------------------------------ */
/* Scroll reveal                                                       */
/* ------------------------------------------------------------------ */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -48px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn("reveal", visible && "is-visible", className)}
      style={{ transitionDelay: `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Section heading                                                     */
/* ------------------------------------------------------------------ */
export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  tone = "light",
  align = "left",
  maxWidth = "max-w-2xl",
}: {
  index: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  tone?: "light" | "dark";
  align?: "left" | "center";
  maxWidth?: string;
}) {
  const dark = tone === "dark";
  return (
    <div className={cn(align === "center" && "mx-auto text-center")}>
      <Reveal>
        <div
          className={cn(
            "flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.26em]",
            align === "center" && "justify-center",
            dark ? "text-gold-300" : "text-gold-700"
          )}
        >
          <span
            className={cn("h-px w-8", dark ? "bg-gold-400/70" : "bg-gold-500/70")}
            aria-hidden="true"
          />
          <span>{index}</span>
          <span className={dark ? "text-navy-400" : "text-navy-300"} aria-hidden="true">
            /
          </span>
          <span>{eyebrow}</span>
        </div>
      </Reveal>
      <Reveal delay={80}>
        <h2
          className={cn(
            "mt-5 font-display text-[2.1rem] leading-[1.08] tracking-[-0.02em] sm:text-[2.7rem] lg:text-[3.1rem]",
            dark ? "text-ivory" : "text-navy-950",
            maxWidth,
            align === "center" && "mx-auto"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={140}>
          <p
            className={cn(
              "mt-5 text-[0.98rem] leading-relaxed sm:text-[1.02rem]",
              dark ? "text-navy-200/85" : "text-navy-600",
              maxWidth,
              align === "center" && "mx-auto"
            )}
          >
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Brand monogram                                                      */
/* ------------------------------------------------------------------ */
export function Monogram({
  className,
  variant = "dark",
}: {
  className?: string;
  variant?: "dark" | "light";
}) {
  return (
    <span
      className={cn(
        "relative inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[0.6rem] border",
        variant === "dark"
          ? "border-gold-400/40 bg-navy-900 text-ivory"
          : "border-navy-900/15 bg-white text-navy-950",
        className
      )}
      aria-hidden="true"
    >
      <span className="font-display text-[0.98rem] font-medium tracking-[0.08em]">AKJ</span>
      <span className="absolute -right-[3px] -top-[3px] h-[7px] w-[7px] rounded-full bg-gold-400 ring-2 ring-white/10" />
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Small UI bits                                                       */
/* ------------------------------------------------------------------ */
export function Tag({
  children,
  tone = "light",
  className,
}: {
  children: ReactNode;
  tone?: "light" | "dark" | "gold" | "jade";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10.5px] font-medium uppercase tracking-[0.14em]",
        tone === "light" && "border-navy-900/12 bg-navy-50 text-navy-600",
        tone === "dark" && "border-white/12 bg-white/5 text-navy-100",
        tone === "gold" && "border-gold-500/25 bg-gold-50 text-gold-800",
        tone === "jade" && "border-jade-600/20 bg-jade-50 text-jade-800",
        className
      )}
    >
      {children}
    </span>
  );
}

export function ArrowBadge({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-full border border-navy-900/12 text-navy-700 transition-colors duration-300 group-hover:border-navy-900/20 group-hover:bg-navy-950 group-hover:text-gold-300",
        className
      )}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="h-4 w-4">
        <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export function Divider({ className }: { className?: string }) {
  return <div className={cn("hairline-gold h-px w-full opacity-40", className)} aria-hidden="true" />;
}
