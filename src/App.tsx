import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Awards from "./components/Awards";
import Research from "./components/Research";
import Gallery from "./components/Gallery";
import Leadership from "./components/Leadership";
import Sustainability from "./components/Sustainability";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { cn } from "./utils/cn";

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? Math.min(1, window.scrollY / scrollable) : 0);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-[2px] bg-transparent" aria-hidden="true">
      <div
        className="h-full origin-left bg-gradient-to-r from-gold-500 via-gold-300 to-gold-400 transition-[width] duration-150 ease-out"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
}

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => setVisible(window.scrollY > 900);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={cn(
        "fixed bottom-5 right-5 z-40 inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold-400/40 bg-navy-950 text-gold-300 shadow-[0_12px_28px_-12px_rgba(7,25,38,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy-900 sm:bottom-6 sm:right-6",
        visible ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      )}
    >
      <ArrowUp className="h-4 w-4" aria-hidden="true" />
    </button>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-ivory">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-navy-950 focus:px-5 focus:py-3 focus:text-sm focus:font-medium focus:text-ivory"
      >
        Skip to main content
      </a>

      <ScrollProgress />
      <Navbar />

      <main id="main">
        <Hero />
        <About />
        <Awards />
        <Research />
        <Gallery />
        <Leadership />
        <Sustainability />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
