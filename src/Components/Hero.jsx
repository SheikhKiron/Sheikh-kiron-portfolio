import React from 'react';
import { FaCircle } from 'react-icons/fa';
import kiron from '../assets/kiron111.png'
import { MdOutlineSubdirectoryArrowRight } from 'react-icons/md';
const Hero = () => {
  return (
    <div className="bg-[#111111] p-1">
      <div className="md:max-w-10/12 mx-auto ">
        <div className="text-center">
          <button className="btn btn-outline text-white rounded-3xl mt-20 hover:bg-[#111111]">
            <span className="text-[#74FF1F]">
              <FaCircle />
            </span>{' '}
            Available for Work
          </button>
        </div>
        <h1 className="text-white text-7xl md:text-9xl lg:text-[180px] mt-12 font-semibold text-center">
          S h e i k h
        </h1>
        <h1 className="text-white text-7xl md:text-9xl md:mt-7 lg:text-[180px] md:-mt-10 font-semibold text-center lg:mt-5">
          K i r o n ©
        </h1>
        <div className='space-y-2 absolute mt-14'>
          <p className='text-white text-[14px] xl:text-[20px] hidden lg:flex'>
            I blend artistry with cutting-edge technology to <br/> deliver websites
            that not only look stunning but also <br/> drive results.
          </p>

          <button
            href="https://wa.me/8801516522658"
            target="_blank"
            className=" px-3 py-3 rounded-[23px] bg-[#74FF1F] hover:scale-95 transition ease-in-out hover:bg-white hidden lg:flex items-center text-[20px]"
          > <MdOutlineSubdirectoryArrowRight /> Schedule a consultation
          </button>
        </div>
        <div className="flex justify-center">
          <img
            src={kiron}
            className="w-[500px] lg:-mt-20 md:-mt-14 -mt-9"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;