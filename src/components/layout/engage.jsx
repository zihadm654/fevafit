import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Card, CardDescription, CardTitle } from "../ui/card";
import { IoIosArrowRoundForward } from "react-icons/io";

const Engage = () => {
  return (
    <div className="container px-12 py-28 max-md:px-4 max-md:py-16">
      <Card className="bg-[#6733B5] text-white text-center flex flex-col items-center justify-center space-y-6 p-20 max-md:p-8 relative rounded-2xl overflow-hidden">
        <img
          loading="lazy"
          src="/Vector.svg"
          alt=""
          className="absolute top-18 left-0 object-contain w-full "
        />
        <CardTitle className="z-20 text-5xl max-md:text-3xl">
          Engage with Feva Fit
        </CardTitle>
        <CardDescription className="z-20 px-24 text-lg mb-5 text-white max-md:px-2">
          Partner with Feva Fit for corporate wellness programs as unique as
          your team. Don't just take steps; leap forward in your organization's
          health and vitality journey
        </CardDescription>
        <Link
          to="https://wa.me/+971522103138"
          className="relative inline-flex items-center justify-center max-md:px-2 px-6 py-4 overflow-hidden text-white bg-[#E28B24] rounded-lg group "
        >
          <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-80 group-hover:h-80"></span>
          <span className="absolute inset-0 w-full h-full rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
          <span className="relative flex justify-center items-center font-semibold text-lg">
            Discover Custom Wellness{" "}
            <IoIosArrowRoundForward className="size-7" />
          </span>
        </Link>
      </Card>
    </div>
  );
};

export default Engage;
