import { Link } from "react-router-dom";
import { useScroll } from "../hooks/use-scroll";
import { NavLink } from "react-router-dom";
// import { links } from '../config/navbar';
const Navbar = ({ scroll = false }) => {
  const scrolled = useScroll(50);
  return (
    <header
      className={`sticky top-0 z-40 flex w-full justify-center bg-background/60 backdrop-blur-xl transition-all ${
        scroll ? (scrolled ? "border-b" : "bg-transparent") : "border-b"
      }`}
    >
      <div className="flex h-14 items-center justify-between py-8 px-12 max-md:px-4 container">
        <Link to="/" className="flex items-center space-x-2">
          <img
            loading="lazy"
            role="presentation"
            decoding="async"
            fetchPriority="high"
            src="/Logo.svg"
            alt=""
            className="w-10 h-12"
          />
        </Link>
        <div className="max-md:hidden flex justify-between space-x-1 items-center">
          <nav className="hidden gap-6 md:flex pl-4">
            <ul className="flex space-x-4 items-center justify-between">
              <NavLink to={"/"}>Home</NavLink>
              <NavLink to={"/corporates/enoc"}>Corporates</NavLink>
              <NavLink to={"/program"}>Program</NavLink>
              <NavLink to={"/dashboard"}>HR Dashboard</NavLink>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
