import { Link } from 'react-router-dom';
import { useScroll } from '../hooks/use-scroll'
import { IoIosArrowDown } from 'react-icons/io';
import { TbWorld } from 'react-icons/tb';
// import { links } from '../config/navbar';
// eslint-disable-next-line react/prop-types
const Navbar = ({ scroll=false }) => {
    const scrolled = useScroll(50);
  return (
    <header
    className={`sticky top-0 z-40 flex w-full justify-center bg-background/60 backdrop-blur-xl transition-all ${
      scroll ? (scrolled ? "border-b" : "bg-transparent") : "border-b"
    }`}
  >
    <div className="flex h-14 items-center justify-between py-8 px-12 container"
      >
        <div className='flex items-center justify-between space-x-4'>
            <Link to="/" className="flex items-center space-x-2">
            <img src="/Logo.svg" alt="" className='w-10 h-12'/>
          </Link>
            <nav className="hidden gap-6 md:flex pl-4">
                <ul className='flex space-x-4 items-center justify-between'>
                    <Link className='border-b-2 border-b-orange-400 text-orange-400' to={'/'}>Home</Link>
                    <Link to={'/'}>Testimonial</Link>
                    <Link to={'/'}>Corporates</Link>
                </ul>
            </nav>
        </div>
        <div className='max-md:hidden flex justify-between space-x-1 items-center'>
        <TbWorld  className='size-5'/>
        <IoIosArrowDown className='size-5'/>
        </div>
      </div>
  </header>
  )
}

export default Navbar