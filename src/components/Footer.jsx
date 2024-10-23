import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="text-white bg-gray-900">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <a className="flex items-center space-x-2" href="#home">
              <img
                alt="logo"
                loading="lazy"
                width="65"
                height="80"
                decoding="async"
                src={logo}
              />
              <span className="text-xl font-bold">NusaTrip</span>
            </a>
            <p className="text-gray-400">Explore Beyond the Horizon!</p>
          </div>

          <nav className="space-y-4 md:col-span-2">
            <h3 className="text-lg font-semibold">Navigation</h3>
            <ul className="grid grid-cols-2 gap-2">
              <li>
                <a
                  className="transition-colors hover:text-blue-400"
                  href="#home">
                  Home
                </a>
              </li>
              <li>
                <a
                  className="transition-colors hover:text-blue-400"
                  href="#services">
                  Services
                </a>
              </li>
              <li>
                <a
                  className="transition-colors hover:text-blue-400"
                  href="#about">
                  About
                </a>
              </li>
              <li>
                <a
                  className="transition-colors hover:text-blue-400"
                  href="#gallery">
                  Gallery
                </a>
              </li>
              <li>
                <a
                  className="transition-colors hover:text-blue-400"
                  href="#event">
                  Event
                </a>
              </li>
              <li>
                <a
                  className="transition-colors hover:text-blue-400"
                  href="#faq">
                  FAQ
                </a>
              </li>
            </ul>
          </nav>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="flex space-x-4">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-blue-400"
                href="https://instagram.com/">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-blue-400"
                href="https://tiktok.com/">
                <FontAwesomeIcon icon={faTiktok} size="2x" />
                <span className="sr-only">TikTok</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 mt-8 text-center text-gray-400 border-t border-gray-800">
          <p>© 2024 NusaTrip. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
