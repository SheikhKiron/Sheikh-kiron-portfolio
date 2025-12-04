// EducationPage.jsx
import React from 'react';

const defaultItems = [
  {
    left: 'Tejgaon College, Dhaka',
    rightMain: 'BSc (Hons) in CSE',
    rightSub: '1st Year — Running',
  },
  {
    left: 'Navaran College',
    rightMain: 'HSC — Science',
    rightSub: 'Passed',
  },
  {
    left: 'Benapole High School',
    rightMain: 'SSC — Science',
    rightSub: 'Passed',
  },
];

const Pill = ({ children = 'EDUCATION' }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-neutral-700 bg-neutral-900 px-3.5 py-1 text-[11px] uppercase tracking-[0.16em] text-neutral-300">
    <span className="h-2 w-2 rounded-full bg-lime-400 shadow-[0_0_8px_rgba(163,230,53,0.8)]" />
    {children}
  </span>
);

const EducationRow = ({ left, rightMain, rightSub }) => (
  <div className="border-b border-neutral-800 py-6 last:border-none">
    <div className="grid grid-cols-[1fr_auto] gap-x-8 gap-y-1 items-start">
      <div className="text-lg sm:text-[18px] font-medium text-neutral-100">
        {left}
      </div>
      <div className="text-right text-neutral-300">{rightMain}</div>
      <div className="col-start-2 text-right text-[18px] text-neutral-500">
        {rightSub}
      </div>
    </div>
  </div>
);

export default function EducationPage({
  items = defaultItems,
  badgeText = 'Education',
  heading = 'My Educational Background',
}) {
  return (
    <section className="bg-black text-neutral-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 text-[18px] md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Left Title */}
          <div>
            <Pill>{badgeText}</Pill>
            <h1 className="mt-4 font-semibold tracking-tight leading-none text-[clamp(36px,6vw,88px)] text-white">
              {heading.split(' ').slice(0, 2).join(' ')}
              <br />
              {heading.split(' ').slice(2).join(' ')}
            </h1>
          </div>

          {/* Right Education List */}
          <div className="max-w-2xl w-full">
            {items.map((item, i) => (
              <EducationRow key={i} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
