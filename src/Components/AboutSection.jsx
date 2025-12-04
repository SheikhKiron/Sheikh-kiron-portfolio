import React from 'react';
import imag from '../assets/kiron111.png'
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  FaGithub,
} from 'react-icons/fa';

const AboutSection = () => {
  return (
    <section className="bg-white text-black py-20 px-6 flex flex-col md:flex-row items-center justify-center gap-16 max-w-7xl mx-auto">
      {/* Left side - Image */}
      <div className="relative">
        <div className="border border-pink-200 shadow-md rounded-lg overflow-hidden">
          <img
            src={imag} // Replace with your actual image path
            alt="Profile"
            className="w-[350px] md:w-[400px] object-cover"
          />
        </div>
      </div>

      {/* Right side - Text */}
      <div className="max-w-xl">
        <div className="inline-flex items-center gap-2 border border-gray-400 rounded-full px-3 py-1 text-sm mb-4">
          <span className="h-2 w-2 bg-lime-400 rounded-full"></span>
          <span>ABOUT ME</span>
        </div>

        <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
          Discover My <br /> Design Journey
        </h2>

        <p className="text-gray-700 leading-relaxed mb-8">
          Hello! This is <strong>Sheikh Kiron</strong>, a passionate Web
          Developer with over 4+ years of experience in creating visually
          appealing and user-friendly websites. My mission is to bring your
          brand to life through innovative design solutions tailored to your
          unique needs.
        </p>

        {/* Social Links */}
        <div className="flex gap-4">
          <a
            href="https://www.facebook.com/sheikh.kiron.2025"
            className="bg-black text-white p-3 rounded-full hover:bg-lime-400 hover:text-black transition"
          >
            <FaFacebookF size={18} />
          </a>
          <a
            href="https://wa.me/8801516522658"
            className="bg-black text-white p-3 rounded-full hover:bg-lime-400 hover:text-black transition"
          >
            <FaWhatsapp size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/sheikh-kiron-a21763341/"
            className="bg-black text-white p-3 rounded-full hover:bg-lime-400 hover:text-black transition"
          >
            <FaLinkedinIn size={18} />
          </a>
          <a
            href="https://github.com/SheikhKiron"
            className="bg-black text-white p-3 rounded-full hover:bg-lime-400 hover:text-black transition"
          >
            <FaGithub size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
