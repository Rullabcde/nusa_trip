import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "fontawesome-free/css/all.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Navbar from "./components/Navbar";
import Slide from "./components/Slide";
import About from "./components/About";
import Events from "./components/Events";
import Facility from "./components/Facility";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Sponsor from "./components/Sponsor";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <Slide />
    <About />
    <Events />
    <Facility />
    <Services />
    <Gallery />
    <Sponsor />
    <Faq />
    <Footer />
  </StrictMode>
);