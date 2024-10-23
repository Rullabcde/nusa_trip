import React from "react";
import Img1 from "../assets/bali.jpg";
import Img2 from "../assets/komodo.jpg";
import Img3 from "../assets/jogja.jpg";

const services = [
  {
    title: "Paket Pesona Bali",
    description:
      "Nikmati keindahan pulau Bali dengan paket lengkap ini, yang mencakup kunjungan ke tempat-tempat ikonik seperti Ubud, Tanah Lot, dan Pantai Kuta. Paket ini termasuk akomodasi mewah, transportasi pribadi, serta pengalaman budaya seperti kelas memasak dan tari tradisional. Cocok untuk pasangan atau keluarga yang ingin menikmati liburan santai dan penuh eksplorasi.",
    imgSrc: Img1,
  },
  {
    title: "Paket Keajaiban Komodo",
    description:
      "Jelajahi pulau-pulau menakjubkan di Taman Nasional Komodo, rumah bagi hewan purba, Komodo Dragon. Paket ini mencakup snorkeling di Pink Beach, trekking di Pulau Rinca, dan pelayaran di sekitar kepulauan Komodo. Dengan pemandu berpengalaman, Anda akan mendapatkan pengalaman mendalam tentang flora dan fauna unik di area ini. Ideal untuk pecinta alam dan petualangan.",
    imgSrc: Img2,
  },
  {
    title: "Paket Eksplorasi Yogyakarta",
    description:
      "Temukan kekayaan budaya dan sejarah Yogyakarta melalui paket ini, yang mencakup kunjungan ke Candi Borobudur, Candi Prambanan, dan Keraton Yogyakarta. Paket ini juga mencakup pengalaman lokal seperti bersepeda di sekitar pedesaan dan mencicipi kuliner khas. Cocok untuk wisatawan yang ingin merasakan kekayaan budaya dan tradisi Indonesia.",
    imgSrc: Img3,
  },
];

const ServicesItems = ({ title, description, imgSrc }) => (
  <div className="grid gap-6 rounded-md border border-solid border-gray-300 p-8 md:p-10">
    <img
      src={imgSrc}
      alt={title}
      className="inline-block h-16 w-16 object-cover rounded-full"
    />
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="text-sm text-gray-500 -mt-4">{description}</p>
  </div>
);

const Services = () => {
  return (
    <section id="services">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-2xl lg:text-center flex flex-col items-center">
          <h2 className="text-base font-semibold leading-7 text-text">
            Package
          </h2>
          <p className="mt-2 mb-8 text-3xl font-bold tracking-tight text-black sm:text-4xl text-center">
            Paket NusaTrip
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:gap-6">
          {services.map((service, index) => (
            <ServicesItems
              key={index}
              title={service.title}
              description={service.description}
              imgSrc={service.imgSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
