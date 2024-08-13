import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import Banner from "../Banner";

// eslint-disable-next-line react/prop-types
const Hero = ({ img, title, cta, background }: any) => {
  return (
    <section>
      <div className="container">
        <div className="max-md:mx-auto relative overflow-hidden max-md:h-[65svh] h-[75svh] bg-gradient-to-tl from-black to-purple bg-blend-darken">
          <Banner src={background} />
          <div className="text-white flex flex-col items-center pt-16 max-md:pt-24 h-full text-center gap-4 space-y-3 px-12 max-md:px-5">
            <img
              loading="lazy"
              src={img}
              alt="icons"
              className="object-cover max-md:h-14 h-20 z-20"
            />
            <h4 className="text-2xl">{title}</h4>
            <Link
              to="https://wa.me/+971522103138"
              className="relative inline-flex items-center justify-center px-6 py-4 overflow-hidden text-white bg-[#6733B5] rounded-lg group "
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-80 group-hover:h-80"></span>
              <span className="absolute inset-0 w-full h-full rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
              <span className="relative flex justify-center items-center font-semibold text-lg">
                {cta}
                <IoIosArrowRoundForward className="size-6" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
