import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Sarah Khan",
    role: "CEO, TechNova",
    quote:
      "Working with Code With Pride was a fantastic experience! They delivered a beautiful, responsive website on time and exceeded expectations."
  },
  {
    name: "Ali Raza",
    role: "Marketing Manager, PixelPeak",
    quote:
      "The team truly understands UX and performance. Our new landing page helped increase leads by 40% in just two weeks."
  },
  {
    name: "Mina Shah",
    role: "Founder, UrbanBoost",
    quote:
      "Their attention to detail is unparalleled. Our website is not only fast but also super user-friendly. Highly recommend!"
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-4 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#64FFDA] mb-12">Client Testimonials</h2>
      <div className="space-y-12">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-[#112240] p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300"
          >
            <div className="flex justify-center mb-4">
              <FaQuoteLeft className="text-[#64FFDA] text-3xl" />
            </div>
            <p className="text-[#8892B0] mb-4 italic">"{testimonial.quote}"</p>
            <h4 className="text-lg font-semibold text-[#CCD6F6]">{testimonial.name}</h4>
            <p className="text-[#8892B0]">{testimonial.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
