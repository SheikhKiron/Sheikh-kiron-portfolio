// ExperiencePage.jsx
import React from 'react';

const defaultItems = [

  {
    left: 'Rupantar Potidin',
    rightMain: 'Sub Editor',
    rightSub: 'Jun 2025 - Now',
  },
  {
    left: 'Web Developer',
    rightMain: 'WebZoneKiron',
    rightSub: 'Aug 2023 - Now',
  },
  {
    left: 'Professional Training Institute',
    rightMain: 'Freelance',
    rightSub: 'Jan 2021 - June 2024',
  },
];

const Pill = ({ children = 'EXPERIENCE' }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-3.5 py-1 text-[11px] uppercase tracking-[0.16em] text-neutral-700">
    <span className="h-2 w-2 rounded-full bg-lime-400 shadow-[0_0_8px_rgba(163,230,53,0.8)]" />
    {children}
  </span>
);

const ExperienceRow = ({ left, rightMain, rightSub }) => (
  <div className="border-b border-neutral-200 py-6 last:border-none">
    <div className="grid grid-cols-[1fr_auto] gap-x-8 gap-y-1 items-start">
      <div className="text-lg sm:text-[18px] font-medium text-neutral-900">
        {left}
      </div>
      <div className="text-right text-neutral-700">{rightMain}</div>
      <div className="col-start-2 text-right text-[18px] text-neutral-500">
        {rightSub}
      </div>
    </div>
  </div>
);

export default function ExperiencePage({
  items = defaultItems,
  badgeText = 'Experience',
  heading = 'My Work Experience',
}) {
  return (
    <section className="bg-neutral-50 text-neutral-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 text-[18px] md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Left: Title */}
          <div>
            <Pill>{badgeText}</Pill>
            <h1 className="mt-4 font-semibold tracking-tight leading-none text-[clamp(36px,6vw,88px)]">
              {heading.split(' ').slice(0, 2).join(' ')}
              <br />
              {heading.split(' ').slice(2).join(' ')}
            </h1>
          </div>

          {/* Right: Experience list */}
          <div className="max-w-2xl w-full">
            {items.map((item, i) => (
              <ExperienceRow key={i} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
