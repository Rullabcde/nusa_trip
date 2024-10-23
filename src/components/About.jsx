import React from "react";

function About() {
  return (
    <section id="about">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-2xl lg:text-center flex flex-col items-center">
          <h2 className="text-base font-semibold leading-7 text-text">About</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl text-center">
            Profil NusaTrip
          </p>
          <p className="mt-2 text-lg leading-8 text-gray-600 text-center">
            NusaTrip adalah platform travel Indonesia yang dirancang untuk
            memudahkan wisatawan dalam menemukan dan memesan pengalaman wisata
            terbaik di seluruh penjuru Nusantara.
          </p>

          <div className="mt-8 w-full flex justify-center">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/WrF-Ap-iNj8?si=jdSAgBehNzBP73xo"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
