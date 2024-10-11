"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-gray-500 to-gray-200",
    title: "E-Ticaret Sitesi",
    desc: "ASP.NET Core MVC yapısıyla geliştirdiği E-Ticaret Sitesi. Burada Role atamaları, Dashboard Ekranı, Login İşlemleri düzgün ve çalışır bir vaziyette bulunmaktadır. HTML, CSS, Javascript, C#, cshtml ve bootstrap gibi teknolojiler kullanarak N Katmanlı bir proje geliştirdim.",
    img: "/MVC.png",
    link: "https://github.com/Rsuygun/MVC-Basics",
  },
  {
    id: 2,
    color: "from-gray-200 to-gray-500",
    title: "Otel Rezervasyon Sitesi",
    desc: "ASP.NET üzerinden API Consume işlemleri yaparak Hotelier adında bir otel rezervasyon sitesi tasarladım. Rapid API, JWT Token gibi teknolojiler kullanarak projeyi tamamladım.",
    img: "/otel.png",
    link: "https://github.com/Rsuygun/HotelProject-ASP.NETCoreAPI",
  },
  {
    id: 3,
    color: "from-gray-500 to-gray-200",
    title: "Yoklama Uygulaması",
    desc: "React-Native üzerinde Expo-CLI framework ile bir yoklama mobil uygulaması geliştirdim. Bu mobil uygulamada QR kod okutarak yoklamaya katılma işlemlerini gerçekleştirmesini sağladım. Database olarak Firebase web server kullandım.",
    img: "/mobil.png",
    link: "https://github.com/Rsuygun/attendanceSystem",
  },
  {
    id: 4,
    color: "from-gray-200 to-gray-500",
    title: "Stok Kart Projesi",
    desc: "Java Swing ile bir sistemde gerekli stok kartı ekleme, çıkarma, düzenleme, güncelleme ve kopyalama işlemlerini gerçekleşitebilecek bir MVC mimarisine uygun N katmanlı proje oluşturdum. Database olarak ise MySQL uygulamasını kullandım. ",
    img: "/stok.png",
    link: "https://github.com/Rsuygun/StockCardProject",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          Projelerim
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-gray-200 to-gray-500" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[700px] xl:h-[420px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-end">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-gray-950 text-gray-300 font-semibold m-4 rounded">
                      Github Reposu
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Bir projeniz mi var?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Fullstack Developer and UI Designer.
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Bana ulaş
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
