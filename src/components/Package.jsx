import React, { useState } from "react";

const packages = [
  {
    title: "Paket Pesona Bali",
    description:
      "Nikmati keindahan pulau Bali dengan paket lengkap ini, yang mencakup kunjungan ke tempat-tempat ikonik seperti Ubud, Tanah Lot, dan Pantai Kuta.",
    imgSrc: "/bali.webp",
    alt: "Bali",
    price: "Rp 5.000.000",
    duration: "4 Hari 3 Malam",
    includes: [
      "Hotel Bintang 4",
      "Transport Private AC",
      "Tour Guide",
      "Tiket Masuk Wisata",
      "Makan 3x Sehari",
    ],
  },
  {
    title: "Paket Keajaiban Komodo",
    description:
      "Jelajahi pulau-pulau menakjubkan di Taman Nasional Komodo, rumah bagi hewan purba, Komodo Dragon.",
    imgSrc: "/komodo.webp",
    alt: "Komodo",
    price: "Rp 6.500.000",
    duration: "3 Hari 2 Malam",
    includes: [
      "Hotel Bintang 4",
      "Transport Private AC",
      "Tour Guide",
      "Tiket Masuk Wisata",
      "Makan 3x Sehari",
    ],
  },
  {
    title: "Paket Eksplorasi Yogyakarta",
    description:
      "Temukan kekayaan budaya dan sejarah Yogyakarta melalui paket ini, yang mencakup kunjungan ke Candi Borobudur, Candi Prambanan, dan Keraton Yogyakarta.",
    imgSrc: "/jogja.webp",
    alt: "Jogja",
    price: "Rp 3.500.000",
    duration: "3 Hari 2 Malam",
    includes: [
      "Hotel Bintang 4",
      "Transport Private AC",
      "Tour Guide",
      "Tiket Masuk Wisata",
      "Makan 3x Sehari",
    ],
  },
];

const PackageItem = ({
  title,
  description,
  imgSrc,
  price,
  duration,
  includes,
  onSelect,
}) => (
  <div className="grid gap-6 p-8 transition-all duration-300 border border-gray-300 border-solid rounded-lg hover:shadow-xl md:p-10">
    <img
      src={imgSrc}
      alt={`Gambar dari ${title}`}
      className="inline-block object-cover w-16 h-16 rounded-full"
    />
    <h3 className="text-xl font-semibold text-secondary font-poppins">
      {title}
    </h3>
    <p className="-mt-4 text-base text-third font-lato">{description}</p>
    <button
      onClick={() => onSelect(title, description, price, duration, includes)}
      className="px-4 py-2 mt-4 text-white transition-colors duration-300 rounded bg-primary hover:bg-secondary">
      Pilih Paket
    </button>
  </div>
);

const Package = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState({
    title: "",
    description: "",
    price: "",
    duration: "",
    includes: [],
  });

  const handleSelect = (title, description, price, duration, includes) => {
    setSelectedPackage({ title, description, price, duration, includes });
    setIsModalOpen(true);
  };

  const handleSendWhatsApp = () => {
    const message = `*Halo NusaTrip!* 👋\n
*Saya tertarik dengan:*
${selectedPackage.title} ✨\n
*Detail Paket:*
📅 Durasi: ${selectedPackage.duration}
💰 Harga: ${selectedPackage.price}\n
*Fasilitas yang didapat:*
${selectedPackage.includes.map((item) => `✅ ${item}`).join("\n")}\n
*Deskripsi:*
${selectedPackage.description}\n
Mohon informasi lebih lanjut mengenai paket ini. Terima kasih! 🙏`;

    const whatsappUrl = `https://wa.me/62123456789?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="package">
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="flex flex-col items-center max-w-2xl mx-auto lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-third font-lato">
            Package
          </h2>
          <p className="mb-8 text-3xl font-bold tracking-tight text-center font-poppins text-primary sm:text-4xl">
            Paket NusaTrip
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:gap-6">
          {packages.map((packageItem, index) => (
            <PackageItem key={index} {...packageItem} onSelect={handleSelect} />
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="relative w-full max-w-lg p-6 mx-4 bg-white shadow-2xl rounded-xl md:mx-auto">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute p-2 text-gray-400 transition-colors rounded-full hover:text-gray-600 hover:bg-gray-100 top-4 right-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {/* Modal content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-secondary font-poppins">
                  {selectedPackage.title}
                </h3>

                <div className="flex gap-4 py-2">
                  <div className="px-3 py-1 text-sm font-medium rounded-full text-primary bg-primary/10">
                    {selectedPackage.duration}
                  </div>
                  <div className="px-3 py-1 text-sm font-medium text-green-600 bg-green-100 rounded-full">
                    {selectedPackage.price}
                  </div>
                </div>

                <div className="py-2">
                  <h4 className="mb-2 text-sm font-semibold text-gray-600">
                    Deskripsi:
                  </h4>
                  <p className="text-gray-600 font-lato">
                    {selectedPackage.description}
                  </p>
                </div>

                <div className="py-2">
                  <h4 className="mb-2 text-sm font-semibold text-gray-600">
                    Fasilitas:
                  </h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {selectedPackage.includes.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-sm text-gray-600">
                        <svg
                          className="w-4 h-4 text-green-500"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor">
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-3 pt-4">
                  <button
                    onClick={handleSendWhatsApp}
                    className="w-full px-4 py-3 text-white transition-colors duration-300 bg-green-500 rounded-lg hover:bg-green-600">
                    Kirim ke WhatsApp
                  </button>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="w-full px-4 py-3 text-gray-500 transition-colors duration-300 bg-gray-100 rounded-lg hover:bg-gray-200">
                    Tutup
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Package;
