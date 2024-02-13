import React from "react";
import Image from "next/image";


const AboutImg = () => {
  return (
    <div>
      <Image src={"/about.jpeg"} width={500} height={500} alt="image" className="w-[600px] h-[320px] object-cover rounded" />
    </div>
  );
};

export default AboutImg;
