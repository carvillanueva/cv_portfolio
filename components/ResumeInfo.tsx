import React from "react";
import SchoolIcon from "@/public/assets/school.svg";
import CapitalOneIcon from "@/public/assets/captial-one-logo.svg";
import AFOIcon from "@/public/assets/afo-logo.png";
import Image from "next/image";

const About = () => {
  return (
    <section className="md:mt-5">
      <div className="flex justify-center">
        <div className="max-w-[850px]">
          <div className="mt-5">
            <p className="text-2xl mb-3 underline font-semibold">Experience</p>
            <ol className="relative border-s border-gray-200 mx-3">
              <li className="mb-10 ms-7">
                <span className="absolute flex items-center justify-center w-7 h-7 bg-white rounded-full -start-3 ring-4 ring-[#004225]">
                  <CapitalOneIcon className="w-10 rounded-full bg-white" />
                </span>
                <h3 className="flex items-center text-xl font-semibold text-gray-900">
                  Capital One{" "}
                  <span className="bg-[#004225]/60 text-white text-sm font-medium me-2 px-2.5 py-0.5 rounded ms-3">
                    Current
                  </span>
                </h3>
                <p className="mb-1">💻 Associate Software Engineer</p>
                <div className="block mb-2 text-sm font-normal leading-none">
                  📍 Washington, D.C.
                </div>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-500">
                  🕛 August 2023 - Present
                </time>
                <div className="mb-4 pl-3 md:pl-8 text-base font-normal text-gray-500">
                  <ol className="list-disc">
                    <li>
                      Utilize programming languages like JS/TS, Java, Python,
                      and AWS to maintain several client facing applications
                    </li>
                    <li>
                      Solved complex technical issues related to scalability,
                      performance, and security in large-scale applications
                    </li>
                    <li>
                      Collaborate with and across Agile teams to design,
                      develop, test, implement, and support technical solutions
                      in full-stack development tools and technologies
                    </li>
                    <li>
                      Cross collaborated with others to create technical events
                      to share development knowledge to other associates
                    </li>
                  </ol>
                </div>
              </li>
              <li className="ms-7">
                <span className="absolute flex items-center justify-center w-7 h-7 bg-white rounded-full -start-3 ring-4 ring-[#004225]">
                  <Image
                    src={AFOIcon}
                    alt="Arlignton Family Office"
                    width={40}
                    height={40}
                  />
                </span>
                <h3 className="text-xl font-semibold text-gray-900">
                  Arlignton Family Office
                </h3>
                <p className="mb-1">💻 Application Developer</p>
                <div className="block mb-2 text-sm font-normal leading-none">
                  📍 Birmingham, AL
                </div>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-500">
                  🕛 August 2021 - August 2023
                </time>
                <div className="mb-4 pl-3 md:pl-8 text-base font-normal text-gray-500">
                  <ol className="list-disc">
                    <li>
                      Proficient in front-end JavaScript frameworks such as
                      Angular, as well as code versioning technologies like Git
                      and REST API design principles.
                    </li>
                    <li>
                      Experience designing, developing, testing, and maintaining
                      application code to meet business requirements using
                      technologies including HTML, CSS, JavaScript, Angular,
                      .NET Core, C#, Azure, SQL, and CosmosDB.
                    </li>
                    <li>
                      Strong ability to analyse and resolve technical and
                      application problems, as well as research and adapt to new
                      languages, methodologies, and platforms as needed.
                    </li>
                    <li>
                      Demonstrated understanding of software development
                      principles and ability to adhere to high- quality
                      development practices while delivering solutions promptly.
                    </li>
                  </ol>
                </div>
              </li>
            </ol>
          </div>
          <div className="mt-5">
            <p className="text-2xl mb-3 underline font-semibold">Education</p>
            <div className="">
              <ol className="relative border-s border-gray-200 mx-3">
                <li className="mb-10 ms-6">
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-[#004225] rounded-full -start-3 ring-8 ring-white">
                    <SchoolIcon className="w-3.5 h-3.5 text-white" />
                  </span>
                  <h3 className="flex items-center text-xl font-semibold text-gray-900">
                    Mississippi State University{" "}
                  </h3>
                  <p className="mb-1">Bachelor of Science in Biochemistry</p>
                  <div className="block mb-2 text-sm font-normal leading-none">
                    Starkville, MS
                  </div>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-500">
                    August 2020
                  </time>
                  {/* <div className="mb-4 text-base font-normal text-gray-500">
                    <ol>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ol>
                  </div> */}
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
