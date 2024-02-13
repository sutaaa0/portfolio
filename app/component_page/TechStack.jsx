import React from "react";
import Image from "next/image";


const TechStack = () => {
  return (
    <div className="flex md:flex-row flex-col justify-center mb-[60px] gap-x-12  w-full md:w-[50%] items-center">
      <div className="lg:p-0 p-4">
        <p className="font-bold">Tech Stack |</p>
      </div>
      <div className="flex justify-center flex-wrap items-center lg:py-0 py-2 gap-y-1 gap-x-12">
        <Image src={"/html.png"} width={50} height={50} alt="html" className="w-[40px] h-[40px]" />
        <Image src={"/css.png"} width={50} height={50} alt="css" className=" w-[40px] h-[60px]" />
        <Image src={"/js.png"} width={50} height={50} alt="js" className=" w-[40px] h-[40px]" />
        <Image src={"/bstrap.png"} width={50} height={50} alt="bstrap" className=" w-[50px] h-[40px]" />
        <Image src={"/tlwind.png"} width={50} height={50} alt="tailwind" className=" w-[50px] h-[40px]" />
        <Image src={"/nextjs.png"} width={50} height={50} alt="nextjs" className=" w-[60px] h-[40px]" />
      </div>
    </div>
  );
};

export default TechStack;
