import React from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import Fade from "react-reveal/Fade";
import Slide from 'react-reveal/Slide';
const Navbar = () => {
  return (
    <div className="text-white py-5">
      <nav className="flex justify-between items-center">
        <div>
          <h1 className="text-[#34fce5] text-3xl font-bold">JS</h1>
        </div>
        <div className="sm:block hidden">
          <ul className="flex justify-center items-center space-x-5">
            <Slide top delay={400}>
              <li className="hover:text-[#34fce5] cursor-pointer transition ease-in">About me</li>
            </Slide>
            <Slide top delay={300}>
              <li className="hover:text-[#34fce5] cursor-pointer transition ease-in">Projects</li>
            </Slide>
            <Slide top delay={200}>
              <li className="hover:text-[#34fce5] cursor-pointer transition ease-in">Skills</li>
            </Slide>
            <Slide top delay={100}>
              <li className="hover:text-[#34fce5] cursor-pointer transition ease-in">Contacts</li>
            </Slide>
          </ul>
        </div>
        <div className="sm:hidden block">
          <button className="text-3xl">
            <HiBars3BottomRight />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
