import Img1 from "../assets/asita.png";
import Img2 from "../assets/camacama.png";
import Img3 from "../assets/flores.png";
import Img4 from "../assets/wonderful.png";

function Sponsor() {
  const sponsors = [Img1, Img2, Img3, Img4];

  return (
    <section id="sponsor" className="flex items-center justify-center py-16">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center flex flex-col items-center">
          <p className="mb-10 text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl text-center">
            Kami Juga Bekerjasama Dengan
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 sm:gap-12 md:grid-cols-4 md:gap-6">
          {sponsors.map((src, index) => (
            <div key={index} className="flex justify-center">
              <img
                className="mx-auto h-24 w-auto object-contain"
                src={src}
                alt={`Sponsor logo ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Sponsor;
