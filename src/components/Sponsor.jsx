function Sponsor() {
  const sponsors = [
    { id: 1, src: "/wonderful.webp", alt: "Wonderful Sponsor" },
    { id: 2, src: "/asita.png", alt: "Asita Sponsor" },
    { id: 3, src: "/camacama.png", alt: "Camacama Sponsor" },
  ];

  return (
    <section id="sponsor" className="flex items-center justify-center">
      <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col items-center max-w-2xl mx-auto lg:text-center">
          <h2 className="text-base font-semibold leading-7 font-lato text-third">
            Partner
          </h2>
          <p className="mb-10 text-3xl font-bold tracking-tight text-center font-poppins text-primary sm:text-4xl">
            Kami Juga Bekerjasama Dengan
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-12 md:grid-cols-3 md:gap-6">
          {sponsors.map((sponsor) => (
            <div key={sponsor.id} className="flex justify-center">
              <img
                className="object-contain w-auto h-24 mx-auto"
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
