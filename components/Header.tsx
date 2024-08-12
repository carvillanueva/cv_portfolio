"use client";

import { useState } from "react";
import MenuIcon from "@/public/assets/menu.svg";
import CloseIcon from "@/public/assets/close.svg";
import SocialLinkedIn from "@/public/assets/social-linkedin.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/100 hidden md:block">✨ Hi there! </p>
        <div className="inline-flex gap-1 items-center">
          <p>✨ Thanks for visiting my site! ✨</p>
        </div>
      </div>
      {isMenuOpen ? (
        <section className="fixed inset-0 z-20 bg-white h-[100vh] overflow-hidden ">
          <div className="p-5 mt-10">
            <div className="flex justify-end">
              <CloseIcon className="h-5 w-5 md:hidden" onClick={toggleMenu} />
            </div>
            <div className="">
              <nav className="flex flex-col gap-6 text-black/70 items-center mt-5 ">
                <a href="#" className="hover:underline">About</a>
                <a href="#" className="hover:underline">Projects</a>
                <a href="#" className="hover:underline">Resume</a>
                {/* <a href="#">Other</a> */}
                {/* <a href="#">Other</a> */}
                <a href="#">
                  <button className="bg-[#004225] text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight">
                    Lets Connect
                  </button>
                </a>
              </nav>
            </div>
          </div>
        </section>
      ) : (
        <section className="py-5">
          <div className="container">
            {/* <div className="flex items-center justify-between"> */}
            <div className="flex items-center justify-end">
              {/* <SocialLinkedIn className="h-7 w-7"/> */}
              <MenuIcon className="h-6 w-6 md:hidden" onClick={toggleMenu} />
              <nav className="hidden md:flex gap-6 text-black/70 items-center">
                <a href="#">About</a>
                <a href="#">Projects</a>
                <a href="#">Resume</a>
                {/* <a href="#">Other</a> */}
                {/* <a href="#">Other</a> */}
                <a href="#">
                  <button className="bg-[#004225] text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight">
                    Lets Connect
                  </button>
                </a>
              </nav>
            </div>
          </div>
        </section>
      )}
    </header>
  );
};

export default Header;
