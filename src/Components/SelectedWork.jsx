import React from 'react';

const projects = [
  {
    title: 'Dynamic Business Website',
    year: '2022',
    image:
      'https://cdn-ildpepj.nitrocdn.com/KSAaxJbLRRJyJTBCMtGcnbqPENvPMRUS/assets/images/optimized/rev-cebaa03/limon.com.bd/wp-content/uploads/2025/01/Project-Pic-6.png',
  },
  {
    title: 'E-Commerce Marketplace',
    year: '2023',
    image:
      'https://cdn-ildpepj.nitrocdn.com/KSAaxJbLRRJyJTBCMtGcnbqPENvPMRUS/assets/images/optimized/rev-cebaa03/limon.com.bd/wp-content/uploads/2025/01/Portfolio-Img-2.png',
  },
  {
    title: 'Digital Marketing Dashboard',
    year: '2024',
    image:
      'https://cdn-ildpepj.nitrocdn.com/KSAaxJbLRRJyJTBCMtGcnbqPENvPMRUS/assets/images/optimized/rev-cebaa03/limon.com.bd/wp-content/uploads/2025/02/Porject-Imgg.png',
  },
  {
    title: 'Event Management Platform',
    year: '2025',
    image:
      'https://cdn-ildpepj.nitrocdn.com/KSAaxJbLRRJyJTBCMtGcnbqPENvPMRUS/assets/images/optimized/rev-cebaa03/limon.com.bd/wp-content/uploads/2025/01/Portfolio-Img-4.png',
  },
];

const SelectedWork = () => {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1 bg-neutral-900 border border-neutral-800 rounded-full mb-6">
          <span className="w-2 h-2 bg-lime-500 rounded-full"></span>
          <span className="text-xs tracking-wide font-medium text-gray-400">
            SELECTED WORK: 2022–2025
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-5xl font-bold mb-12 leading-tight">
          Elevating Brands with <br /> Design Brilliance
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden hover:border-lime-500 transition-all duration-300 group"
            >
              {/* Header */}
              <div className="flex justify-between items-center px-5 pt-4 text-xs uppercase font-medium">
                <span className="text-lime-500">↳ {project.title}</span>
                <span className="text-gray-400">{project.year}</span>
              </div>

              {/* Image */}
              <div className="overflow-hidden rounded-lg m-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[400px] object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-12">
          <button className="px-6 py-2 bg-lime-500 text-black rounded-full font-medium hover:bg-lime-400 transition-all">
            ↳ Browse all work
          </button>
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;
