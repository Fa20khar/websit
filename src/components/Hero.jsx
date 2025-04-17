import React from "react";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4"
    >
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-[#64FFDA] mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to Code With Pride
      </motion.h1>
      <p className="text-lg md:text-xl text-[#8892B0] max-w-xl">
        We build modern, responsive, and high-performance web solutions to help your business grow online.
      </p>
      <motion.button
        className="mt-6 px-6 py-3 bg-[#64FFDA] text-[#0A192F] font-semibold rounded-md hover:bg-opacity-80 transition"
        whileHover={{ scale: 1.05 }}
      >
        Get Started
      </motion.button>
    </section>
  );
};
