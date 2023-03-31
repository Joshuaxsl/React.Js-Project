import React from "react";
import { FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { RxDiscordLogo } from "react-icons/rx";
import { MdOutlineOpenInNew } from "react-icons/md";
import Fade from "react-reveal/Fade";
const Homepage = () => {
  return (
    <div className="text-white h-screen flex justify-center items-center lg:px-20 pb-40">
      <div className="space-y-7">
        <div className="">
          <Fade bottom delay={700}>
            <div className="p-3">
              <h1 className="text-xl text-[#34FCE5] font-mono">Hello, I am </h1>
            </div>
          </Fade>

          <Fade bottom delay={800}>
            <div>
              <h1 className="text-[3rem] font-bold">Joshua Santos.</h1>
            </div>
          </Fade>
          <Fade bottom delay={900}>
            <div>
              <h1 className="text-[2.8rem] font-bold text-gray-400 leading-none">
                Learning and building things in the web.
              </h1>
            </div>
          </Fade>
        </div>

        <Fade bottom delay={1000}>
          <div className="text-gray-400 font-mono">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur quae cum beatae facilis rerum minima repudiandae
            aliquid aperiam unde.
          </div>
        </Fade>
        <Fade bottom delay={1100}>
          <div className="flex jc items-center text-3xl space-x-3 cursor-pointer text-gray-500">
            <FaGithub className="hover:scale-110 hover:text-violet-700 transition ease-in " />
            <FaTwitter className="hover:scale-110 hover:text-[#0c6add] transition ease-in " />
            <FaInstagram className="hover:scale-110 hover:text-[#f2346d] transition ease-in " />
          </div>
        </Fade>

        <div className="sm:flex space-y-5 sm:space-y-0 sm:space-x-5">
          <Fade bottom delay={1200}>
            <div className="px-5 py-3 w-fit rounded font-bold font-mono border-2 border-[#34FCE5] text-[#34FCE5] flex justify-center items-center space-x-3 hover:bg-[#34fce541] cursor-pointer">
              <RxDiscordLogo />
              <h1>Join to my Discord Server</h1>
            </div>
          </Fade>
          <Fade bottom delay={1300}>
            <div className="flex px-5 py-3 w-fit rounded font-bold font-mono border-2 border-[#34FCE5] text-[#34FCE5] justify-center items-center space-x-3 cursor-pointer hover:bg-[#34fce541]">
              <div>
                <MdOutlineOpenInNew />
              </div>
              <div className="">
                <a
                  href="www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
