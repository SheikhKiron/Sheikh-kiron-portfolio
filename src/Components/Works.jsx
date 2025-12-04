import React from 'react';
import { FaLeaf, FaStarOfLife, FaCrosshairs } from 'react-icons/fa';

const features = [
  {
    icon: <FaLeaf className="text-lime-500 text-3xl" />,
    title: 'Tailored Design',
    description:
      'I believe that every brand is unique and deserves a website that is just as distinctive.',
  },
  {
    icon: <FaCrosshairs className="text-lime-500 text-3xl" />,
    title: 'User-Centric Approach',
    description:
      'With a strong focus on user experience, I design websites that are intuitive and easy to navigate.',
  },
  {
    icon: <FaStarOfLife className="text-lime-500 text-3xl" />,
    title: 'Trending Technologies',
    description:
      'I stay at the forefront of web design trends and technologies to offer you the most innovative solutions.',
  },
];

const Works = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <span className="text-sm font-medium bg-white text-gray-900 px-4 py-1 rounded-full border border-gray-200 inline-flex items-center gap-2 mb-4 shadow-sm">
          <span className="w-2 h-2 bg-lime-500 rounded-full"></span>
          WHY CHOOSE ME
        </span>
        <h2 className="text-5xl font-bold text-gray-900 mb-12">
          Why Work with Me
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-left"
            >
              <div className="bg-black w-12 h-12 rounded-full flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
