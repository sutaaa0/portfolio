import Image from "next/image";
import React from "react";

const Character = () => {
  return (
    <div>
      <Image className="w-[300px] h-[300px] object-cover" src={"/character.jpg"} width={250} height={250} alt="character" />
    </div>
  );
};

export default Character;
