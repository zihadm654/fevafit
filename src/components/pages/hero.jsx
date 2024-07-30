import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import Banner from "../Banner";

// eslint-disable-next-line react/prop-types
const Hero = ({ img, title, cta }) => {
  return (
    <section>
      <div className="container">
        <div className="max-md:mx-auto relative overflow-hidden max-md:h-[65svh] h-[70svh] bg-gradient-to-tl from-black to-purple bg-blend-darken">
          <Banner src="/banner.jpg" />
          <div className="text-white flex flex-col items-center pt-12 max-md:pt-24 h-full text-center gap-4 space-y-3 px-12 max-md:px-5">
            <img
              loading="lazy"
              src={img}
              alt="icons"
              className="object-cover max-md:h-14 h-22 z-50"
            />
            <h4 className="text-2xl">{title}</h4>
            <Button className="bg-[#6733B5] hover:bg-blue-700 text-white p-6 max-md:py-7 py-8 rounded-xl text-lg">
              <Link
                className="flex items-center justify-center"
                to="https://wa.me/+971522103138"
              >
                {cta}
                <span>
                  <IoIosArrowRoundForward className="size-6" />
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
