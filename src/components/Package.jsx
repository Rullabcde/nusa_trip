import React, { useState } from "react";

const packages = [
  {
    title: "Paket Pesona Bali",
    description:
      "Nikmati keindahan pulau Bali dengan paket lengkap ini, yang mencakup kunjungan ke tempat-tempat ikonik seperti Ubud, Tanah Lot, dan Pantai Kuta.",
    imgSrc: "/bali.jpg",
    alt: "Bali",
  },
  {
    title: "Paket Keajaiban Komodo",
    description:
      "Jelajahi pulau-pulau menakjubkan di Taman Nasional Komodo, rumah bagi hewan purba, Komodo Dragon.",
    imgSrc: "/komodo.jpg",
    alt: "Komodo",
  },
  {
    title: "Paket Eksplorasi Yogyakarta",
    description:
      "Temukan kekayaan budaya dan sejarah Yogyakarta melalui paket ini, yang mencakup kunjungan ke Candi Borobudur, Candi Prambanan, dan Keraton Yogyakarta.",
    imgSrc: "/jogja.jpg",
    alt: "Jogja",
  },
];

const PackageItem = ({ title, description, imgSrc, onSelect }) => (
  <div className="grid gap-6 rounded-md border border-solid border-gray-300 p-8 md:p-10">
    <img
      src={imgSrc}
      alt={`Gambar dari ${title}`}
      className="inline-block h-16 w-16 object-cover rounded-full"
    />
    <h3 className="text-xl font-semibold text-secondary font-poppins">
      {title}
    </h3>
    <p className="text-base text-third -mt-4 font-lato">{description}</p>
    <button
      onClick={() => onSelect(title, description)}
      className="mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-secondary">
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
    <section id="package">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-2xl lg:text-center flex flex-col items-center">
          <h2 className="text-base font-semibold leading-7 text-third font-lato">
            Package
          </h2>
          <p className="mb-8 text-3xl font-bold font-poppins tracking-tight text-primary sm:text-4xl text-center">
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
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg max-w-lg mx-auto">
              <h3 className="text-xl font-semibold font-poppins mb-4">
                {selectedPackage.title}
              </h3>
              <p className="text-base font-lato text-gray-700 mb-6">
                {selectedPackage.description}
              </p>
              <button
                onClick={handleSendWhatsApp}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                Kirim ke WhatsApp
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="mt-4 px-4 py-2 text-gray-500 hover:text-gray-700">
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
