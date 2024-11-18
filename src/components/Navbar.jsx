import React, { useState, useEffect } from "react";
import { Link as ScrollLink, scroller } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentLink, setCurrentLink] = useState("home");

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Event", to: "event" },
    { name: "Services", to: "services" },
    { name: "Gallery", to: "gallery" },
    { name: "FAQ", to: "faq" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);

      const scrollPosition = window.scrollY + 100;

      navLinks.forEach(({ to }) => {
        const section = document.getElementById(to);
        if (
          section &&
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setCurrentLink(to);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setIsOpen(false);
    scroller.scrollTo(sectionId, {
      duration: 800,
      delay: 0,
      smooth: true,
      offset: -70,
    });
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-sm shadow-md" : "bg-white"
      }`}>
      <div className="flex items-center justify-between max-w-screen-xl p-4 mx-auto">
        <ScrollLink
          to="home"
          smooth={true}
          duration={800}
          offset={-70}
          className="flex items-center gap-3 cursor-pointer">
          <img src="/logo.png" className="h-8" alt="Logo" />
          <span className="text-2xl font-bold  text-logo">NusaTrip</span>
        </ScrollLink>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-gray-700 rounded-lg md:hidden hover:bg-gray-100"
          aria-label="Toggle menu">
          <FontAwesomeIcon icon={faBars} className="w-5 h-5" />
        </button>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-full left-0 right-0 md:static md:block md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none`}>
          <ul className="flex flex-col p-4 md:flex-row md:gap-8 md:p-0 font-lato">
            {navLinks.map((link) => (
              <li key={link.name}>
                <ScrollLink
                  to={link.to}
                  spy={true}
                  smooth={true}
                  duration={800}
                  offset={-70}
                  onClick={() => scrollToSection(link.to)}
                  className={`block py-2 px-3 rounded md:p-0 transition-colors cursor-pointer ${
                    currentLink === link.to
                      ? "text-primary font-medium"
                      : "text-gray-700 hover:text-primary"
                  }`}>
                  {link.name}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
