import React from "react";
import Fade from "react-reveal/Fade";

const Projects = () => {
  return (
    <div className=" text-white font-mono xl:px-40 lg:px-32  py-40 space-y-10">
      <div>
        <h1 className="text-[3rem] font-bold">Projects</h1>
      </div>
      <div className="grid grid-cols-1 bg-black">
        <div className="flex justify-center items-center">
          <div className="object-cover">
            <img
              className="opacity-30 w-6/12 "
              src={require("./images/project1.jpg")}
              alt="Display"
            />
          </div>
          <div>Hello</div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
