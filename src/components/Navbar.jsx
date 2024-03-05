import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";

// terakhir 24:49
const Navbar = () => {
  return (
    <>
      <div className="min-h-screen lg:flex flex-col">
        <nav className=" py-5 sm:py-8 md:py-2 md:mt-8 flex justify-between">
          <div className="lg:flex md:flex gap-2 text-black">
            <h1 className="text-2xl lg:text-3xl  font-bold font-mono">Naufal</h1>
            <h1 className="text-2xl lg:text-3xl  font-bold font-mono">Hanif.</h1>
          </div>
          <ul className="flex items-center">
            <li>
              <BsFillMoonStarsFill className="cursor-pointer text-xl" />
            </li>
            <li>
              <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="#">
                Resume
              </a>
            </li>
          </ul>
        </nav>

        
        <div className=" md:flex  lg:flex-row-reverse   items-center m-auto md:gap-10 sm:flex-col">
          <div className="md:text-left text-center mx-1 px-10 sm:mt-16 lg:mt-2 mt-10">
            <h2 className="text-2xl py-2 text-teal-500 font-custom1 font-medium md:text-6xl">Naufal Hanif Cipta Darmara</h2>
            <h3 className="text-xl py-2 md:text-3xl">Student at Purwadhika || Web Developer</h3>
            <p className="text-sm py-2 leading-8 text-gray-800 md:text-xl max-w-lg ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident alias soluta error labore qui incidunt!</p>
          </div>

          <div className=" mx-auto bg-gradient-to-b from-teal-500 rounded-full h-60 w-60 mt-10 md:h-full md:w-96">
            <img src="public\sticker_1.webp" alt="gambar-profile" className="object-cover w-full h-full rounded-full" />
          </div>
        </div>

        </div>
    </>
  );
};

export default Navbar;
