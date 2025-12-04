import React from 'react';
import Hero from '../../Components/Hero';
import Works from '../../Components/Works';
import SelectedWork from '../../Components/SelectedWork';
import MyProcess from '../../Components/MyProcess';
import ServicesSection from '../../Components/ServicesSection';
import AboutSection from '../../Components/AboutSection';
import StatsTestimonials from '../../Components/StatsTestimonials';

const Home = () => {
  return (
    <div>
      <title>Home Web Developer | Sheikh Kiron </title>
      <Hero />
      <Works />
      <SelectedWork />
      <MyProcess />
      <ServicesSection />
      <AboutSection />
      <StatsTestimonials/>
    </div>
  );
};

export default Home;