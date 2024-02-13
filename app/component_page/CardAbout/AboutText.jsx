import React from "react";

const AboutText = () => {
  return (
    <div className="flex flex-col w-full items-center gap-y-4">
      <h3 className="text-blue-600 text-center lg:text-start w-full font-bold">ABOUT ME</h3>
      <h1 className="font-bold text-center w-full lg:text-start text-xl">Menciptakan Karya di Depan Layar</h1>
      <p className="text-base text-center pb-3 md:pb-0 lg:text-start">
        Halo! Saya Dodi suta faturohman, seorang siswa SMK yang bersemangat dalam pengembangan web. Saya menyukai dunia teknologi dan saya memiliki pemahaman yang baik tentang HTML, CSS, dan JavaScript, serta beberapa Framework seperti
        Bootstrap, Tailwind dan Next JS . Saya percaya bahwa kolaborasi dan pembelajaran terus-menerus akan membantu saya menjadi seorang web developer yang handal. Jika Anda tertarik untuk berkolaborasi atau memiliki saran untuk saya, saya akan senang
        mendengarnya. Mari terus belajar bersama!
      </p>
    </div>
  );
};

export default AboutText;
