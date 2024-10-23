import React from "react";
import Img1 from "../assets/ampat.jpg";
import Img2 from "../assets/bajo.jpg";
import Img3 from "../assets/borobudur.jpg";
import Img4 from "../assets/kelayang.jpg";
import Img5 from "../assets/likupang.jpg";
import Img6 from "../assets/mandalika.jpg";
import Img7 from "../assets/mangunan.jpg";
import Img8 from "../assets/prambanan.jpg";
import Img9 from "../assets/toba.jpg";
import Img10 from "../assets/jogja.jpg";
import Img11 from "../assets/bali.jpg";
import Img12 from "../assets/jakarta.jpg";

const images = [
  {
    src: Img1,
    alt: "Image 1",
  },
  {
    src: Img2,
    alt: "Image 2",
  },
  {
    src: Img3,
    alt: "Image 3",
  },
  {
    src: Img4,
    alt: "Image 4",
  },
  {
    src: Img5,
    alt: "Image 5",
  },
  {
    src: Img6,
    alt: "Image 6",
  },
  {
    src: Img7,
    alt: "Image 7",
  },
  {
    src: Img8,
    alt: "Image 8",
  },
  {
    src: Img9,
    alt: "Image 9",
  },
  {
    src: Img10,
    alt: "Image 8",
  },
  {
    src: Img11,
    alt: "Image 8",
  },
  {
    src: Img12,
    alt: "Image 8",
  },
];

const Gallery = () => {
  return (
    <section id="gallery">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-2xl lg:text-center flex flex-col items-center">
          <h2 className="text-base font-semibold leading-7 text-text">
            Gallery
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl text-center">
            Gallery Lorem
          </p>
          <p className="mt-2 mb-8 text-lg leading-8 text-gray-600 text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
            error, vero eius cupiditate nam aperiam?
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {images.map((image, index) => (
            <div key={index} className="group cursor-pointer relative">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
