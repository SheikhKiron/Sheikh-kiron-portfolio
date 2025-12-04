import React from 'react';

const skills = [
  { name: 'HTML', level: 95 },
  { name: 'CSS', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'React.js', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'MongoDB', level: 75 },
  { name: 'Firebase', level: 95 },
  { name: 'TailwindCSS', level: 90 },
  { name: 'DaisyUI', level: 96 },
  { name: 'WordPress', level: 80 },

];

const Pill = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-3.5 py-1 text-[11px] uppercase tracking-[0.16em] text-neutral-700 shadow-sm">
    <span className="h-2 w-2 rounded-full bg-lime-500 shadow-[0_0_8px_rgba(163,230,53,0.8)]" />
    {children}
  </span>
);

// Circular skill component
const SkillCircle = ({ name, level }) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (level / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center m-4">
      <div className="relative w-24 h-24">
        <svg className="w-full h-full">
          <circle
            className="text-neutral-200"
            strokeWidth="6"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="50%"
            cy="50%"
          />
          <circle
            className="text-lime-500"
            strokeWidth="6"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="50%"
            cy="50%"
            style={{ transition: 'stroke-dashoffset 1s ease-out' }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-neutral-900">
          {level}%
        </div>
      </div>
      <span className="mt-2 text-center font-medium text-neutral-900">
        {name}
      </span>
    </div>
  );
};

export default function Skills() {
  return (
    <section className="bg-white text-black py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Title */}
        <div className="text-center mb-12">
          <Pill>Skills</Pill>
          <h1 className="mt-4 font-semibold tracking-tight text-[clamp(28px,6vw,72px)]">
            My Technical Skills
          </h1>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-center items-center">
          {skills.map((skill, i) => (
            <SkillCircle key={i} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
