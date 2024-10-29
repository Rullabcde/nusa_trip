import React, { useState, useEffect, useCallback } from "react";

const images = [
  {
    src: "/jogja.webp",
    alt: "Jogja",
    title: "Yogyakarta",
    description: "The Cultural Heart of Java",
  },
  {
    src: "/jakarta.webp",
    alt: "Jakarta",
    title: "Jakarta",
    description: "The Dynamic Capital City",
  },
  {
    src: "/bali.webp",
    alt: "Bali",
    title: "Bali",
    description: "The Island of Gods",
  },
];

const Slide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  useEffect(() => {
    const preloadImages = async () => {
      const promises = images.map((image) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = image.src;
          img.onload = resolve;
        });
      });
      await Promise.all(promises);
      setIsLoading(false);
    };
    preloadImages();
  }, []);

  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextSlide = () => {
    nextSlide();
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <section id="home" className="relative">
      <div className="relative w-full" data-carousel="slide">
        <div className="relative h-screen md:h-[80vh] lg:h-screen overflow-hidden">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
              data-carousel-item="true">
              <img
                src={image.src}
                className="absolute object-cover w-full h-full"
                alt={image.alt}
                loading="lazy"
                width="1920"
                height="1080"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>

              {/* Text Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white">
                <h2 className="mb-4 text-4xl font-bold text-center transition-transform duration-700 transform translate-y-0 md:text-5xl lg:text-6xl">
                  {image.title}
                </h2>
                <p className="max-w-2xl text-lg text-center transition-transform duration-700 transform translate-y-0 md:text-xl lg:text-2xl">
                  {image.description}
                </p>
              </div>
            </div>
          ))}

          {/* Slide Indicators */}
          <div className="absolute flex space-x-2 -translate-x-1/2 bottom-4 left-1/2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-white w-4" : "bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slide;
