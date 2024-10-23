const menuItems = [
  {
    title: "Layanan 24/7",
    description:
      "Tim customer service yang siap membantu Anda kapan saja, dari konsultasi hingga pengaduan masalah.",
    icon: "fas fa-headset",
  },
  {
    title: "Reservasi Penginapan",
    description:
      "Pilihan akomodasi terbaik mulai dari hotel mewah, vila, hingga homestay lokal di berbagai destinasi di Indonesia.",
    icon: "fas fa-hotel",
  },
  {
    title: "Diskon dan Promo",
    description:
      "Diskon menarik dan promo musiman untuk perjalanan hemat dan menyenangkan.",
    icon: "fas fa-tag",
  },
  {
    title: "Sewa Kendaraan",
    description:
      "Layanan sewa mobil dan motor untuk mempermudah mobilitas Anda selama liburan.",
    icon: "fas fa-car",
  },
];

function Facility() {
  return (
    <section id="facility">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-2xl lg:text-center flex flex-col items-center">
          <h2 className="text-base font-semibold leading-7 text-text">
            Services
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl text-center">
            Layanan Kami
          </p>
          <p className="mt-2 text-lg leading-8 text-gray-600 text-center">
            NusaTrip menyediakan berbagai layanan yang dapat wisatawan gunakan
            dan manfaatkan dalam proses perjalanan mereka.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:slate-gray-500 hover:shadow-slate-500/10"
              href="#">
              <div className="text-center mb-4 text-4xl text-black">
                <i className={item.icon}></i>
              </div>
              <h2 className="mt-4 text-xl font-bold text-black">
                {item.title}
              </h2>
              <p className="mt-1 text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Facility;
