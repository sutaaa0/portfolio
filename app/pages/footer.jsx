import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div id="contact" className="w-full flex justify-center items-center">
      <div className="w-[60%] h-[50%] flex flex-col justify-start items-center">
        <div className="w-full flex items-center justify-start">
          <div className="flex flex-col mb-12 ">
            <h1 className="text-blue-600 font-bold">CONTACT</h1>
            <p className="font-bold text-base">Don't bee shy! Hit me up!👇</p>
          </div>
        </div>
        <div className="flex w-full gap-[100px] items-center mb-12">
          <div className="flex justify-center items-center">
            <Image className="w-[50px] h-[50px]" src={"/map.svg"} width={50} height={50} alt="email" />
            <div>
              <h1 className="font-bold">Location</h1>
              <p className="text-sm">Jawabarat, Indonesia</p>
            </div>
          </div>
          <div className="flex  justify-center items-center">
            <Image className="me-2 w-[50px] h-[50px]" src={"/mail.svg"} width={50} height={50} alt="locations" />
            <div>
              <h1 className="font-bold">Mail</h1>
              <p className="text-sm">dodisuta0@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
