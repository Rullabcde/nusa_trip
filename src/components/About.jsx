import React from "react";

function About() {
  return (
    <section id="about">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-2xl lg:text-center flex flex-col items-center">
          <h2 className="text-base font-semibold font-lato leading-7 text-third">
            About
          </h2>
          <p className="text-3xl font-bold tracking-tight font-poppins text-primary sm:text-4xl text-center">
            Profil NusaTrip
          </p>
          <p className="mt-2 text-lg leading-8 text-secondary text-center font-lato">
            NusaTrip adalah platform travel Indonesia yang dirancang untuk
            memudahkan wisatawan dalam menemukan dan memesan pengalaman wisata
            terbaik di seluruh penjuru Nusantara.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
