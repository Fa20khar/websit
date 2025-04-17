import React from "react";
import { FiCode, FiPhone, FiBriefcase, FiGlobe } from "react-icons/fi";

const services = [
  {
    icon: <FiCode className="text-4xl text-[#64FFDA]" />,
    title: "Web Development",
    description: "Building modern and responsive websites using the latest technologies."
  },
  {
    icon: <FiPhone className="text-4xl text-[#64FFDA]" />,
    title: "Mobile App Development",
    description: "Creating cross-platform mobile applications for Android and iOS."
  },
  {
    icon: <FiBriefcase className="text-4xl text-[#64FFDA]" />,
    title: "Consulting",
    description: "Helping businesses with strategy, design, and development for growth."
  },
  {
    icon: <FiGlobe className="text-4xl text-[#64FFDA]" />,
    title: "SEO Optimization",
    description: "Enhancing the visibility of your website on search engines."
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-20 px-4 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#64FFDA] mb-12">Our Services</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#112240] p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
          >
            <div className="mb-4 flex justify-center">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-[#CCD6F6]">{service.title}</h3>
            <p className="text-[#8892B0]">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
