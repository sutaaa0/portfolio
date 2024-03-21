import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div id="contact" className="w-full flex justify-center items-center">
      <div className="sm:w-[60%] w-full sm:px-0  px-12 sm:h-[50%] flex flex-col justify-center items-center">
        <div className="w-full flex items-center justify-start">
          <div className="flex flex-col mb-12 ">
            <h1 className="text-blue-600 font-bold">CONTACT</h1>
            <p className="font-bold text-base">Don't bee shy! Hit me up!👇</p>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col w-full sm:justify-start justify-between  items-center mb-4 sm:mb-12">
          <div className="flex justify-center items-center">
            <Image className="w-[30px] h-[30px] sm:w-[50px] sm:h-[50px]" src={"/map.svg"} width={50} height={50} alt="email" />
            <div className="w-full">
              <h1 className="font-bold hidden sm:block">Location</h1>
              <p className="text-sm">Jawabarat, Indonesia</p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Image className="w-[30px] h-[30px] sm:w-[50px] sm:h-[50px]" src={"/mail.svg"} width={50} height={50} alt="locations" />
            <div className="flex sm:flex-col gap-1">
              <h1 className="font-bold hidden sm:block">Mail</h1>
              <p className="text-sm">dodisuta0@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
