import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="container mt-10 pb-5">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center">
          <Image
            src="/assets/profilepic.png"
            width={120}
            height={120}
            alt="Profile Picture"
            className="border rounded-full bg-[#004225] hover:bg-[#005630]"
          />
          <h3 className="font-medium text-2xl mt-5 tracking-tight">
            Hi, I&apos;m Carlos 👋
          </h3>
        </div>
        <div className="mt-8 text-3xl font-semibold tracking-tight md:text-6xl text-center max-w-[700px]">
          <p className="md:leading-[1.10]">
            building cool small projects and learning new technologies in software
            development.
          </p>
        </div>
        <div className="mt-8 text-center text-lg ">
          a <span className="font-semibold">Full-Stack Software Engineer</span>{" "}
          in <span className="font-semibold">Washington, D.C.</span> working for{" "}
          <span className="font-semibold">Capital One</span>.
          <br></br>
          {/* I like building web applications and websites. */}
        </div>
        <div className="mt-12">
          <a href="#projects">
            <button className="bg-[#004225] hover:bg-[#005630] text-white p-5 rounded-full text-sm font-normal inline-flex align-items justify-center tracking-tight uppercase">
              Latest Projects
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
