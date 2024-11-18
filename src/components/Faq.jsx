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
    <section id="faq" className="pt-16">
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mb-12 text-center">
          <h2 className="text-base font-semibold leading-7 font-lato text-third">
            FAQ
          </h2>
          <p className="text-3xl font-bold tracking-tight font-poppins text-primary sm:text-4xl">
            Paling Sering Ditanyakan
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="mb-4 transition-all duration-300 bg-white border border-gray-200 rounded-lg shadow-lg cursor-pointer hover:shadow-xl">
              <button
                onClick={() => toggleFaq(index)}
                className="flex items-center w-full px-6 py-5 sm:p-6">
                <span className="flex-1 text-lg font-semibold text-left text-secondary">
                  {faq.question}
                </span>
                <FontAwesomeIcon
                  icon={activeIndex === index ? faChevronUp : faChevronDown}
                  className="w-6 h-6 ml-4 transition-transform duration-200 shrink-0 text-third"
                />
              </button>
              {activeIndex === index && (
                <div className="px-6 pb-5 sm:px-8 sm:pb-6 font-lato text-third">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
