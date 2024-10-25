import React from "react";

const About = () => {
  return (
    <section className="container pt-[130px] pb-10" id="about">
      <p className="xl:mx-20 text-3xl md:text-4xl font-semibold mb-10">
        A little about me...
      </p>

      <div className="flex justify-center ">
        <div className="max-w-[850px]">
          <div className="mb-3">
            <p className="">
              I graduated from Mississippi State Univeristy with a degree in
              Biochemistry. I had goals of going to dental school but those
              changed when graduating during covid. During a little free time I
              decided to learn a few things about software development. Since
              then I have continued to grow my skills and was able to land a
              role
            </p>
          </div>
          <div className="mb-3">
            <p className="text-lg font-semibold">What am I doing next?</p>
            <p className="">
              Currently I am taking time to learn NextJS and a plan to purse a MS
              in Computer Science
            </p>
          </div>
          <div className="mb-3">
            <p className="text-lg font-semibold">
              Since AI is a popular buzz word here are some of my favorite apps
              to use
            </p>
            <div className="">
              <ol>
                <li>Perplexity AI</li>
                <li>Audio Pen AI</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
