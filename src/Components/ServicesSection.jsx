import React from 'react';

const services = [
  {
    icon: '💡', // You can replace with an SVG or <img src="..." />
    title: 'Web Design',
    description:
      'Creating visually stunning and user-friendly websites is at the heart of what I do.',
    features: [
      'Custom Tailored Design',
      'Responsive Layouts',
      'Custom Tailored Design',
    ],
    color: 'bg-lime-400',
    textColor: 'text-black',
  },
  {
    icon: '⚙️',
    title: 'Development',
    description:
      'I bring your designs to life with clean, efficient, and high-performing code.',
    features: [
      'HTML, CSS, & JS Expertise',
      'React JS, Node JS, MongoDB & Express JS',
      'WORDPRESS',
      'Cross-Browser Compatibility',
      'Faster Load Times',
    ],
    color: 'bg-neutral-900',
    textColor: 'text-white',
  },
  {
    icon: '🎨',
    title: 'Brand Identity',
    description:
      'Building a strong brand identity is essential for standing out in a crowded market.',
    features: ['Logo Design', 'Cohesive Color Palettes', 'Brand Guidelines'],
    color: 'bg-white',
    textColor: 'text-black',
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-neutral-950 text-white py-20 flex flex-col items-center">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-black border border-lime-400 px-3 py-1 rounded-full text-sm">
          <span className="h-2 w-2 bg-lime-400 rounded-full"></span>
          <span>WHAT I OFFER</span>
        </div>
        <h2 className="text-5xl md:text-6xl font-bold mt-6 leading-tight">
          Empowering Brands <br /> Through Design
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-8 max-w-6xl w-full justify-center px-6">
        {services.map((service, index) => (
          <div
            key={index}
            className={`${service.color} ${service.textColor} rounded-2xl p-8 flex flex-col justify-between flex-1 transition-transform hover:scale-[1.02]`}
          >
            <div>
              {/* Logo/Icon */}
              <div className="text-4xl mb-4">{service.icon}</div>

              <h3 className="text-4xl font-semibold mb-3">{service.title}</h3>
              <p className="text-[17px] opacity-80 mb-6">{service.description}</p>

              <ul className="space-y-2 text-sm border-t border-neutral-700/30 pt-4">
                {service.features.map((feature, i) => (
                  <li key={i} className="border-b text-[16px] border-neutral-700/30 pb-2">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <button className="mt-8 bg-lime-300 text-black px-5 py-2 rounded-full text-sm font-medium flex items-center justify-center gap-2 hover:bg-lime-200 transition">
              ↳ Schedule a consultation
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
