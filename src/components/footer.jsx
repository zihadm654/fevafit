import { BiLocationPlus } from "react-icons/bi"
import { BsInstagram, BsTelephone } from "react-icons/bs"
import { FaLinkedin } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
    <footer className="container max-w-6xl grid grid-cols-2 max-md:grid-cols-1 gap-3 py-10  bg-gray-300 ">
        <div className="flex items-center max-md:justify-center justify-start space-x-4 gap-3">
            <img src="/Logo.svg" alt="logo" />
            <ul>
                <li className="flex items-center justify-betweenspace-x-3 gap-2"><MdEmail className="size-5 text-purple-600"/> sample@gmail.com</li>
                <li className="flex items-center justify-betweenspace-x-3 gap-2"><BsTelephone className="size-5 text-purple-600"/> +911543258744</li>
                <li className="flex items-center justify-betweenspace-x-3 gap-2"><BiLocationPlus className="size-5 text-purple-600"/> Dubai,UAE</li>
            </ul>
        </div>
        <div className="flex justify-center space-x-4 gap-3 flex-col max-md:items-center">
            <ul className="flex items-center justify-end space-x-4 gap-3 font-semibold">
                <li><Link to="#">Home</Link></li>
                <li><Link to="#">About Us</Link></li>
                <li><Link to="#">Testimonials</Link></li>
                <li><Link to="#">Contact</Link></li>
            </ul>
            <ul className="flex items-center justify-end space-x-3 gap-2">
                <h3>Follow Us</h3>
                <li><Link to="#"><BsInstagram className="size-6 text-purple-700"/></Link></li>
                <li><Link to="#">
                <FaLinkedin className="size-6 text-purple-700" /></Link></li>
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