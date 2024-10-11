"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* Image Container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/hero.png" alt="" fill className="object-contain" />
        </div>
        {/* Text Container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold">
            Ramazan Serhat UYGUN
          </h1>
          {/* Description */}
          <p className="md:text-xl">
            Kendimi Web Geliştirici olarak adlandırabilirim. Web alanında
            yaptığım kendi projelerimi ve BTK Akademi ve Udemy gibi eğitim
            siteleri üzerinden aldığım eğitimler eşliğinde yaptığım projeleri
            GitHub ve LinkedIn hesaplarımda paylaşmaktayım. Web Geliştirme
            alanında React, Next Js, Node Js, ASP.NET, Typescript ve Javascript
            kullanarak web site tasarlayabilirim. Ayrıca MVC ve Mikroservis
            Mimarilerine hakimim. Kendimi Web alanında geliştirmemim yanında
            yapay zeka OOP alanında verilen görevleri ve hedeflediğim işleri
            başarı ile yapabilmekteyim. Ayrıca R dilini kullanarak Veri analizi
            ve Veri görselleştirme işlemlerini yapabilmekteyim. Bunların yanında
            ReactNative teknolojisi ile mobil uygulama geliştirme
            yapabilmekteyim.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
