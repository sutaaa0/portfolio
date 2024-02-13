import React from "react";
import Riveue from "./Riveue";
import Image from "next/image";

const page = () => {
  return (
    <div className="flex justify-center flex-col px-3 lg:px-0 gap-x-8 w-full md:w-[60%] lg:w-[50%]  lg:flex-row-reverse items-center">
      <div className="flex justify-center items-center gap-y-4 flex-col w-full">
        <h1 className="font-bold text-center lg:text-start w-full">Clone ADIDAS</h1>
        <p className="lg:text-start text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At placeat doloremque quos omnis in numquam dolores recusandae, ipsum nam, aliquid animi saepe laboriosam architecto consectetur. Facilis alias maxime nam? Laboriosam
          maxime, ea quos libero accusamus fugit at nostrum sint dicta placeat minima ab sit iure dignissimos dolorem explicabo? Nostrum, nobis.
        </p>
        <div className="flex w-full justify-center gap-8 ">
          <h1 className="font-bold">JAVASCRIPT</h1>
        </div>
        <Riveue />
      </div>
      <div className="mt-2 lg:mt-0 ">
        <Image src={"/project.png"} width={1000} height={700} alt="image" className="w-full  object-cover rounded" />
      </div>
    </div>
  );
};

export default page;
