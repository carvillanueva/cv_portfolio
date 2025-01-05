import React from "react";
import DocumentIcon from "@/public/assets/document.svg";
import About from "./ResumeInfo";

const Resume = () => {
  return (
    <section className="container pt-[130px] pb-20" id="resume">
      <p className="xl:mx-20 text-3xl md:text-4xl font-semibold mb-3">Resume</p>
      <About />
      <div className="flex justify-center mt-5">
        <div className="max-w-xl p-6 border border-gray-200 rounded-lg shadow">
          <DocumentIcon />
          <a href="#">
            <div className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">
              Download my resume
            </div>
          </a>
          <p className="mb-3 font-normal text-gray-500">
            Here you can find more informatin regarding my professional
            experience, education and skills.
          </p>
          <a
            href="/assets/CV_Resume.pdf"
            download
            className="inline-flex font-medium items-center"
          >
            <button
              type="button"
              className="text-white bg-gradient-to-r from-[#004225] via-[#005630] to-[#006b3c] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Download
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
