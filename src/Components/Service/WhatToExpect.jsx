import { FaAsterisk } from 'react-icons/fa';
import { PiTreeStructureFill } from 'react-icons/pi';
import { MdSupportAgent } from 'react-icons/md';

const expectations = [
  {
    icon: <FaAsterisk className="text-lime-400 text-3xl" />,
    title: 'Personalized Approach',
    desc: 'Every project is unique, and I tailor my approach to fit your specific needs and goals.',
  },
  {
    icon: <PiTreeStructureFill className="text-lime-400 text-3xl" />,
    title: 'Clear Communication',
    desc: 'I keep you informed at every stage of the process and provide you regular updates.',
  },
  {
    icon: <MdSupportAgent className="text-lime-400 text-3xl" />,
    title: 'After Support',
    desc: 'My commitment to your success doesn’t end at launch. I provide after launch support.',
  },
];

export default function WhatToExpect() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Subtitle */}
        <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1 shadow-sm">
          <span className="w-2 h-2 bg-lime-400 rounded-full"></span>
          <span className="text-sm font-medium text-gray-700">
            MY PHILOSOPHY
          </span>
        </div>

        {/* Title */}
        <h2 className="text-6xl font-semibold text-gray-900 mt-6 mb-12">
          What to Expect
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {expectations.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-black rounded-full mb-6">
                {item.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
