import React, { useState } from "react";

const packages = [
  {
    title: "Paket Pesona Bali",
    description:
      "Nikmati keindahan pulau Bali dengan paket lengkap ini, yang mencakup kunjungan ke tempat-tempat ikonik seperti Ubud, Tanah Lot, dan Pantai Kuta.",
    imgSrc: "/bali.webp",
    alt: "Bali",
  },
  {
    title: "Paket Keajaiban Komodo",
    description:
      "Jelajahi pulau-pulau menakjubkan di Taman Nasional Komodo, rumah bagi hewan purba, Komodo Dragon.",
    imgSrc: "/komodo.webp",
    alt: "Komodo",
  },
  {
    title: "Paket Eksplorasi Yogyakarta",
    description:
      "Temukan kekayaan budaya dan sejarah Yogyakarta melalui paket ini, yang mencakup kunjungan ke Candi Borobudur, Candi Prambanan, dan Keraton Yogyakarta.",
    imgSrc: "/jogja.webp",
    alt: "Jogja",
  },
];

const PackageItem = ({ title, description, imgSrc, onSelect }) => (
  <div className="grid gap-6 p-8 border border-gray-300 border-solid rounded-md md:p-10">
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
      onClick={() => onSelect(title, description)}
      className="px-4 py-2 mt-4 text-white rounded bg-primary hover:bg-secondary">
      Pilih Paket
    </button>
  </div>
);

const Package = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState({
    title: "",
    description: "",
  });

  const handleSelect = (title, description) => {
    setSelectedPackage({ title, description });
    setIsModalOpen(true);
  };

  const handleSendWhatsApp = () => {
    const message = `*Halo,* 👋\n\nSaya tertarik dengan paket *${selectedPackage.title}*.\n\n*Deskripsi:* ${selectedPackage.description}\n\nSilakan hubungi saya untuk informasi lebih lanjut.`;
    const whatsappUrl = `https://wa.me/6281225121872?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="package" className="pt-16">
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
            <PackageItem
              key={index}
              title={packageItem.title}
              description={packageItem.description}
              imgSrc={packageItem.imgSrc}
              onSelect={handleSelect}
            />
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="max-w-lg p-6 mx-auto bg-white rounded-lg">
              <h3 className="mb-4 text-xl font-semibold font-poppins">
                {selectedPackage.title}
              </h3>
              <p className="mb-6 text-base text-gray-700 font-lato">
                {selectedPackage.description}
              </p>
              <button
                onClick={handleSendWhatsApp}
                className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600">
                Kirim ke WhatsApp
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 mt-4 text-gray-500 hover:text-gray-700">
                Tutup
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Package;
