// MyWorldSection.jsx
import React from 'react';
import kiron from '../assets/kiron.png';

const defaultPhotos = [
  {
    src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop',
    alt: 'Colorful houses by a fjord with mountains',
  },
  { src: kiron, alt: 'Portrait photo' },
  {
    src: 'https://cdn-ildpepj.nitrocdn.com/KSAaxJbLRRJyJTBCMtGcnbqPENvPMRUS/assets/images/optimized/rev-cebaa03/limon.com.bd/wp-content/uploads/2025/01/Travel-Img-3.png',
    alt: 'Outdoor brunch table with mountains in the background',
  },
  {
    src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
    alt: 'Rocky beach at colorful sunset',
  },
];

const Pill = ({ children = 'MY WORLD' }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-neutral-900/60 px-3.5 py-1 text-[11px] uppercase tracking-[0.16em] text-white/80">
    <span className="h-2 w-2 rounded-full bg-lime-400 shadow-[0_0_10px_rgba(163,230,53,0.8)]" />
    {children}
  </span>
);

const PhotoCard = ({ src, alt }) => (
  <div className="group relative w-full overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/60 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.5)]">
    {/* same aspect ratio for all cards */}
    <div className="aspect-[3/4]">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10 group-hover:ring-lime-300/40 transition-all" />
  </div>
);

export default function MyWorldSection({
  tag = 'MY WORLD',
  line1 = 'When I am not Working',
  line2 = 'I am Travelling',
  photos = defaultPhotos,
}) {
  return (
    <section className="bg-neutral-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="text-center">
          <Pill>{tag}</Pill>
          <h2 className="mt-4 font-semibold tracking-tight leading-[1.05] text-[clamp(36px,6vw,80px)]">
            {line1}
            <span className="block mt-1">{line2}</span>
          </h2>
        </div>

        {/* Gallery */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6 items-stretch">
          {photos.map((p, i) => (
            <PhotoCard key={i} src={p.src} alt={p.alt} />
          ))}
        </div>
      </div>
    </section>
  );
}
