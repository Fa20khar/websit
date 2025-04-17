import React, { useState } from "react";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent by ${name}`);
    // Form submission logic
  };

  return (
    <section id="contact" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-[#64FFDA] mb-12 text-center">
        Contact Us
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="text-[#8892B0]">Your Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 mt-2 bg-[#112240] text-[#CCD6F6] border border-[#64FFDA] rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="text-[#8892B0]">Your Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 mt-2 bg-[#112240] text-[#CCD6F6] border border-[#64FFDA] rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="text-[#8892B0]">Your Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="5"
            className="w-full p-3 mt-2 bg-[#112240] text-[#CCD6F6] border border-[#64FFDA] rounded-md"
            required
          ></textarea>
        </div>
        <button type="submit" className="w-full py-3 bg-[#64FFDA] text-[#0A192F] rounded-md mt-4">
          Send Message
        </button>
      </form>
    </section>
  );
};
