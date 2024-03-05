import React from "react";
import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <>
    <div className="">
    <footer className="footer p-5 bg-base-300 text-base-content text-slate-600 flex flex-col md:flex-row justify-around bg-teal-500  w-full">
        <nav className="flex flex-col">
          <h6 className="footer-title font-semibold text-xl mt-3">Services</h6>
          <a className="cursor-pointer">Design</a>
          <a className="cursor-pointer">Branding</a>
          <a className="cursor-pointer">Marketing</a>
          <a className="cursor-pointer">Advertisement</a>
        </nav>
        <nav className="flex flex-col">
          <h6 className="footer-title font-semibold text-xl mt-3">Company</h6>
          <a className="cursor-pointer">About us</a>
          <a className="cursor-pointer">Contact</a>
          <a className="cursor-pointer">Jobs</a>
          <a className="cursor-pointer">Press kit</a>
        </nav>
        <nav className="flex flex-col">
          <h6 className="footer-title font-semibold mb-3 text-xl mt-3">Social</h6>
          <div className="grid grid-flow-col gap-6">
          
              <AiFillTwitterCircle className="cursor-pointer text-3xl" />
              <AiFillLinkedin className="cursor-pointer text-3xl" />
              <AiFillGithub className="cursor-pointer text-3xl" />
            
          </div>
        </nav>
      </footer>
    </div>
      
    </>
  );
};

export default Footer;
