import NavMobile from "@/components/mobile-nav";
import Navbar from "@/components/navbar";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <NavMobile />
      <Navbar scroll={true} />
      <main className="flex-1">
        <section className="container">
          <div className="max-md:mx-auto relative overflow-hidden max-md:h-[65svh] h-[90svh] bg-[#6733B5]">
            <div className="text-white flex flex-col items-center pt-12 max-md:pt-24 h-full text-center gap-4 space-y-3 px-12 max-md:px-5">
              <h1 className="text-7xl max-md:text-4xl font-bold px-4 max-md:px-0">
                Wellness HR Dashboard
              </h1>
              <p className="text-md">
                Real-time insights into employee health and engagement
              </p>
              <Link
                to="https://wa.me/+971522103138"
                className="relative inline-flex items-center justify-center px-6 py-4 overflow-hidden text-white bg-[#242424] rounded-lg group "
              >
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-80 group-hover:h-80"></span>
                <span className="absolute inset-0 w-full h-full rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                <span className="relative flex justify-center items-center font-semibold text-lg">
                  Book a free consultation call{" "}
                  <IoIosArrowRoundForward className="size-6" />
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
