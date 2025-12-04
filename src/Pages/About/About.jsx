import React from 'react';
import AboutSectionAp from '../../Components/AboutSectionAP';
import ExperiencePage from '../../Components/ExperiencePage';
import MyWorldSection from '../../Components/MyWorldSection';
import DesignPhilosophy from '../../Components/DesignPhilosophy';
import EducationPage from './EducationPage';
import Skills from './Skills';

const About = () => {
  return (
    <div>
      <title>About Web Developer | Sheikh Kiron </title>
      <AboutSectionAp />
      <EducationPage></EducationPage>
      <Skills/>
      <ExperiencePage />
      <MyWorldSection />
      <DesignPhilosophy/>
    </div>
  );
};

export default About;