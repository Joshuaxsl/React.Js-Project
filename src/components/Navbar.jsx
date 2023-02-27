import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="px-40">
      <nav
        className="flex justify-between items-center py-5 text-white "
        id="Navbar"
      >
        <div>
          <p className=" text-2xl font-bold">Joshua Santos</p>
          <p className="">Web Developer</p>
        </div>
        <div>
          <ul className="space-x-8 flex">
            <li>
              {/* Link to about */}
              <Link
                to="About"
                activeClass="active"
                smooth={true}
                spy={true}
                className="cursor-pointer
                hover:text-[#00FF83]
                "
              >
                About me
              </Link>
            </li>
            <li>
              {/* Link to Projects */}
              <Link
                to="Projects"
                activeClass="active"
                smooth={true}
                spy={true}
                className="cursor-pointer
                hover:text-[#00FF83]
                "
              >
                Projects
              </Link>
            </li>
            <li>
              {/* Link to Techstacks */}
              <Link
                to="Tech"
                activeClass="active"
                smooth={true}
                spy={true}
                className="cursor-pointer
                hover:text-[#00FF83]
                "
              >
                Stacks
              </Link>
            </li>
            <li>
              {/* contacts */}
              <Link
                to="Contacts"
                activeClass="active"
                smooth={true}
                spy={true}
                className="cursor-pointer
                hover:text-[#00FF83]
                "
              >
                Contacts
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
