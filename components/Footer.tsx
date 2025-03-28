import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-md py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:content-['']  before:h-full before:blur before:w-full before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
          <p className="relative z-5 text-black font-semibold">This is the end! Bye-Bye 👋</p>
        </div>
        <p className="mt-6">&copy; 2025 Carlos Villanueva, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
