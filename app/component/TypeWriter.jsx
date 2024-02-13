"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: "900" });

const TypeWriter = () => {
  const name = ["Frond-End React Developer 👋🏻"];

  return (
    <div className={poppins.className}>
        
      <h1 className="text-4xl font-bold text-center md:text-start">
        <Typewriter words={name} cursor cursorStyle={"_"} loop={false} typeSpeed={130} delaySpeed={3000}></Typewriter>
      </h1>
    </div>
  );
};

export default TypeWriter;


