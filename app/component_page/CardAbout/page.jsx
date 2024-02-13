import React from "react";
import AboutText from "./AboutText";
import AboutImg from "./AboutImg";

const page = () => {
  return (
    <div className="flex justify-center px-3 lg:px-0 gap-x-8 w-full md:w-[60%] lg:w-[50%] flex-col lg:flex-row-reverse items-center">
      <AboutText />
      <AboutImg />
    </div>
  );
};

export default page;
