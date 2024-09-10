import { BiLocationPlus } from "react-icons/bi";
import { BsInstagram, BsTelephone } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { IoIosArrowRoundForward } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <footer className="container grid grid-cols-2 max-md:grid-cols-1 gap-3 p-12 max-md:p-6 bg-[#F1F1F1] rounded-md">
        <div className="col-span-2 max-md:col-span-1 py-2">
          <div className="flex items-center justify-between pb-10">
            <h2 className=" text-3xl font-bold">
              Ready to take the next step?{" "}
            </h2>
            <Button className="bg-[#6733B5] rounded-xl text-base font-normal">
              <Link
                target="blank"
                to="https://ajx6hfj6f3e.typeform.com/to/RbwCkYlw"
                className="flex justify-center items-center"
              >
                Get in touch <IoIosArrowRoundForward className="size-6" />
              </Link>
            </Button>
          </div>
          <hr className="bg-[#CCCCCC]" />
        </div>
        <div className="flex items-center justify-start space-x-4 gap-3">
          <img src="/Logo.svg" alt="logo" loading="lazy" />
          <ul>
            <li className="flex items-center justify-start space-x-3 gap-2">
              <MdEmail className="size-5 text-purple-700" />
              <Link to="mailto:badar@fevafit.co">badar@fevafit.co</Link>
            </li>
            <li className="flex items-center justify-start space-x-3 gap-2">
              <BsTelephone className="size-5 text-purple-700" /> +971522103138
            </li>
            <li className="flex items-center justify-start space-x-3 gap-2">
              <BiLocationPlus className="size-5 text-purple-700" /> Dubai,UAE
            </li>
          </ul>
        </div>
        <div className="flex justify-start space-x-3 gap-3 flex-col max-md:items-start">
          <ul className="flex items-center justify-end space-x-4 gap-3 font-semibold">
            <li>
              <Link to="#">Home</Link>
            </li>
            <li>
              <Link to="#">About Us</Link>
            </li>
            <li>
              <Link to="#">Contact</Link>
            </li>
          </ul>
          <ul className="flex items-center justify-end space-x-3 gap-2">
            <h3>Follow Us</h3>
            <li>
              <Link
                to="https://www.linkedin.com/company/feva-fit/"
                target="blank"
              >
                <FaLinkedin className="size-6 text-purple-700" />
              </Link>
            </li>
            <li>
              <Link
                to="https://www.instagram.com/fevafit.corporate/"
                target="blank"
              >
                <BsInstagram className="size-6 text-purple-700" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-2 max-md:col-span-1 py-2">
          <p className="text-center ">@ Fevafit 2023 All right reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
