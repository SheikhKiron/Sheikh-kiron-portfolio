import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import './Root.css'
import FooterCTA from '../Components/FooterCTA';
const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <FooterCTA></FooterCTA>
    </div>
  );
};

export default Root;