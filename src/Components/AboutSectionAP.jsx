// AboutSection.jsx
import React from 'react';
import imag from '../assets/kiron111.png'
export default function AboutSectionAp({
  title = 'ABOUT',
  headingTop = 'Welcome to my',
  headingBottom = 'Creative World',
  imageAlt = 'Profile photo',
  resumeLink = '/resume.pdf',
  resumeText = 'Download Resume',
  description = `It looks like you're interested in getting to know me better. 
I'm Sheikh Kiron, a self‑taught Web Developer with 04+ years 
of experience. I love to work with Mern stack, Bootstrap, WordPress, Elementor, Divi, JavaScript, 
and tailwind. I build professional, responsive websites and ecommerce stores.`,
}) {
  return (
    <section className="bg-neutral-950 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-24">
        {/* Big page title */}
        <h2
          className="text-center font-semibold tracking-tight text-white/90
          text-[clamp(56px,10vw,160px)] leading-none"
        >
          {title}
        </h2>

        {/* Content */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start">
          {/* Image card */}
          <div className="relative rounded-2xl border border-white/10 bg-neutral-900/60 overflow-hidden max-w-[520px] mx-auto md:mx-0">
            <div className="aspect-[4/4]">
              <img
                src={imag}
                alt={imageAlt}
                className="h-full w-full object-cover"
              />
              {/* Color tint overlay */}
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-tr
                from-lime-300/45 via-yellow-300/35 to-cyan-300/45 mix-blend-overlay"
              />
            </div>
          </div>

          {/* Text + CTA */}
          <div className="max-w-xl">
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05] tracking-tight">
              {headingTop}
              <span className="block mt-1">{headingBottom}</span>
            </h3>

            <p className="relative mt-6 text-sm sm:text-[15px] leading-relaxed text-white/80 ps-5">
              <span
                aria-hidden="true"
                className="absolute left-0 top-1 h-5 w-1 rounded bg-white/80"
              />
              {description}
            </p>

            <a
              href="https://drive.google.com/file/d/1Rq-0ssdcJNnPxk0z5YIqUvt3FfVOh352/view?usp=drive_link"
              // target="_blank"
              rel="noreferrer"
              className="group mt-7 inline-flex items-center gap-2 rounded-full
                bg-lime-400 px-4 py-2 text-sm font-medium text-black
                shadow-[0_8px_24px_-8px_rgba(163,230,53,0.6)]
                ring-1 ring-lime-300 transition-transform hover:-translate-y-0.5"
            >
              <span className="grid h-5 w-5 place-items-center rounded-full bg-black/10">
                ↳
              </span>
              {resumeText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
