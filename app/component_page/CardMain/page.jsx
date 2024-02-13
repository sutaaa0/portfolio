import React from "react";
import ContentText from "./ContentText"
import Character from "./Character"


const page = () => {
  return (
    <div className="flex md:flex-row flex-col justify-center mt-12 lg:mb-[60px] gap-x-5 w-full md:w-[40%] items-center">
      <ContentText />
      <Character />
    </div>
  );
};

export default page;
