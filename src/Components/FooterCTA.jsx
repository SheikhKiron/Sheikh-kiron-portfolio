// FooterCTA.jsx
import React from 'react';

export default function FooterCTA({
  name = 'Sheikh Kiron',
  email = 'sheikhkiron59@gmail.com',
  year = new Date().getFullYear(),
  pillText = 'Have project in mind?',
}) {
  return (
    <footer className="bg-neutral-950 text-white">
      {/* Center CTA card */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div className="rounded-2xl border border-white/10 bg-neutral-900/70 p-10 sm:p-12 md:p-16 text-center shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-neutral-800/60 px-3.5 py-1.5 text-[11px] uppercase tracking-[0.18em] text-white/80">
            <span className="h-1.5 w-1.5 text-[18px] rounded-full bg-lime-400 shadow-[0_0_10px_2px_rgba(163,230,53,0.7)]" />
            {pillText}
          </span>

          <h2 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.1] tracking-tight">
            Let’s Turn your Ideas
            <span className="block mt-2">into Reality</span>
          </h2>

          <a
            href={`mailto:${email}`}
            className="group mt-8 inline-flex items-center gap-2 text-lg md:text-xl text-white/90 transition-colors underline underline-offset-8 decoration-white/20 hover:text-lime-400 hover:decoration-lime-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-400/60 rounded"
          >
            <span className="opacity-80 transition-transform group-hover:translate-x-0.5">
              ↳
            </span>
            <span>{email}</span>
          </a>
        </div>
      </div>

      {/* Divider + copyright */}
      <div className="border-t border-white/10" />
      <div className="py-4 text-center text-[18px]  text-white/60">
        {name}. All Rights Reserved. ©{year}
      </div>
    </footer>
  );
}
