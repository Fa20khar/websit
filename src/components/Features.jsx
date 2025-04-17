import React from "react";
import { FiZap, FiShield, FiClock, FiTrendingUp } from "react-icons/fi";

const features = [
  {
    icon: <FiZap className="text-4xl text-[#64FFDA]" />,
    title: "Fast Performance",
    description: "Optimized code and resources for lightning-fast load times."
  },
  {
    icon: <FiShield className="text-4xl text-[#64FFDA]" />,
    title: "Secure Solutions",
    description: "Security-first approach to keep your data and business safe."
  },
  {
    icon: <FiClock className="text-4xl text-[#64FFDA]" />,
    title: "Timely Delivery",
    description: "We deliver on time with consistent communication and updates."
  },
  {
    icon: <FiTrendingUp className="text-4xl text-[#64FFDA]" />,
    title: "Scalable Growth",
    description: "Flexible and scalable architecture for future business expansion."
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-20 px-4 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#64FFDA] mb-12">Key Features</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-[#112240] p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
          >
            <div className="mb-4 flex justify-center">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-[#CCD6F6]">
              {feature.title}
            </h3>
            <p className="text-[#8892B0]">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
