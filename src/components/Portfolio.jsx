import React from "react";

const projects = [
  {
    name: "Project One",
    description: "A responsive portfolio website built using React and Tailwind CSS.",
    link: "#"
  },
  {
    name: "Project Two",
    description: "An e-commerce web app with payment gateway integration.",
    link: "#"
  },
  {
    name: "Project Three",
    description: "A blog platform with user authentication and comment section.",
    link: "#"
  }
];

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 px-4 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#64FFDA] mb-12">Our Portfolio</h2>
      <div className="space-y-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#112240] p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300"
          >
            <h3 className="text-xl font-semibold text-[#CCD6F6]">{project.name}</h3>
            <p className="text-[#8892B0] mb-4">{project.description}</p>
            <a
              href={project.link}
              className="text-[#64FFDA] hover:underline"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
