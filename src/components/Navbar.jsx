import React, { useState, useEffect } from "react";
import { Link } from "react-scroll"; // Import the react-scroll package for smooth scrolling

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "";
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom >= 0) {
          currentSection = section.id;
        }
      });
      setActiveLink(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>Code With Pride</h1>
      </div>
      <div
        className={`navbar-menu ${isMenuOpen ? "open" : ""}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className="hamburger"></div>
      </div>
      <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            onClick={() => setIsMenuOpen(false)}
            className={activeLink === "home" ? "active" : ""}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            onClick={() => setIsMenuOpen(false)}
            className={activeLink === "about" ? "active" : ""}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="services"
            smooth={true}
            duration={500}
            onClick={() => setIsMenuOpen(false)}
            className={activeLink === "services" ? "active" : ""}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="portfolio"
            smooth={true}
            duration={500}
            onClick={() => setIsMenuOpen(false)}
            className={activeLink === "portfolio" ? "active" : ""}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            onClick={() => setIsMenuOpen(false)}
            className={activeLink === "contact" ? "active" : ""}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};
