import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeadset,
  faHotel,
  faTag,
  faCar,
} from "@fortawesome/free-solid-svg-icons";

const menuItems = [
  {
    title: "Layanan 24/7",
    description:
      "Tim customer service yang siap membantu Anda kapan saja, dari konsultasi hingga pengaduan masalah.",
    icon: faHeadset,
  },
  {
    title: "Penginapan",
    description:
      "Pilihan akomodasi terbaik mulai dari hotel mewah, vila, hingga homestay lokal di berbagai destinasi di Indonesia.",
    icon: faHotel,
  },
  {
    title: "Diskon dan Promo",
    description:
      "Diskon menarik dan promo musiman untuk perjalanan hemat dan menyenangkan.",
    icon: faTag,
  },
  {
    title: "Sewa Kendaraan",
    description:
      "Layanan sewa mobil dan motor untuk mempermudah mobilitas Anda selama liburan.",
    icon: faCar,
  },
];

function Services() {
  return (
    <section id="services">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-2xl lg:text-center flex flex-col items-center">
          <h2 className="text-base font-semibold font-lato leading-7 text-third">
            Services
          </h2>
          <p className="text-3xl font-bold tracking-tight font-poppins text-primary sm:text-4xl text-center">
            Layanan Kami
          </p>
          <p className="mt-2 text-lg leading-8 font-lato text-secondary text-center">
            NusaTrip menyediakan berbagai layanan yang dapat wisatawan gunakan
            dan manfaatkan dalam proses perjalanan mereka.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="block rounded-xl border border-gray-400 p-8 shadow-lg transition hover:border-primary hover:shadow-primary/10">
              <div className="text-center mb-4 text-4xl text-primary">
                <FontAwesomeIcon icon={item.icon} />
              </div>
              <h2 className="mt-4 text-xl font-bold font-poppins text-secondary text-center">
                {item.title}
              </h2>
              <p className="mt-1 text-sm text-third font-lato text-center">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
