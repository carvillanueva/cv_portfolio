import React from "react";
import BriefcaseIcon from "@/public/assets/briefcase.svg";
import SchoolIcon from "@/public/assets/school.svg";

const About = () => {
  return (
    <section className="md:mt-5">
      {/* <p className="text-3xl md:text-4xl font-semibold">About...</p> */}
      {/* <section className="flex justify-center mt-10"> */}
      {/* <div className="text-white bg-[#004225]/60 w-[650px] m-3 p-7 rounded-lg">
        <p className="font-semibold">Little bit about me...</p>
        <p className="mt-3">
          Still trying to figue about what I want to specialize in but have
          experience ranging from small personal full-stack apps to large-scale
          web applications. Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Facilis expedita eveniet, iste, quaerat quam quasi repellendus
          enim odit voluptate veniam accusamus numquam quisquam. Exercitationem
          eos vitae fugit iure quae repudiandae ad nemo cum hic? Alias saepe,
          molestias aperiam deserunt itaque debitis ratione vero dignissimos
          iure facilis, quidem eaque nesciunt laborum!
        </p>
      </div> */}
      <div className="flex justify-center">
        <div className="max-w-[850px]">
          {/* <div className="flex items-center max-w-[850px]"> */}
          <div className="mt-5">
            <p className="text-2xl mb-3 underline font-semibold">Experience</p>
            <ol className="relative border-s border-gray-200 mx-3">
              <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-[#004225] rounded-full -start-3 ring-8 ring-white">
                  <BriefcaseIcon className="w-2.5 h-2.5 text-white" />
                </span>
                <h3 className="flex items-center text-xl font-semibold text-gray-900">
                  Capital One{" "}
                  <span className="bg-[#004225]/60 text-white text-sm font-medium me-2 px-2.5 py-0.5 rounded ms-3">
                    Current
                  </span>
                </h3>
                <p className="mb-1">Associate Software Engineer</p>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-500">
                  August 2023 - Present
                </time>
                <p className="mb-4 text-base font-normal text-gray-500">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis expedita eveniet, iste, quaerat quam quasi repellendus
                  enim odit voluptate veniam accusamus numquam quisquam.
                  Exercitationem eos vitae fugit iure quae repudiandae ad nemo
                  cum hic? Alias saepe, molestias aperiam deserunt itaque
                  debitis ratione vero dignissimos iure facilis, quidem eaque
                  nesciunt laborum!
                </p>
              </li>
              <li className="ms-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-[#004225] rounded-full -start-3 ring-8 ring-white">
                  <BriefcaseIcon className="w-2.5 h-2.5 text-white" />
                </span>
                <h3 className="text-xl font-semibold text-gray-900">
                  Arlignton Family Office
                </h3>
                <p className="mb-1">Application Developer</p>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-500">
                  August 2021 - August 2023
                </time>
                <p className="mb-4 text-base font-normal text-gray-500">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis expedita eveniet, iste, quaerat quam quasi repellendus
                  enim odit voluptate veniam accusamus numquam quisquam.
                  Exercitationem eos vitae fugit iure quae repudiandae ad nemo
                  cum hic? Alias saepe, molestias aperiam deserunt itaque
                  debitis ratione vero dignissimos iure facilis, quidem eaque
                  nesciunt laborum!
                </p>
              </li>
            </ol>
          </div>
          <div className="mt-5">
            <p className="text-2xl mb-3 underline font-semibold">Education</p>
            <div className="">
              <ol className="relative border-s border-gray-200 mx-3">
                <li className="mb-10 ms-6">
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-[#004225] rounded-full -start-3 ring-8 ring-white">
                    <SchoolIcon className="w-4 h-4 text-white" />
                  </span>
                  <h3 className="flex items-center text-xl font-semibold text-gray-900">
                    Mississippi State University{" "}
                  </h3>
                  <p className="mb-1">Bachelor of Science in Biochemistry</p>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-500">
                    August 2020
                  </time>
                  <p className="mb-4 text-base font-normal text-gray-500">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis expedita eveniet, iste, quaerat quam quasi
                    repellendus enim odit voluptate veniam accusamus numquam
                    quisquam. Exercitationem eos vitae fugit iure quae
                    repudiandae ad nemo cum hic? Alias saepe, molestias aperiam
                    deserunt itaque debitis ratione vero dignissimos iure
                    facilis, quidem eaque nesciunt laborum!
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
