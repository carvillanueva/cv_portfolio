import React from "react";

const About = () => {
  return (
    <section className="container mt-10">
      <p className="text-3xl md:text-4xl font-semibold">About...</p>
      <span className=""></span>
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
      <div className="">
      {/* <div className="flex items-center max-w-[850px]"> */}
        <div className="mt-5">
          <p className="text-xl mb-2 underline">Experience</p>
          <ol className="relative border-s border-gray-200 mx-3">
            <li className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-[#004225] rounded-full -start-3 ring-8 ring-white">
                <svg
                  className="w-2.5 h-2.5 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">
                Capital One{" "}
                <span className="bg-[#004225]/60 text-white text-sm font-medium me-2 px-2.5 py-0.5 rounded ms-3">
                  Current
                </span>
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
                August 2023 - Present
              </time>
              <p className="mb-4 text-base font-normal text-gray-500">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Facilis expedita eveniet, iste, quaerat quam quasi repellendus
                enim odit voluptate veniam accusamus numquam quisquam.
                Exercitationem eos vitae fugit iure quae repudiandae ad nemo cum
                hic? Alias saepe, molestias aperiam deserunt itaque debitis
                ratione vero dignissimos iure facilis, quidem eaque nesciunt
                laborum!
              </p>
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700"
              >
                <svg
                  className="w-3.5 h-3.5 me-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                  <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                </svg>{" "}
                Download ZIP
              </a>
            </li>
            <li className="ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-[#004225] rounded-full -start-3 ring-8 ring-white">
                <svg
                  className="w-2.5 h-2.5 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>
              <h3 className="mb-1 text-lg font-semibold text-gray-900">
                Arlignton Family Office
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
                August 2021 - August 2023
              </time>
              <p className="text-base font-normal text-gray-500">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Facilis expedita eveniet, iste, quaerat quam quasi repellendus
                enim odit voluptate veniam accusamus numquam quisquam.
                Exercitationem eos vitae fugit iure quae repudiandae ad nemo cum
                hic? Alias saepe, molestias aperiam deserunt itaque debitis
                ratione vero dignissimos iure facilis, quidem eaque nesciunt
                laborum!
              </p>
            </li>
          </ol>
        </div>
        <div className="mt-5">
          <p className="text-xl mb-2 underline">Education</p>
          <div className=""></div>
        </div>
      </div>
    </section>
  );
};

export default About;
