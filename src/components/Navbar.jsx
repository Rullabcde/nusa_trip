import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentLink, setCurrentLink] = useState("#home");

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Event", href: "#event" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "FAQ", href: "#faq" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);

      const sections = navLinks.map((link) =>
        document.querySelector(link.href)
      );
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (
          section &&
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setCurrentLink(navLinks[index].href);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-sm shadow-md" : "bg-white"
      }`}>
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <a href="#home" className="flex items-center gap-3">
          <img src="/logo.png" className="h-8" alt="Logo" />
          <span className="text-2xl text-logo font-bold whitespace-nowrap font-playfair">
            NusaTrip
          </span>
        </a>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg"
          aria-label="Toggle menu">
          <FontAwesomeIcon icon={faBars} className="w-5 h-5" />
        </button>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-full left-0 right-0 md:static md:block md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none`}>
          <ul className="flex flex-col md:flex-row md:gap-8 p-4 md:p-0 font-lato">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setCurrentLink(link.href)}
                  className={`block py-2 px-3 rounded md:p-0 transition-colors ${
                    currentLink === link.href
                      ? "text-primary font-medium"
                      : "text-gray-700 hover:text-primary"
                  }`}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
