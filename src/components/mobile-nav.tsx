import { useState } from "react";
import { cn } from "../lib/utils";
import { X } from "lucide-react";
import { Menu } from "lucide-react";
import { NavLink } from "react-router-dom";

const NavMobile = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          "fixed right-6 top-2.5 z-50 rounded-full p-2 transition-colors duration-200 hover:bg-muted focus:outline-none active:bg-muted md:hidden",
          open && "hover:bg-muted active:bg-muted"
        )}
      >
        {open ? (
          <X className="size-5 text-muted-foreground" />
        ) : (
          <Menu className="size-5 text-muted-foreground" />
        )}
      </button>
      <nav
        className={cn(
          "fixed inset-0 z-30 hidden w-full overflow-auto bg-background px-6 py-16 lg:hidden bg-white",
          open && "block"
        )}
      >
        <ul className="grid divide-y divide-muted">
          <li className="py-3">
            <NavLink onClick={(prev) => setOpen(!prev)} to={"/"}>
              Home
            </NavLink>
          </li>
          <li className="py-3">
            <NavLink onClick={(prev) => setOpen(!prev)} to={"/corporates/enoc"}>
              Corporates
            </NavLink>
          </li>
          <li className="py-3">
            <NavLink onClick={(prev) => setOpen(!prev)} to={"/program"}>
              Program
            </NavLink>
          </li>
          <li className="py-3">
            <NavLink onClick={(prev) => setOpen(!prev)} to={"/dashboard"}>
              HR Dashboard
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavMobile;
