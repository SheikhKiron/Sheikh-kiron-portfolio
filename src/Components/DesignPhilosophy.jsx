import React from 'react';
import { FiCheckCircle, FiAward, FiCode } from 'react-icons/fi';
// Optional: PHP icon use korte chaile
// import { FaPhp } from 'react-icons/fa';

export default function DesignPhilosophy() {
  const features = [
    'Crafting Purposeful Experiences',
    'User-Centric Approach',
    'Innovation and Adaptability',
    'Collaboration and Communication',
  ];

  const cards = [
    { title: 'Design Guru', desc: 'Excellence in Design', icon: FiAward },
    {
      title: 'CSS Design Award',
      desc: 'Awarded for excellence in crafting visually',
      icon: FiAward,
    },
    { title: 'JS Design Award', desc: 'JS Champion', icon: FiAward },
    // PHP card-e FaPhp dite chaile: icon: FaPhp
    {
      title: 'MERN Stack Development',
      desc: 'Recognized for building robust solutions',
      icon: FiCode,
    },
  ];

  return (
    <section className="bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left: Badge + Title */}
          <div>
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-gray-600 shadow-sm dark:border-neutral-800 dark:bg-neutral-900 dark:text-gray-300">
                <span className="h-1.5 w-1.5 rounded-full bg-lime-500 shadow-[0_0_0_3px_#ecfccb]" />
                Experience
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-gray-900 dark:text-white leading-[1.06]">
              My Design
              <br className="hidden md:block" />
              Philosophy
            </h1>
          </div>

          {/* Right: Copy + Feature list */}
          <div>
            <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed">
              I believe great design isn’t just about aesthetics—it’s about
              building meaningful connections between brands and people. I keep
              learning and iterating so my designs not only look great but also
              deliver results.
            </p>

            <ul className="mt-6 space-y-3">
              {features.map(item => (
                <li key={item} className="flex items-start gap-3">
                  <FiCheckCircle className="h-5 w-5 text-lime-600 mt-0.5 shrink-0" />
                  <span className="text-gray-900 dark:text-gray-100 font-medium">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {cards.map(({ title, desc, icon: Icon }) => (
            <div
              key={title}
              className="rounded-2xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.10)] transition-shadow"
            >
              <div className="grid grid-cols-[2.5rem_1fr] gap-4 items-start">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gray-900 text-white dark:bg-white dark:text-black">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    {desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
