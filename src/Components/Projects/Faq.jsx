import React, { useState } from 'react';
import { FiPlusCircle, FiMinusCircle } from 'react-icons/fi';

const ITEMS = [
  {
    q: 'What services do you offer?',
    a: 'I offer a range of services including web design, front-end development, responsive design, e-commerce solutions, and brand identity creation. Visit my Services page for a detailed overview.',
  },
  {
    q: 'How do you approach a new project?',
    a: 'I offer a range of services including web design, front-end development, UX/UI design, responsive design, e-commerce solutions, and brand identity creation. Visit my Services page for a detailed overview.',
  },
  {
    q: 'What is your project timeline?',
    a: 'I offer a range of services including web design, front-end development, UX/UI design, responsive design, e-commerce solutions, and brand identity creation. Visit my Services page for a detailed overview.',
  },
  {
    q: 'How much do your services cost?',
    a: 'Pricing depends on deliverables and timeline. I can share a tailored quote after a quick discovery call.',
  },
  {
    q: 'What platforms do you work with?',
    a: 'React, Next.js, Tailwind, Shopify, WordPress/Headless, and custom Node/Express APIs as needed.',
  },
];

export default function Faq() {
  const [open, setOpen] = useState(0); // first item open
  const toggle = idx => setOpen(open === idx ? -1 : idx);

  return (
    <section className="bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Badge + Big Title */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-neutral-600 shadow-sm dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300">
              <span className="h-1.5 w-1.5 rounded-full bg-lime-500 shadow-[0_0_0_3px_#ecfccb]" />
              FAQ
            </span>
            <h2 className="mt-6 font-black tracking-tight leading-[0.95] text-neutral-900 dark:text-white text-[48px]  md:text-[90px]">
              Questions &
              <br className="hidden sm:block" />
              Answers
            </h2>
          </div>

          {/* Right: Accordion */}
          <div className="w-full">
            <div className="border-t border-neutral-200 dark:border-neutral-800">
              {ITEMS.map((item, idx) => {
                const isOpen = open === idx;
                return (
                  <div
                    key={item.q}
                    className="border-b border-neutral-200 dark:border-neutral-800"
                  >
                    <button
                      onClick={() => toggle(idx)}
                      className="flex w-full items-center justify-between gap-4 py-5 text-left"
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${idx}`}
                      id={`faq-trigger-${idx}`}
                    >
                      <span className="text-lg md:text-xl font-medium text-neutral-900 dark:text-neutral-100">
                        {item.q}
                      </span>
                      {isOpen ? (
                        <FiMinusCircle className="h-6 w-6 text-neutral-800 dark:text-neutral-300 shrink-0" />
                      ) : (
                        <FiPlusCircle className="h-6 w-6 text-neutral-800 dark:text-neutral-300 shrink-0" />
                      )}
                    </button>

                    {/* Content with smooth collapse */}
                    <div
                      id={`faq-panel-${idx}`}
                      role="region"
                      aria-labelledby={`faq-trigger-${idx}`}
                      className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                        isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                      }`}
                    >
                      <div className="min-h-0 overflow-hidden">
                        <p className="pb-6 pr-2 text-neutral-600 dark:text-neutral-300">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
