import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

const EventSlider = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const events = [
    {
      title: "Festival Budaya Yogyakarta",
      date: "15-17 November 2024",
      description: "Read more",
      longDescription:
        "Festival Budaya Yogyakarta merupakan perayaan tahunan yang menampilkan kekayaan seni dan budaya lokal. Event ini mencakup pertunjukan tari tradisional, pameran seni, dan bazar kuliner khas Yogyakarta. Para pengunjung dapat menikmati berbagai atraksi budaya dan kegiatan interaktif, serta berkesempatan untuk berpartisipasi dalam workshop seni.",
      location: "Alun-Alun Kidul, Yogyakarta",
      time: "09:00 - 21:00 WIB",
      image: "/festival.jpg",
      alt: "Festival Budaya Yogyakarta",
    },
    {
      title: "Bali Wellness Festival",
      date: "5-7 Desember 2024",
      description: "Read more",
      longDescription:
        "Bali Wellness Festival adalah acara yang didedikasikan untuk kesehatan dan kesejahteraan, menampilkan berbagai sesi yoga, meditasi, dan workshop kesehatan. Dengan pemateri ahli dari berbagai bidang, acara ini bertujuan untuk memberikan inspirasi dan pengetahuan tentang gaya hidup sehat. Pengunjung juga dapat menikmati makanan sehat dan produk organik di bazar festival.",
      location: "The Nusa Dua Beach Hotel & Spa, Bali",
      time: "10:00 - 18:00 WITA",
      image: "/wellness.jpg",
      alt: "Bali Wellness Festival",
    },
    {
      title: "Jakarta Fashion Week",
      date: "25-30 Maret 2024",
      description: "Read more",
      longDescription:
        "Jakarta Fashion Week adalah acara tahunan yang menampilkan koleksi terbaru desainer lokal dan internasional. Selama seminggu penuh, pengunjung dapat menyaksikan pertunjukan fashion, mengikuti seminar, dan berpartisipasi dalam sesi networking di industri mode. Acara ini menjadi platform bagi desainer untuk menunjukkan karya mereka dan meningkatkan industri mode di Indonesia.",
      location: "Senayan City, Jakarta",
      time: "10:00 - 22:00 WIB",
      image: "/fashionweek.jpg",
      alt: "Jakarta Fashion Week",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "80px",
  };

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === "Escape" && isModalOpen) {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleEscKey);
    return () => window.removeEventListener("keydown", handleEscKey);
  }, [isModalOpen]);

  return (
    <section id="event">
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-2xl lg:text-center flex flex-col items-center">
          <h2 className="text-base font-semibold font-lato leading-7 text-third">
            Events
          </h2>
          <p className="text-3xl font-bold font-poppins tracking-tight text-primary sm:text-4xl text-center">
            Event Kami
          </p>
          <p className="mt-2 mb-10 text-lg leading-8 font-lato text-secondary text-center">
            NusaTrip menyediakan beberapa event yang menarik dan pastinya seru
            untuk dinikmati para wisatawan.
          </p>
        </div>
        <div className="overflow-hidden">
          <Slider {...settings}>
            {events.map((event, index) => (
              <div key={index} className="px-2 md:px-4">
                <div
                  className="bg-white rounded-lg shadow-lg overflow-hidden max-w-full cursor-pointer"
                  onClick={() => handleEventClick(event)}>
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 md:h-60 object-cover"
                  />
                  <div className="p-4 md:p-6">
                    <h3 className="text-lg md:text-xl font-semibold font-poppins">
                      {event.title}
                    </h3>
                    <p className="text-third font-lato">{event.date}</p>
                    <p className="mt-2 text-third font-lato">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Custom Modal */}
      {isModalOpen && selectedEvent && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={handleOverlayClick}>
          <motion.div
            className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}>
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold z-10">
              ×
            </button>

            <div className="p-6">
              <h2 className="text-2xl font-bold font-poppins text-gray-900 mb-4">
                {selectedEvent.title}
              </h2>

              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />

              <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Waktu dan Tempat
                  </h3>
                  <div className="space-y-1 text-third">
                    <p className="flex items-center gap-2">
                      <span className="font-medium">Tanggal:</span>{" "}
                      {selectedEvent.date}
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="font-medium">Waktu:</span>{" "}
                      {selectedEvent.time}
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="font-medium">Lokasi:</span>{" "}
                      {selectedEvent.location}
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Deskripsi Event
                  </h3>
                  <p className="text-third font-lato leading-relaxed">
                    {selectedEvent.longDescription}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default EventSlider;
