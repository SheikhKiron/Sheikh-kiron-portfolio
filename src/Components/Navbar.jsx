import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
  return (
    <div className="bg-[#111111]">
      <div className="navbar lg:max-w-10/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[#74FF1F]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {' '}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{' '}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/projects">Projects</NavLink>
              </li>
              <li>
                <NavLink to="/services">Services</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li>
                <a
                  href="https://wa.me/8801516522658"
                  target="_blank"
                  className="btn btn-outline rounded-[20px] hover:bg-[#74FF1F] hover:text-[#74FF1F]"
                >
                  Hire Me
                </a>
              </li>
            </ul>
          </div>
          <Link to="/" className="text-white text-2xl font-bold">
            Sheikh Kiron
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white text-[18px]">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <a
                href="https://wa.me/8801516522658"
                target="_blank"
                className="btn btn-outline rounded-[20px] hover:bg-[#74FF1F] hover:text-[#74FF1F]"
              >
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;