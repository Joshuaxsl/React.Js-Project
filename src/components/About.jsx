import React from "react";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <div className=" flex justify-center items-center text-white font-mono xl:px-40 lg:px-32">
      <Fade bottom delay={300}>
        <div className="space-y-10">
          <div className="flex items-center space-x-10">
          <h1 className="text-[3rem] font-bold">About me</h1>
          </div>
          {/* DIV */}
          <div className="flex flex-col sm:flex-row sm:space-x-10">
            <div>
              <div className="flex justify-center items-center p-10 sm:p-0 ">
                <img src={require("./images/profile1.jpeg")} alt="Display" className="rounded" />
              </div>
            </div>
            <div className="flex justify-center items-center leading-tight">
              <div className="space-y-5 text-gray-500">
                <h1 className="">
                  Hi my name is
                  <span className="text-[#34FCE5] font-bold">
                    {" "}
                    Joshua Santos
                  </span>
                  , I am from Pampanga, Philippines. I took{" "}
                  <span className="text-[#34FCE5]">
                    Bachelor of Science in Information Technology
                  </span>{" "}
                  @ Don Honorio Ventura State University.
                </h1>

                <h1 className="">
                  I am currently learning Html, Css, Javascript and ReactJs
                  through online learning platfroms.
                </h1>
                <h1 className="">
                  I am currently learning Html, Css, Javascript and ReactJs
                  through online learning platfroms.
                </h1>
                <h1 className="">
                  I am currently learning Html, Css, Javascript and ReactJs
                  through online learning platfroms.
                </h1>
                <h1 className="">
                  I am currently learning Html, Css, Javascript and ReactJs
                  through online learning platfroms.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default About;
