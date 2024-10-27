function Sponsor() {
  const sponsors = [
    { id: 1, src: "/wonderful.webp", alt: "Wonderful Sponsor" },
    { id: 2, src: "/asita.png", alt: "Asita Sponsor" },
    { id: 3, src: "/camacama.png", alt: "Camacama Sponsor" },
  ];

  return (
    <section id="sponsor" className="flex items-center justify-center py-16">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center flex flex-col items-center">
          <h2 className="text-base font-semibold font-lato leading-7 text-third">
            Partner
          </h2>
          <p className="mb-10 text-3xl font-bold font-poppins tracking-tight text-primary sm:text-4xl text-center">
            Kami Juga Bekerjasama Dengan
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-12 md:grid-cols-3 md:gap-6">
          {sponsors.map((sponsor) => (
            <div key={sponsor.id} className="flex justify-center">
              <img
                className="mx-auto h-24 w-auto object-contain"
                src={sponsor.src}
                alt={sponsor.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Sponsor;
