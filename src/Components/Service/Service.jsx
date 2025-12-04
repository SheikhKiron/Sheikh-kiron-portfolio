import React from 'react';

const SERVICES = [
  {
    title: 'Web Design',
    copy: "Web design is more than just aesthetics; it's about marrying form with function to create a seamless user experience that captivates and converts. My web design services focus on building responsive, engaging, and visually appealing websites that reflect your brand’s essence.",
    features: ['Custom Tailored Design', 'Responsive Layouts', 'UX/UI Design'],
    price: 799,
    image:
      'https://cdn-ildpepj.nitrocdn.com/KSAaxJbLRRJyJTBCMtGcnbqPENvPMRUS/assets/images/optimized/rev-cebaa03/limon.com.bd/wp-content/uploads/2025/01/Portfolio-Img-1.png',
  },
  {
    title: 'Development',
    copy: 'Front‑end development brings your website to life—turning designs into fast, accessible, and scalable experiences. I write clean, maintainable code and optimize for performance across devices and browsers.',
    features: [
      'HTML, CSS, JS Expertise',
      'Cross‑Browser Compatibility',
      'Fast Load Times',
    ],
    price: 950,
    image:
      'https://cdn-ildpepj.nitrocdn.com/KSAaxJbLRRJyJTBCMtGcnbqPENvPMRUS/assets/images/optimized/rev-cebaa03/limon.com.bd/wp-content/uploads/2025/01/Portfolio-Img-2.png',
  },
  {
    title: 'Brand Identity',
    copy: 'A strong brand identity builds trust and recognition. From logo systems to brand guidelines, I craft cohesive visuals that communicate clearly and stay consistent across every touchpoint.',
    features: ['Logo Design', 'Cohesive Color Palettes', 'Brand Guidelines'],
    price: 1050,
    image:
      'https://cdn-ildpepj.nitrocdn.com/KSAaxJbLRRJyJTBCMtGcnbqPENvPMRUS/assets/images/optimized/rev-cebaa03/limon.com.bd/wp-content/uploads/2025/01/Project-Pic-6.png',
  },
];

export default function Service() {
  return (
    <section className="bg-neutral-950 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Big heading */}
        <h2 className="text-center uppercase font-extrabold leading-none tracking-[0.1em] text-[50px] md:text-[140px]">
          Services
        </h2>

        {/* Cards */}
        <div className="mt-12 space-y-6">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.title} service={s} imageRight />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, imageRight = true }) {
  const { title, copy, features, price, image } = service;

  return (
    <div className="rounded-3xl border border-neutral-800 bg-neutral-900/60 shadow-[0_12px_40px_rgba(0,0,0,0.45)] backdrop-blur px-5 py-6 sm:p-8 md:p-10">
      <div
        className={`grid items-center gap-8 md:gap-12 ${
          imageRight ? 'md:grid-cols-[1fr_520px]' : 'md:grid-cols-[520px_1fr]'
        }`}
      >
        {/* Text side */}
        <div className={`${imageRight ? '' : 'md:order-2'}`}>
          <h3 className="text-3xl md:text-4xl font-semibold">{title}</h3>

          <p className="mt-4 text-[15px] leading-6 text-neutral-300">{copy}</p>

          <ul className="mt-6">
            {features.map(f => (
              <li
                key={f}
                className="border-b border-neutral-700/80 py-3 md:py-4"
              >
                <span className="block text-[14.5px] sm:text-[15px] text-neutral-200">
                  {f}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-5">
            <span className="inline-flex items-center rounded-full bg-lime-500 px-4 py-2 text-sm font-semibold text-black shadow-[0_6px_20px_rgba(132,204,22,0.4)] hover:bg-lime-300">
              Starting Price: ${price}
            </span>
          </div>
        </div>

        {/* Image side (large, rounded) */}
        <div
          className={`${
            imageRight ? '' : 'md:order-1'
          } justify-self-end w-full`}
        >
          <div className="mx-auto w-full">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={image}
                alt={title}
                className="h-[260px] w-full object-cover sm:h-[300px] md:h-[340px] lg:h-[360px]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
