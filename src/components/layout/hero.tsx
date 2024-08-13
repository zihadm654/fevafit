import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import Banner from "../Banner";
const Hero = () => {
  return (
    <section>
      <div className="container">
        <div className="max-md:mx-auto relative overflow-hidden max-md:h-[65svh] h-[85svh] bg-gradient-to-tl from-black to-purple bg-blend-darken">
          <Banner src="/banner.jpg" />
          <div className="text-white flex flex-col items-center pt-12 max-md:pt-24 h-full text-center gap-4 space-y-3 px-12 max-md:px-5">
            <h1 className="text-7xl max-md:text-4xl font-bold px-4 max-md:px-0">
              Tailored Corporate Wellness Programs
            </h1>
            <p className="text-md">Elevate Your Employees Well-Being</p>
            <Link
              to="https://wa.me/+971522103138"
              className="relative inline-flex items-center justify-center px-6 py-4 overflow-hidden text-white bg-[#6733B5] rounded-lg group "
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-80 group-hover:h-80"></span>
              <span className="absolute inset-0 w-full h-full rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
              <span className="relative flex justify-center items-center font-semibold text-lg">
                Book a free consultation call{" "}
                <IoIosArrowRoundForward className="size-6" />
              </span>
            </Link>
            {/* <Button className="bg-[#6733B5] hover:bg-blue-700 text-white p-6 max-md:py-7 py-8 rounded-xl text-lg">
              <Link
                className="flex items-center justify-center"
                to="https://wa.me/+971522103138"
              >
                Book a free consultation call
                <IoIosArrowRoundForward className="size-6" />
              </Link>
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
