import Footer from "@/components/footer";
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
          <div className="max-md:mx-auto relative max-md:h-[75svh] h-[100svh] bg-[#6733B5] ">
            <div className="text-white flex flex-col items-center pt-16 max-md:pt-20 h-full text-center gap-4 space-y-3 px-12 max-md:px-5">
              <img
                src="\Home page- Wireframe.png"
                alt="home"
                className="absolute top-1/2 max-md:top-[70%] left-0 z-50"
                loading="lazy"
              />
              <img
                src="\Frame 8.png"
                alt="home"
                className="absolute top-[100%] max-md:top-[90%] left-0 z-50 max-md:w-1/2"
                loading="lazy"
              />
              <img
                src="\Frame 2517.png"
                alt="home"
                className="absolute top-[112%] max-md:top-[100%] right-0 z-50 max-md:w-1/2"
                loading="lazy"
              />
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
          <div className="min-h-[100svh] container p-12">
            <h3 className="pt-96  max-md:pt-24 mt-10 text-center font-bold text-6xl max-md:text-4xl">
              Key Benefits of Our Corporate <br></br>
              Wellness Program
            </h3>
            <div className="flex justify-center items-center flex-col py-8 text-xl  font-medium gap-2">
              <p className="flex space-x-4 items-center space-between">
                <img
                  src="/Icon.svg"
                  alt=""
                  loading="lazy"
                  className="size-6 mr-2"
                />{" "}
                Gain actionable insights to improve engagement
              </p>
              <p className="flex space-x-4 items-center space-between">
                {" "}
                <img
                  src="/Icon-1.svg"
                  alt=""
                  loading="lazy"
                  className="size-6 mr-2"
                />
                Track progress against corporate wellness goals
              </p>
              <p className="flex space-x-4 items-center space-between">
                {" "}
                <img
                  src="/Icon-2.svg"
                  alt=""
                  loading="lazy"
                  className="size-6 mr-2"
                />
                Monitor employee wellness with real-time data
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
