import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  { src: "/ampat.jpg", alt: "Image 1" },
  { src: "/bajo.jpg", alt: "Image 2" },
  { src: "/borobudur.jpg", alt: "Image 3" },
  { src: "/kelayang.jpg", alt: "Image 4" },
  { src: "/likupang.jpg", alt: "Image 5" },
  { src: "/mandalika.jpg", alt: "Image 6" },
  { src: "/mangunan.jpg", alt: "Image 7" },
  { src: "/prambanan.jpg", alt: "Image 8" },
  { src: "/toba.jpg", alt: "Image 9" },
  { src: "/jogja.jpg", alt: "Image 10" },
  { src: "/bali.jpg", alt: "Image 11" },
  { src: "/jakarta.jpg", alt: "Image 12" },
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
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-2xl lg:text-center flex flex-col items-center">
          <h2 className="text-base font-semibold font-lato leading-7 text-third">
            Gallery
          </h2>
          <p className="text-3xl font-bold tracking-tight font-poppins text-primary sm:text-4xl text-center">
            Gallery NusaTrip
          </p>
          <p className="mt-2 mb-8 text-lg leading-8 text-secondary text-center font-lato">
            Ini adalah beberapa foto-foto dari NusaTrip yang diambil saat kami
            melakukan perjalanan ke beberapa tempat wisata di Indonesia.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}>
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-48 object-cover rounded-lg"
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
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all">
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
