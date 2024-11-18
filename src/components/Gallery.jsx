import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  { src: "/ampat.webp", alt: "Image 1" },
  { src: "/bajo.webp", alt: "Image 2" },
  { src: "/borobudur.webp", alt: "Image 3" },
  { src: "/kelayang.webp", alt: "Image 4" },
  { src: "/likupang.webp", alt: "Image 5" },
  { src: "/mandalika.webp", alt: "Image 6" },
  { src: "/mangunan.webp", alt: "Image 7" },
  { src: "/prambanan.webp", alt: "Image 8" },
  { src: "/toba.webp", alt: "Image 9" },
  { src: "/jogja.webp", alt: "Image 10" },
  { src: "/bali.webp", alt: "Image 11" },
  { src: "/jakarta.webp", alt: "Image 12" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="gallery" className="overflow-hidden">
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="flex flex-col items-center max-w-2xl mx-auto lg:text-center">
          <h2 className="text-base font-semibold leading-7 font-lato text-third">
            Gallery
          </h2>
          <p className="text-3xl font-bold tracking-tight text-center font-poppins text-primary sm:text-4xl">
            Gallery NusaTrip
          </p>
          <p className="mt-2 mb-8 text-lg leading-8 text-center text-secondary font-lato">
            Ini adalah beberapa foto-foto dari NusaTrip yang diambil saat kami
            melakukan perjalanan ke beberapa tempat wisata di Indonesia.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative cursor-pointer group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}>
              <img
                src={image.src}
                alt={image.alt}
                className="object-cover w-full h-48 rounded-lg"
                onClick={() => handleImageClick(image)}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl">
              <button
                onClick={closeModal}
                className="absolute p-2 text-white transition-all bg-black bg-opacity-50 rounded-full top-4 right-4 hover:bg-opacity-75">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <img
                src={selectedImage?.src}
                alt={selectedImage?.alt}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
