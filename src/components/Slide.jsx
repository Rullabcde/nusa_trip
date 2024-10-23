import React, { useState, useEffect } from "react";
import imageSrc1 from "../assets/jogja.jpg";
import imageSrc2 from "../assets/bali.jpg";
import imageSrc3 from "../assets/jakarta.jpg";

const images = [
  { src: imageSrc1, alt: "Banner 1" },
  { src: imageSrc2, alt: "Banner 2" },
  { src: imageSrc3, alt: "Banner 3" },
];

const Slide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home">
      <div className="relative w-full" data-carousel="slide">
        <div className="relative h-screen overflow-hidden">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
              data-carousel-item="true">
              <img
                src={image.src}
                className="object-cover w-full h-full"
                alt={image.alt}
              />
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slide;
