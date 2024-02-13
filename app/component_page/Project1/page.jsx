import React from "react";
import Riveue from "./Riveue";
import Image from "next/image";

const page = () => {
  return (
    <div className="flex justify-center flex-col px-3 lg:px-0 gap-x-8 w-full md:w-[60%] lg:w-[50%]  lg:flex-row-reverse items-center">
      <div className="flex justify-center items-center gap-y-4 flex-col w-full">
        <h1 className="font-bold text-center lg:text-start w-full">Website List Anime</h1>
        <p className="lg:text-start text-center">
          Situs web "List Anime" adalah proyek yang saya buat. Situs ini bertujuan untuk menyajikan daftar anime yang lengkap dan terorganisir dengan baik bagi para penggemar anime. Dengan antarmuka yang bersih dan responsif, pengguna dapat
          dengan mudah mencari anime favorit mereka, mengetahui informasi tentang judul, genre, jumlah episode, dan sinopsis singkat.
        </p>
        <div className="flex w-full justify-center gap-8 ">
          <h1 className="font-bold">Next JS</h1>
          <h1 className="font-bold">Tailwind</h1>
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
