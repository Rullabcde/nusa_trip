import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const faqData = [
  {
    question: "Apa itu NusaTrip?",
    answer:
      "NusaTrip adalah platform perjalanan yang menawarkan berbagai paket wisata ke berbagai destinasi di Indonesia. Kami menyediakan pengalaman unik yang mencakup akomodasi, transportasi, dan aktivitas menarik, dengan fokus pada keindahan alam, budaya, dan petualangan.",
  },
  {
    question: "Bagaimana cara memesan paket wisata?",
    answer:
      "Anda dapat memesan paket wisata melalui situs web NusaTrip. Pilih paket yang Anda inginkan, isi formulir pemesanan dengan detail yang diperlukan, dan lakukan pembayaran. Setelah konfirmasi, Anda akan menerima informasi lebih lanjut mengenai itinerari dan persiapan perjalanan.",
  },
  {
    question: "Apa saja yang termasuk dalam paket wisata?",
    answer:
      "Setiap paket wisata NusaTrip biasanya mencakup akomodasi, transportasi, makanan, dan aktivitas atau tur yang telah ditentukan. Beberapa paket juga menawarkan pemandu wisata dan layanan tambahan, seperti kelas budaya atau pengalaman lokal.",
  },
  {
    question: "Apakah NusaTrip menawarkan paket wisata untuk kelompok besar?",
    answer:
      "Ya, NusaTrip menyediakan paket wisata khusus untuk kelompok besar. Kami dapat menyesuaikan itinerari dan layanan sesuai kebutuhan grup Anda. Untuk informasi lebih lanjut, silakan hubungi tim kami untuk mendapatkan penawaran yang sesuai.",
  },
  {
    question: "Bagaimana jika saya ingin membatalkan atau mengubah pemesanan?",
    answer:
      "Kebijakan pembatalan dan perubahan pemesanan tergantung pada jenis paket dan syarat yang berlaku. Umumnya, kami menyarankan untuk menghubungi layanan pelanggan NusaTrip sesegera mungkin untuk membahas opsi yang tersedia. Pastikan untuk membaca syarat dan ketentuan yang terkait dengan pemesanan Anda.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="mx-auto max-w-2xl lg:text-center flex flex-col items-center">
            <h2 className="text-base font-semibold leading-7 text-gray-700">
              FAQ
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl text-center">
              Paling Sering Ditanyakan
            </p>
          </div>
          <div className="max-w-3xl mx-auto mt-8 md:mt-16">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="transition-all duration-300 bg-white border border-gray-200 shadow-lg rounded-lg cursor-pointer mb-4 hover:shadow-xl transform hover:scale-105">
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex items-center justify-between w-full px-6 py-5 sm:p-8">
                  <span className="text-lg font-semibold text-gray-800">
                    {faq.question}
                  </span>
                  <FontAwesomeIcon
                    icon={activeIndex === index ? faChevronUp : faChevronDown}
                    className="w-6 h-6 text-gray-500 transition-transform duration-200"
                  />
                </button>
                {activeIndex === index && (
                  <div className="px-6 pb-5 sm:px-8 sm:pb-6 text-gray-600">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
