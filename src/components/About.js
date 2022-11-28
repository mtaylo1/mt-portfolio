import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Mustapha.
            <br className="hidden lg:inline-block" />I love technology and working with companies to help them grow
          </h1>
          <p className="mb-8 leading-relaxed">
          I’m a Full Stack Developer and Account Manager based in Toronto, Ontario Canada. 

          </p>
          <p className="mb-8 leading-relaxed">
          I have always had a love for entrepreneurship and technology. My post-secondary education is in Business Administration with a specialization in Small Business and Entrepreneurship and I have taken a coding Bootcamp to expand my current skill set in web development. 

My sales background is in various parts of the sales process, whether finding new business or increasing the share of wallet. When I am not working, I freelance to support small companies to create/ and improve their online presence. 

 

          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-yellow-600 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-500 rounded text-lg">
              Reach out to Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Previous Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./MT-Avatar.jpg"
          />
        </div>
      </div>
    </section>
  );
}
