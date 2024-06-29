import { BiLocationPlus } from "react-icons/bi"
import { BsInstagram, BsTelephone } from "react-icons/bs"
import { FaLinkedin } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
    <footer className="container grid grid-cols-2 max-md:grid-cols-1 gap-3 p-12 bg-gray-300 rounded-md">
        <div className="flex items-center justify-start space-x-4 gap-3">
            <img src="/Logo.svg" alt="logo" />
            <ul>
                <li className="flex items-center justify-start space-x-3 gap-2"><MdEmail className="size-5 text-purple-600"/>
                <Link to="mailto:badar@fevafit.co">badar@fevafit.co</Link>
                </li>
                <li className="flex items-center justify-start space-x-3 gap-2"><BsTelephone className="size-5 text-purple-600"/> +911543258744</li>
                <li className="flex items-center justify-start space-x-3 gap-2"><BiLocationPlus  className="size-5 text-purple-600"/> Dubai,UAE</li>
            </ul>
        </div>
        <div className="flex justify-start space-x-3 gap-3 flex-col max-md:items-start">
            <ul className="flex items-center justify-end space-x-4 gap-3 font-semibold">
                <li><Link to="#">Home</Link></li>
                <li><Link to="#">About Us</Link></li>
                <li><Link to="#">Testimonials</Link></li>
                <li><Link to="#">Contact</Link></li>
            </ul>
            <ul className="flex items-center justify-end space-x-3 gap-2">
                <h3>Follow Us</h3>
                <li><Link to="https://www.linkedin.com/company/feva-fit/" target="blank">
                <FaLinkedin className="size-6 text-purple-700" /></Link></li>
                <li><Link to="https://www.instagram.com/fevafit.corporate/" target="blank"><BsInstagram className="size-6 text-purple-700"/></Link></li>
            </ul>
        </div>
        <div className="col-span-2 max-md:col-span-1 py-2">
        <hr className="border-gray-400 py-2" />
        <p className="text-center ">@ Fevafit 2023 All right reserved</p>
        </div>
    </footer>
    </>
  )
}

export default Footer