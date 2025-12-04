import React, { useMemo, useState } from 'react';
import { FiCircle } from 'react-icons/fi';

const FILTERS = ['All', 'Visual Design', 'Development', 'Branding'];

const PROJECTS = [
  {
    id: 'p1',
    title: 'Dynamic Portfolio Showcase',
    year: 2023,
    category: 'Visual Design',
    image:
      'https://cdn-ildpepj.nitrocdn.com/KSAaxJbLRRJyJTBCMtGcnbqPENvPMRUS/assets/images/optimized/rev-cebaa03/limon.com.bd/wp-content/uploads/2025/01/Portfolio-Img-1.png',
  },
  {
    id: 'p2',
    title: 'ECommerce Plus',
    year: 2023,
    category: 'Development',
    image:
      'https://cdn-ildpepj.nitrocdn.com/KSAaxJbLRRJyJTBCMtGcnbqPENvPMRUS/assets/images/optimized/rev-cebaa03/limon.com.bd/wp-content/uploads/2025/01/Portfolio-Img-2.png',
  },
  {
    id: 'p3',
    title: 'EdConnect Platform',
    year: 2023,
    category: 'Development',
    image:
      'https://cdn-ildpepj.nitrocdn.com/KSAaxJbLRRJyJTBCMtGcnbqPENvPMRUS/assets/images/optimized/rev-cebaa03/limon.com.bd/wp-content/uploads/2025/02/Porject-Imgg.png',
  },
  {
    id: 'p4',
    title: 'EventPro Organizer',
    year: 2023,
    category: 'Branding',
    image:
      'https://cdn-ildpepj.nitrocdn.com/KSAaxJbLRRJyJTBCMtGcnbqPENvPMRUS/assets/images/optimized/rev-cebaa03/limon.com.bd/wp-content/uploads/2025/01/Portfolio-Img-4.png',
  },
  {
    id: 'p5',
    title: 'HealthCare Hub',
    year: 2023,
    category: 'Visual Design',
    image:
      'https://cdn-ildpepj.nitrocdn.com/KSAaxJbLRRJyJTBCMtGcnbqPENvPMRUS/assets/images/optimized/rev-cebaa03/limon.com.bd/wp-content/uploads/2025/01/Project-Pic-6.png',
  },
  {
    id: 'p6',
    title: 'TechNova Solutions',
    year: 2024,
    category: 'Branding',
    image:
      'https://cdn-ildpepj.nitrocdn.com/KSAaxJbLRRJyJTBCMtGcnbqPENvPMRUS/assets/images/optimized/rev-cebaa03/limon.com.bd/wp-content/uploads/2025/01/Project-Pic.png',
  },
];

export default function Project() {
  const [active, setActive] = useState('All');

  const visible = useMemo(() => {
    if (active === 'All') return PROJECTS;
    return PROJECTS.filter(p => p.category === active);
  }, [active]);

  return (
    <section className="bg-neutral-950 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Heading */}
        <h2 className="text-center text-[44px] leading-none font-extrabold tracking-[0.06em] md:text-[96px] md:tracking-[0.12em] uppercase">
          Projects
        </h2>

        {/* Filters */}
        <div className="mt-8 mb-6 flex items-center gap-6 text-sm text-neutral-400">
          {FILTERS.map(f => {
            const isActive = f === active;
            return (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`relative pb-1 transition-colors ${
                  isActive ? 'text-white' : 'hover:text-neutral-200'
                }`}
              >
                {f}
                <span
                  className={`absolute left-0 -bottom-0.5 h-[2px] rounded-full transition-all ${
                    isActive ? 'w-full bg-white' : 'w-0 bg-transparent'
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {visible.map(p => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const { title, year, image } = project;

  return (
    <div className="group relative rounded-2xl border border-neutral-800 bg-neutral-900/50 p-4 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur transition hover:-translate-y-1 hover:border-neutral-700 hover:shadow-[0_14px_40px_rgba(0,0,0,0.45)]">
      {/* Small corner accents */}
      <span className="pointer-events-none absolute right-1.5 bottom-1.5 h-1.5 w-1.5 rounded-full bg-neutral-700 group-hover:bg-neutral-500 transition" />

      {/* Top meta row */}
      <div className="mb-2 flex items-center justify-between px-1">
        <div className="flex items-center gap-2 text-[11px] text-neutral-300">
          <FiCircle className="h-3 w-3 text-lime-500" />
          <span className="truncate">↳ {title}</span>
        </div>
        <span className="rounded-full border border-neutral-700 px-2 py-[2px] text-[10px] text-neutral-300">
          {year}
        </span>
      </div>

      {/* Image (bigger) */}
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={image}
          alt={title}
          className="w-full h-64 sm:h-72 md:h-80 lg:h-[22rem] object-cover transition duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
    </div>
  );
}