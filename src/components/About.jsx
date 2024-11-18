import React from "react";

function About() {
  return (
    <section id="about">
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="flex flex-col items-center max-w-2xl mx-auto lg:text-center">
          <h2 className="text-base font-semibold leading-7 font-lato text-third">
            About
          </h2>
          <p className="text-3xl font-bold tracking-tight text-center font-poppins text-primary sm:text-4xl">
            Profil NusaTrip
          </p>
          <p className="mt-2 text-lg leading-8 text-center text-secondary font-lato">
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
