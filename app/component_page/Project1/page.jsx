import React from "react";
import Riveue from "./Riveue";
import Image from "next/image";

const page = () => {
  const project = [
    {
      id: 1,
      name: "Website List Anime",
      image: "/projects/project1.png",
      description: `Situs web "List Anime" adalah proyek yang saya buat. Situs ini bertujuan untuk menyajikan daftar anime yang lengkap dan terorganisir dengan baik bagi para penggemar anime. Dengan antarmuka yang bersih dan responsif, pengguna dapat
      dengan mudah mencari anime favorit mereka, mengetahui informasi tentang judul, genre, jumlah episode, dan sinopsis singkat.`,
      tackstack: [
        {
          id: 1,
          name: "Next JS",
        },
        {
          id: 2,
          name: "Tailwind",
        },
      ],

      urldemo: "https://my-anime-list-phi.vercel.app/",
      urlcode: "https://github.com/dodisuta/MyAnimeList",
    },
    {
      id: 2,
      name: "Website Kelas RPL  1 SMKN SITURAJA",
      image: "/projects/project2.webp",
      description:
        "Situs web Kelas 11 Rekayasa Perangkat Lunak 1 (RPL) SMKN Situraja adalah tempat di mana kenangan dan informasi berkumpul. Dengan fitur foto-foto yang melimpah, situs ini tidak hanya menjadi sumber informasi terkait jadwal pelajaran, piket, dan siwa, tetapi juga menjadi ruang di mana kenangan indah dibagikan. Didesain dengan antarmuka yang bersih dan responsif, memastikan pengalaman pengguna yang optimal.",
      tackstack: [
        {
          id: 1,
          name: "Next JS",
        },
        {
          id: 2,
          name: "Tailwind",
        },
      ],
      urldemo: "https://rpl1.vercel.app",
      urlcode: "https://github.com/dodisuta/rpl1",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center p-3 w-full">
      {project.map((data) => (
        <div key={data.id} className="flex justify-center my-12 flex-col px-3 lg:px-0 gap-x-8 w-full md:w-[80%] lg:w-[70%]  lg:flex-row-reverse items-center">
          <div className="flex justify-center items-center gap-y-4 flex-col w-full">
            <h1 className="font-bold text-center lg:text-start w-full">{data.name}</h1>
            <p className="lg:text-start text-center">{data.description}</p>
            <div className="flex w-full justify-center gap-8 ">
              {data.tackstack.map((tack) => (
                <h1 key={tack.id} className="font-bold">
                  {tack.name}
                </h1>
              ))}
            </div>
            <Riveue datacode={data.urlcode} datademo={data.urldemo} />
          </div>
          <div className="mt-2 lg:mt-0 ">
            <Image src={data.image} width={1000} height={700} alt="image" loading="lazy" className="w-full  object-cover rounded" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default page;
