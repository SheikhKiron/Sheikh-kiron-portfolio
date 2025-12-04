// StatsTestimonials.jsx
import React from 'react';

const stats = [
  {
    value: '04+',
    title: 'Years of Experience',
    desc: 'Decades of experience in delivering exceptional projects.',
  },
  {
    value: '30+',
    title: 'Projects Delivered',
    desc: 'Decades of experience in delivering exceptional projects.',
  },
  {
    value: '98%',
    title: 'Client Satisfaction',
    desc: 'I build long-term partnerships through proven results.',
  },
];

const testimonials = [
  {
    quote:
      'Working with Sheikh Kiron was a game-changer for our online presence. The new website exceeded our expectations in both design and functionality.',
    name: 'Jerome Bell',
    title: 'CTO, Waverlo',
    avatar: 'https://i.pravatar.cc/64?img=32',
    tone: 'dark', // dark card
  },
  {
    quote:
      'Sheikh Kiron delivered a stunning website that truly reflects our brand’s essence. He continuously involves in feedbacks. Highly recommend his expertise!',
    name: 'Wade Warren',
    title: 'Founder, Creuty',
    avatar: 'https://i.pravatar.cc/64?img=14',
    tone: 'light', // white card
  },
];

const StarIcon = ({ className = 'h-4 w-4 text-lime-400' }) => (
  <svg
    viewBox="0 0 20 20"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.134 3.49a1 1 0 00.95.69h3.671c.969 0 1.371 1.24.588 1.81l-2.972 2.16a1 1 0 00-.364 1.118l1.135 3.49c.3.921-.755 1.688-1.54 1.118l-2.972-2.16a1 1 0 00-1.176 0l-2.972 2.16c-.784.57-1.838-.197-1.539-1.118l1.134-3.49a1 1 0 00-.364-1.118L1.656 8.917c-.783-.57-.38-1.81.588-1.81h3.671a1 1 0 00.95-.69l1.134-3.49z" />
  </svg>
);

const Stars = ({ count = 5 }) => (
  <div className="flex items-center gap-1">
    {Array.from({ length: count }).map((_, i) => (
      <StarIcon key={i} />
    ))}
  </div>
);

export default function StatsTestimonials() {
  return (
    <section className="w-full">
      {/* Top stats with lime gradient */}
      <div
        className="text-black"
        style={{
          background: 'linear-gradient(180deg,#86FF3B 0%, #CCFFA1 100%)',
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {stats.map((s, idx) => (
              <div key={idx}>
                <div className="text-5xl md:text-6xl font-semibold tracking-tight">
                  {s.value}
                </div>
                <div className="h-[1px] w-40 bg-black/30 my-3" />
                <div className="font-medium">{s.title}</div>
                <p className="text-sm text-black/70 mt-2 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom dark area with cards */}
      <div className="bg-neutral-950 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Intro card */}
            <div className="rounded-2xl border border-white/10 bg-black p-8 flex flex-col min-h-[360px]">
              <div className="mb-10">
                <h3 className="text-3xl md:text-4xl font-semibold">
                  My Success
                  <br /> Stories
                </h3>
                <p className="text-sm text-white/70 mt-6 leading-relaxed">
                  I take pride in collaborating with a diverse range of clients,
                  from ambitious startups to established enterprises.
                </p>
              </div>

              <div className="mt-auto flex items-center gap-3">
                <img
                  src="https://i.pravatar.cc/64?img=32"
                  alt=""
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div className="text-sm">
                  <div className="font-medium">Jerome Bell</div>
                  <div className="text-white/60">CTO, Waverlo</div>
                </div>
              </div>
            </div>

            {/* Testimonial 1 (dark) */}
            <TestimonialCard {...testimonials[0]} />

            {/* Testimonial 2 (light) */}
            <TestimonialCard {...testimonials[1]} />
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ quote, name, title, avatar, tone = 'light' }) {
  const isLight = tone === 'light';
  return (
    <div
      className={[
        'rounded-2xl p-8 min-h-[360px] flex flex-col',
        isLight
          ? 'bg-white text-neutral-900 shadow-lg'
          : 'bg-neutral-900 text-white border border-white/10',
      ].join(' ')}
    >
      <Stars />

      <p className="mt-5 text-sm leading-relaxed">“{quote}”</p>

      <div
        className={
          isLight ? 'my-6 h-px bg-neutral-200' : 'my-6 h-px bg-white/10'
        }
      />

      <div className="mt-auto flex items-center gap-3">
        <img
          src={avatar}
          alt=""
          className="h-10 w-10 rounded-full object-cover"
        />
        <div className="text-sm">
          <div className="font-medium">{name}</div>
          <div className={isLight ? 'text-neutral-500' : 'text-white/60'}>
            {title}
          </div>
        </div>
      </div>
    </div>
  );
}
