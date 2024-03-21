import Image from "next/image";
import React from "react";

const Character = () => {
  return (
    <div>
      <Image className="w-full h-[300px] object-cover" priority src={"/character.jpg"} width={250} height={250} alt="character" />
    </div>
  );
};

export default Character;
