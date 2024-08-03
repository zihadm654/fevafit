import { NavLink } from "react-router-dom";
import { Card, CardContent } from "../ui/card";
import { IoIosArrowForward } from "react-icons/io";

const Powered = () => {
  return (
    <section className="py-14 text-muted-foreground max-md:py-8">
      <div>
        <div className="container max-6xl p-12 max-md:p-6">
          <h2 className="text-center text-3xl font-bold uppercase">
            Trusted by Leading Organisations
          </h2>
          <div className="mt-10 grid grid-cols-3 max-md:grid-cols-1 gap-6">
            <Card className="text-center flex items-center justify-center flex-col rounded-xl shadow-xl overflow-hidden">
              <div className="flex items-center justify-center bg-gray-500 h-full w-full p-10">
                <img
                  loading="lazy"
                  src="/wellx.png"
                  alt="icons"
                  className="object-cover max-md:h-13"
                />
              </div>
              <CardContent className="max-w-xs flex items-center justify-around flex-col gap-3 py-4">
                Enhanced employee satisfaction and morale with exceptional
                wellness initiatives
                <NavLink
                  className="flex items-center justify-center text-[#6733B5] font-semibold"
                  to="/corporates/wellx"
                >
                  Learn more <IoIosArrowForward />
                </NavLink>
              </CardContent>
            </Card>
            <Card className="text-center flex items-center justify-center flex-col shadow-xl overflow-hidden rounded-xl">
              <div className="flex items-center justify-center bg-gray-500 h-full w-full p-10">
                <img
                  loading="lazy"
                  src="/enoc.png"
                  alt="icons"
                  className="object-cover max-md:h-13 h-16"
                />
              </div>
              <CardContent className="max-w-xs flex items-center justify-around flex-col gap-3 py-4">
                Training 750+ healthier employees in 2024 with our tailored
                wellness programs
                <NavLink
                  className="flex items-center justify-center text-[#6733B5] font-semibold"
                  to="/corporates/enoc"
                >
                  Learn more{" "}
                  <span>
                    <IoIosArrowForward />
                  </span>
                </NavLink>
              </CardContent>
            </Card>
            <Card className="overflow-hidden text-center flex items-center justify-center flex-col shadow-xl rounded-xl">
              <div className="flex items-center justify-center bg-gray-500 h-full w-full p-8">
                <img
                  loading="lazy"
                  src="/image 39.png"
                  alt="icons"
                  className="object-cover aspect-auto max-md:h-13"
                />
              </div>
              <CardContent className="max-w-xs flex items-center justify-around flex-col gap-3 py-7">
                Motivated and productive workforce via personalized wellness
                programs
                <NavLink
                  className="flex items-center justify-center text-[#6733B5] font-semibold"
                  to="/corporates/onplan"
                >
                  Learn more <IoIosArrowForward />
                </NavLink>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Powered;
