import React from 'react';

const steps = [
  {
    number: '1.',
    title: 'Discovery',
    description:
      'I dive deep into understanding your brand, goals, and target audience. Through detailed consultations and research, I gather essential insights that inform the entire design process.',
  },
  {
    number: '2.',
    title: 'Design',
    description:
      'I begin crafting visually compelling and strategic designs. This step focuses on translating ideas into tangible visual concepts that align with your brand.',
  },
  {
    number: '3.',
    title: 'Development',
    description:
      'I transform the visuals into a fully functional website. This phase involves meticulous coding and integration to ensure your site is responsive and performs seamlessly across devices.',
  },
  {
    number: '4.',
    title: 'Launch',
    description:
      'I rigorously test the website to ensure everything functions flawlessly before going live. Post-launch, I provide support and guidance to help you maximize your new online presence.',
  },
];

const MyProcess = () => {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* Left side */}
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-white border border-gray-200 rounded-full mb-6 shadow-sm">
            <span className="w-2 h-2 bg-lime-500 rounded-full"></span>
            <span className="text-sm font-medium text-gray-700">
              MY PROCESS
            </span>
          </div>

          <h2 className="text-6xl font-bold text-gray-900 leading-tight mb-8">
            My Creative <br /> Workflow
          </h2>

          <button className="px-6 py-2 bg-lime-500 text-black font-medium rounded-full hover:bg-lime-400 transition-all">
            ↳ Schedule a consultation
          </button>
        </div>

        {/* Right side */}
        <div className="space-y-10">
          {steps.map((step, i) => (
            <div key={i} className="pb-6 border-b border-gray-300">
              <h3 className="text-4xl font-semibold text-gray-900 mb-2">
                {step.number} {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyProcess;
