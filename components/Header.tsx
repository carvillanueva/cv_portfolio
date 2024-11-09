"use client";

import { useState } from "react";
import MenuIcon from "@/public/assets/menu.svg";
import CloseIcon from "@/public/assets/close.svg";
import SocialLinkedIn from "@/public/assets/social-linkedin.svg";
import SocialGithub from "@/public/assets/social-github.svg";
import { useToast } from "./ui/use-toast";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const email = "carlos2villanueva@gmail.com";

  const { toast } = useToast();

  const handleClick = () => {
    toast({
      variant: "british",
      title: "Hi! Send me an email!📬",
      description:
        "Thanks for wanting to connnect. My email has been copied to your clipboard! 📋",
    });
    clip();
  };

  function clip() {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {" "}
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/100 hidden md:block"> Hi there!👋</p>
        <div className="inline-flex gap-1 items-center">
          <p> Thanks for visiting my website! 👍</p>
        </div>
      </div>
      <header className="sticky top-0 backdrop-blur-md z-20">
        {isMenuOpen ? (
          <section className="fixed inset-0 z-20 bg-white h-[100vh] overflow-hidden ">
            <div className="p-5 mt-10">
              <div className="flex justify-end">
                <CloseIcon className="h-5 w-5 md:hidden" onClick={toggleMenu} />
              </div>
              <div className="">
                <nav className="flex flex-col gap-6 text-black/70 text-lg font-medium items-center mt-5 ">
                  <a
                    href="#about"
                    className="hover:underline"
                    onClick={toggleMenu}
                  >
                    About
                  </a>
                  <a
                    href="#projects"
                    className="hover:underline"
                    onClick={toggleMenu}
                  >
                    Projects
                  </a>
                  <a
                    href="#resume"
                    className="hover:underline"
                    onClick={toggleMenu}
                  >
                    Resume
                  </a>
                  <a className="text-slate-400">
                    Blog <span className="text-sm">(Coming Soon)</span>
                  </a>
                  <button
                    className="bg-[#004225] hover:bg-[#005630] text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight"
                    onClick={handleClick}
                  >
                    Let&apos;s Connect
                  </button>
                </nav>
              </div>
            </div>
          </section>
        ) : (
          <section className="py-5">
            <div className="container">
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <a
                    href="https://www.linkedin.com/in/carlosivillanueva/"
                    target="_blank"
                    className=""
                  >
                    <SocialLinkedIn />
                  </a>
                  <a
                    href="https://github.com/carvillanueva"
                    target="_blank"
                    className=""
                  >
                    <SocialGithub />
                  </a>
                </div>
                <MenuIcon className="h-7 w-7 md:hidden" onClick={toggleMenu} />
                <nav className="hidden md:flex gap-6 text-black/70 items-center font-medium">
                  <a href="#about" className="hover:underline">
                    About
                  </a>
                  <a href="#projects" className="hover:underline">
                    Projects
                  </a>
                  <a href="#resume" className="hover:underline">
                    Resume
                  </a>
                  <a className="text-slate-400">
                    Blog <span className="text-sm">(Coming Soon)</span>
                  </a>
                  <button
                    className="bg-[#004225] hover:bg-[#005630] text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight"
                    onClick={handleClick}
                  >
                    Let&apos;s Connect
                  </button>
                </nav>
              </div>
            </div>
          </section>
        )}
      </header>
    </>
  );
};

export default Header;
