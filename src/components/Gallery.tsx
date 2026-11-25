import { useState, useMemo, useEffect } from "react";
import { Camera, ChevronLeft, ChevronRight, Sparkles, X, ZoomIn } from "lucide-react";
import { galleryCategories, galleryItems, type GalleryCategory, type GalleryItem } from "../data";
import { Reveal, SectionHeading, Tag } from "./primitives";
import { cn } from "../utils/cn";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("All");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") return galleryItems;
    return galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const counts = useMemo(() => {
    return galleryCategories.reduce<Record<string, number>>((acc, cat) => {
      acc[cat] =
        cat === "All"
          ? galleryItems.length
          : galleryItems.filter((item) => item.category === cat).length;
      return acc;
    }, {});
  }, []);

  // Lightbox keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedItem) return;
      if (e.key === "Escape") setSelectedItem(null);
      if (e.key === "ArrowRight") {
        const currentIndex = filteredItems.findIndex((it) => it.id === selectedItem.id);
        const nextIndex = (currentIndex + 1) % filteredItems.length;
        setSelectedItem(filteredItems[nextIndex]);
      }
      if (e.key === "ArrowLeft") {
        const currentIndex = filteredItems.findIndex((it) => it.id === selectedItem.id);
        const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
        setSelectedItem(filteredItems[prevIndex]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedItem, filteredItems]);

  // Lock background scroll when lightbox is open
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedItem]);

  return (
    <section id="gallery" className="relative overflow-hidden bg-sand/60 py-20 sm:py-24 lg:py-28">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 paper-texture opacity-60" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -left-20 top-24 h-[400px] w-[400px] rounded-full bg-gold-200/25 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-0 bottom-10 h-[360px] w-[360px] rounded-full bg-jade-200/20 blur-[130px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <SectionHeading
            index="04"
            eyebrow="Photo Archive & Evidence"
            title={
              <>
                Glimpses of Achievements in{" "}
                <em className="font-normal italic text-gold-700">Research & Academia</em>.
              </>
            }
            description="Visual archive documenting national award ceremonies, ISRO leadership interactions, CeNSE IISc cleanroom facilities, conference presentations, and student mentorship."
          />

          <Reveal delay={100}>
            <div
              className="flex flex-wrap gap-2 lg:justify-end"
              role="group"
              aria-label="Filter gallery by category"
            >
              {galleryCategories.map((category) => {
                const isSelected = activeCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    aria-pressed={isSelected}
                    className={cn(
                      "inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-[11.5px] font-medium transition-all duration-300",
                      isSelected
                        ? "border-navy-950 bg-navy-950 text-ivory shadow-[0_10px_22px_-14px_rgba(7,25,38,0.8)]"
                        : "border-navy-900/15 bg-white/80 text-navy-600 hover:border-navy-900/30 hover:bg-white hover:text-navy-950"
                    )}
                  >
                    {category}
                    <span
                      className={cn(
                        "text-[9.5px] tabular-nums",
                        isSelected ? "text-gold-300" : "text-navy-400"
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

        {/* Gallery Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredItems.map((item, index) => (
            <Reveal key={item.id} delay={Math.min(index * 60, 360)}>
              <article
                onClick={() => setSelectedItem(item)}
                className="card-lift group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-navy-900/12 bg-white shadow-[0_12px_28px_-20px_rgba(7,25,38,0.35)] transition-all duration-300 hover:border-gold-500/60 hover:shadow-[0_22px_45px_-24px_rgba(7,25,38,0.45)]"
              >
                {/* Photo container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-navy-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40"
                    aria-hidden="true"
                  />
                  {item.badge && (
                    <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full border border-white/20 bg-navy-950/80 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.15em] text-gold-300 backdrop-blur-md">
                      <Sparkles className="h-2.5 w-2.5" />
                      {item.badge}
                    </span>
                  )}
                  <span className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-navy-900 opacity-0 shadow-md backdrop-blur transition-all duration-300 group-hover:opacity-100">
                    <ZoomIn className="h-4 w-4" />
                  </span>
                </div>

                {/* Card text */}
                <div className="flex flex-1 flex-col p-4 sm:p-5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-700">
                      {item.category}
                    </span>
                    <span className="rounded-md bg-navy-50 px-2 py-0.5 text-[10px] font-medium text-navy-500">
                      {item.year}
                    </span>
                  </div>
                  <h3 className="mt-2.5 font-display text-[1.12rem] font-medium leading-snug text-navy-950 group-hover:text-gold-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 flex-1 text-[11.5px] leading-relaxed text-navy-600">
                    {item.caption}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Bottom indicator */}
        <Reveal delay={150}>
          <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-navy-900/10 pt-6 text-[11.5px] text-navy-500 sm:flex-row">
            <p className="flex items-center gap-2">
              <Camera className="h-4 w-4 text-gold-600" />
              Showing {filteredItems.length} of {galleryItems.length} verified photographic records
            </p>
            <p className="italic">Click any image to view in high resolution with full documentation.</p>
          </div>
        </Reveal>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-950/95 p-4 backdrop-blur-xl sm:p-6 lg:p-10"
          role="dialog"
          aria-modal="true"
          aria-label={selectedItem.title}
        >
          {/* Backdrop click to close */}
          <div
            className="absolute inset-0 cursor-pointer"
            onClick={() => setSelectedItem(null)}
            aria-hidden="true"
          />

          {/* Modal Container */}
          <div className="relative z-10 flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-white/15 bg-navy-900 shadow-2xl">
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5 sm:px-6">
              <div className="flex items-center gap-2.5">
                <Tag tone="gold">{selectedItem.badge || selectedItem.category}</Tag>
                <span className="text-[11px] font-medium text-navy-300">{selectedItem.year}</span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                aria-label="Close photo preview"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-navy-300 transition-colors hover:bg-white/10 hover:text-ivory"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Image Preview */}
            <div className="relative flex flex-1 items-center justify-center overflow-hidden bg-navy-950/80 p-3 sm:p-6">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="max-h-[60vh] w-auto max-w-full rounded-lg object-contain shadow-lg"
              />

              {/* Prev / Next controls */}
              <button
                type="button"
                aria-label="Previous photo"
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIndex = filteredItems.findIndex((it) => it.id === selectedItem.id);
                  const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
                  setSelectedItem(filteredItems[prevIndex]);
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-navy-950/70 text-ivory shadow-lg backdrop-blur transition-transform hover:scale-110 hover:bg-navy-950"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                aria-label="Next photo"
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIndex = filteredItems.findIndex((it) => it.id === selectedItem.id);
                  const nextIndex = (currentIndex + 1) % filteredItems.length;
                  setSelectedItem(filteredItems[nextIndex]);
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-navy-950/70 text-ivory shadow-lg backdrop-blur transition-transform hover:scale-110 hover:bg-navy-950"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* Bottom Caption */}
            <div className="border-t border-white/10 bg-navy-950 px-5 py-4 sm:px-6">
              <h4 className="font-display text-[1.25rem] leading-snug text-ivory">
                {selectedItem.title}
              </h4>
              <p className="mt-1 text-[12.5px] leading-relaxed text-navy-200">
                {selectedItem.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

