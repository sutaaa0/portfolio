import React from "react";
import CardMain from "../component_page/CardMain/page"
import TechStack from "../component_page/TechStack"

const Home = () => {
  return (
    <div className="flex flex-col justify-center  items-center w-full h-screen">
      <CardMain />
      <TechStack />
    </div>
  );
};

export default Home;
