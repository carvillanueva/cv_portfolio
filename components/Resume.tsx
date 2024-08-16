import React from "react";
import DocumentIcon from "@/public/assets/document.svg";
import About from "./ResumeInfo";

const Resume = () => {
  return (
    <section className="container pt-[130px] pb-10" id="resume">
      <p className="text-3xl md:text-4xl font-semibold mb-3">Resume</p>

      <About />
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
        <DocumentIcon />
        <a href="#">
          <div className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">
            Don&apos;t be scared to share my resume!
          </div>
        </a>
        <p className="mb-3 font-normal text-gray-500">
          Here you can find all informatin regarding my professional experience
          and education!
        </p>
        <a
          href="/your-resume.pdf"
          download
          className="inline-flex font-medium items-center text-blue-600 hover:underline"
        >
          <button
            type="button"
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Download
          </button>
        </a>
      </div>
    </section>
  );
};

export default Resume;
