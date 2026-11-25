import { useState, type ChangeEvent, type FormEvent } from "react";
import {
  ArrowUpRight,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock,
  Copy,
  Mail,
  MapPin,
  Phone,
  Send,
  ArrowRight,
} from "lucide-react";
import { profile } from "../data";
import { Reveal, SectionHeading, Tag } from "./primitives";

const subjects = [
  "Research collaboration",
  "Invited talk / conference",
  "Jury or review invitation",
  "Student mentorship",
  "Scientific advisory",
  "Something else",
];

const profiles = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/anandkjoshi", icon: ArrowUpRight },
  { label: "Google Scholar", href: "https://scholar.google.com", icon: ArrowUpRight },
  { label: "ORCID", href: "https://orcid.org", icon: ArrowUpRight },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: subjects[0],
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const update =
    (key: keyof typeof form) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((previous) => ({ ...previous, [key]: event.target.value }));

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Subject: ${form.subject}`,
      "",
      form.message,
    ].join("\n");
    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
      `${form.subject} — website enquiry`
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSubmitted(true);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  const reset = () => {
    setSubmitted(false);
    setForm({ name: "", email: "", subject: subjects[0], message: "" });
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-ivory py-20 sm:py-24 lg:py-28">
      <div
        className="pointer-events-none absolute -right-20 top-10 h-[380px] w-[380px] rounded-full bg-gold-200/25 blur-[110px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          index="06"
          eyebrow="Contact"
          title={
            <>
              Let's start a <em className="font-normal italic text-gold-700">conversation</em>.
            </>
          }
          description="For research collaborations, invited talks, jury service, scientific advisory or student mentorship — a thoughtful note is always welcome."
        />

        <div className="mt-11 grid gap-5 lg:grid-cols-12">
          {/* ------------------------------ details ------------------------------ */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="overflow-hidden rounded-2xl border border-navy-900/10 bg-white shadow-[0_24px_60px_-48px_rgba(7,25,38,0.55)]">
                <div className="border-b border-navy-900/8 bg-navy-950 px-5 py-4 sm:px-6">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-gold-300">
                    Direct contact
                  </p>
                  <p className="mt-1 font-display text-[1.25rem] leading-snug text-ivory">
                    Dr. Anand K. Joshi
                  </p>
                </div>

                <div className="divide-y divide-navy-900/8">
                  <div className="flex items-start gap-3.5 px-5 py-4 sm:px-6">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-navy-700">
                      <Mail className="h-4 w-4" strokeWidth={1.6} aria-hidden="true" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-[8.5px] font-semibold uppercase tracking-[0.18em] text-navy-400">
                        Email
                      </p>
                      <a
                        href={`mailto:${profile.email}`}
                        className="mt-1 block break-all text-[12.5px] font-medium text-navy-900 transition-colors hover:text-gold-700"
                      >
                        {profile.email}
                      </a>
                    </div>
                    <button
                      type="button"
                      onClick={copyEmail}
                      className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-navy-900/10 text-navy-500 transition-colors hover:border-gold-500/40 hover:bg-gold-50 hover:text-gold-700"
                      aria-label={copied ? "Email copied" : "Copy email address"}
                    >
                      {copied ? (
                        <Check className="h-3.5 w-3.5 text-jade-600" aria-hidden="true" />
                      ) : (
                        <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                      )}
                    </button>
                  </div>

                  <div className="flex items-start gap-3.5 px-5 py-4 sm:px-6">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-navy-700">
                      <Phone className="h-4 w-4" strokeWidth={1.6} aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-[8.5px] font-semibold uppercase tracking-[0.18em] text-navy-400">
                        Phone
                      </p>
                      <a
                        href={`tel:${profile.phone.replace(/\s/g, "")}`}
                        className="mt-1 block text-[12.5px] font-medium text-navy-900 transition-colors hover:text-gold-700"
                      >
                        {profile.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 px-5 py-4 sm:px-6">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-navy-700">
                      <MapPin className="h-4 w-4" strokeWidth={1.6} aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-[8.5px] font-semibold uppercase tracking-[0.18em] text-navy-400">
                        Based in
                      </p>
                      <p className="mt-1 text-[12.5px] font-medium text-navy-900">{profile.location}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 px-5 py-4 sm:px-6">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-navy-700">
                      <Clock className="h-4 w-4" strokeWidth={1.6} aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-[8.5px] font-semibold uppercase tracking-[0.18em] text-navy-400">
                        Response time
                      </p>
                      <p className="mt-1 text-[12.5px] font-medium text-navy-900">
                        {profile.responseTime}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 border-t border-navy-900/8 bg-navy-50/60 px-5 py-3.5 sm:px-6">
                  <span className="mr-1 text-[8.5px] font-semibold uppercase tracking-[0.18em] text-navy-400">
                    Profiles
                  </span>
                  {profiles.map((item) => {
                    const ProfileIcon = item.icon;
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-navy-900/10 bg-white px-2.5 py-1 text-[10px] font-medium text-navy-600 transition-colors hover:border-gold-500/40 hover:text-gold-700"
                      >
                        <ProfileIcon className="h-3 w-3" aria-hidden="true" />
                        {item.label}
                      </a>
                    );
                  })}
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-4 rounded-2xl border border-gold-500/25 bg-gold-50/70 p-5">
                <p className="flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-gold-800">
                  <span className="h-1.5 w-1.5 rounded-full bg-jade-500" aria-hidden="true" />
                  Open to
                </p>
                <p className="mt-2 text-[12.5px] leading-relaxed text-navy-700">
                  {profile.availability}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  <Tag tone="gold">Science &amp; technology</Tag>
                  <Tag tone="jade">Green mobility</Tag>
                  <Tag>Energy storage</Tag>
                </div>
              </div>
            </Reveal>
          </div>

          {/* ------------------------------ form ------------------------------ */}
          <Reveal delay={100} className="lg:col-span-7">
            <div className="h-full rounded-2xl border border-navy-900/10 bg-white p-5 shadow-[0_24px_60px_-48px_rgba(7,25,38,0.55)] sm:p-7 lg:p-8">
              {submitted ? (
                <div
                  className="flex h-full min-h-[24rem] flex-col items-center justify-center text-center"
                  role="status"
                  aria-live="polite"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-jade-50 text-jade-700">
                    <CheckCircle2 className="h-7 w-7" strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-[1.75rem] leading-tight text-navy-950">
                    Thank you{form.name ? `, ${form.name.split(" ")[0]}` : ""}.
                  </h3>
                  <p className="mt-3 max-w-sm text-[12.5px] leading-relaxed text-navy-600">
                    Your message is ready in your email app. If it did not open automatically, you can
                    reach Dr. Joshi directly using the email below.
                  </p>
                  <a
                    href={`mailto:${profile.email}`}
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-navy-950 px-5 py-2.5 text-[12px] font-medium text-ivory transition-colors hover:bg-navy-900"
                  >
                    <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                    {profile.email}
                  </a>
                  <button
                    type="button"
                    onClick={reset}
                    className="mt-4 text-[11.5px] font-medium text-gold-700 underline underline-offset-4 transition-colors hover:text-gold-800"
                  >
                    Write another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex h-full flex-col">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-[1.4rem] leading-tight text-navy-950">
                        Send a message
                      </h3>
                      <p className="mt-1 text-[11px] text-navy-500">
                        Share a little context — it helps me reply well.
                      </p>
                    </div>
                    <span className="rounded-full border border-jade-600/20 bg-jade-50 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-jade-700">
                      Accepting invitations
                    </span>
                  </div>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="mb-1.5 block text-[9px] font-semibold uppercase tracking-[0.18em] text-navy-500"
                      >
                        Your name <span className="text-gold-600">*</span>
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        value={form.name}
                        onChange={update("name")}
                        placeholder="Full name"
                        className="w-full rounded-lg border border-navy-900/12 bg-ivory/60 px-3.5 py-2.5 text-[12.5px] text-navy-950 placeholder:text-navy-400/70 transition-colors focus:border-gold-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-400/25"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="mb-1.5 block text-[9px] font-semibold uppercase tracking-[0.18em] text-navy-500"
                      >
                        Email address <span className="text-gold-600">*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        value={form.email}
                        onChange={update("email")}
                        placeholder="you@institution.edu"
                        className="w-full rounded-lg border border-navy-900/12 bg-ivory/60 px-3.5 py-2.5 text-[12.5px] text-navy-950 placeholder:text-navy-400/70 transition-colors focus:border-gold-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-400/25"
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <label
                      htmlFor="contact-subject"
                      className="mb-1.5 block text-[9px] font-semibold uppercase tracking-[0.18em] text-navy-500"
                    >
                      Reason for reaching out
                    </label>
                    <div className="relative">
                      <select
                        id="contact-subject"
                        name="subject"
                        value={form.subject}
                        onChange={update("subject")}
                        className="w-full appearance-none rounded-lg border border-navy-900/12 bg-ivory/60 px-3.5 py-2.5 pr-10 text-[12.5px] text-navy-950 transition-colors focus:border-gold-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-400/25"
                      >
                        {subjects.map((subject) => (
                          <option key={subject} value={subject}>
                            {subject}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        className="pointer-events-none absolute right-3.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-navy-400"
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  <div className="mt-4 flex-1">
                    <label
                      htmlFor="contact-message"
                      className="mb-1.5 block text-[9px] font-semibold uppercase tracking-[0.18em] text-navy-500"
                    >
                      Message <span className="text-gold-600">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={update("message")}
                      placeholder="Tell me about the collaboration, invitation or idea…"
                      className="min-h-[7.5rem] w-full resize-y rounded-lg border border-navy-900/12 bg-ivory/60 px-3.5 py-2.5 text-[12.5px] leading-relaxed text-navy-950 placeholder:text-navy-400/70 transition-colors focus:border-gold-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-400/25"
                    />
                  </div>

                  <div className="mt-5 flex flex-col gap-3 border-t border-navy-900/8 pt-5 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-[10px] leading-relaxed text-navy-400">
                      Opens a draft in your email app. No data is stored on this site.
                    </p>
                    <button
                      type="submit"
                      className="group inline-flex items-center justify-center gap-2 rounded-full bg-navy-950 px-5 py-3 text-[12px] font-semibold text-ivory transition-all duration-300 hover:bg-navy-900 hover:shadow-[0_14px_30px_-18px_rgba(7,25,38,0.9)]"
                    >
                      Send message
                      <Send
                        className="h-3.5 w-3.5 text-gold-300 transition-transform duration-300 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <p className="mt-7 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-navy-400">
            <span>Prefer a direct note?</span>
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-1.5 font-medium text-navy-700 transition-colors hover:text-gold-700"
            >
              Write to {profile.email}
              <ArrowRight
                className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
