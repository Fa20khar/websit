import React from "react";

const faqs = [
  {
    question: "How do I get started with your services?",
    answer:
      "You can start by contacting us via the Contact section, and we will guide you through the process from consultation to delivery."
  },
  {
    question: "What industries do you work with?",
    answer:
      "We work with clients from various industries, including tech, e-commerce, education, and healthcare, among others."
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer:
      "Yes! We offer ongoing maintenance and support packages to ensure your website or application stays up-to-date and secure."
  }
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-[#64FFDA] mb-12 text-center">
        Frequently Asked Questions
      </h2>
      <div className="space-y-8">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-[#112240] p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-[#CCD6F6]">{faq.question}</h3>
            <p className="text-[#8892B0] mt-2">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
