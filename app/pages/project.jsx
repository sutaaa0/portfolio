import React from "react";
import Project1 from "../component_page/Project1/page"

const Project = () => {
  return (
    <div id="project" className="flex flex-col justify-center  items-center w-full h-auto">
      <div className="flex flex-col lg:pb-12 pb-5 items-center w-[90%]">
        <h1 className="font-bold lg:text-start text-blue-600 text-base w-full">PORTOFOLIO</h1>
        <h3 className="font-bold lg:text-start w-full text-base ">Turning Design Concepts into Interactive Code</h3>
      </div>
      <Project1 />
    </div>
  );
};

export default Project;
