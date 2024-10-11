"use client";

import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const expreinceRef = useRef();
  const isExperienceRefInView = useInView(expreinceRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* Container */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* Text Container */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2">
          {/* Bıography Container */}
          <div className="flex flex-col gap-12 justify-center">
            {/* Biography Title */}
            <h1 className="font-bold text-2xl">BİYOGRAFİ</h1>
            {/* Biography Description */}
            <p className="text-lg">
              Merhaba! Ben Ramazan Serhat UYGUN, Bilgisayar Mühendisliği
              öğrencisiyim. 2018 yılında Malatya Atatürk Sağlık Meslek
              Lisesinden mezun olduktan sonra, bilgi ve becerilerimi geliştirmek
              amacıyla 2020 yılında Recep Tayyip Erdoğan Üniversitesi Bilgisayar
              Mühendisliği Bölümüne başladım. Şu anda 4. sınıf öğrencisi olarak
              eğitimime devam ediyorum. Teknolojiye olan ilgim ve tutkum, HTML,
              CSS, JavaScript, C# ve Java gibi çeşitli programlama dillerinde
              kendimi geliştirmeme olanak tanıdı. Bunların yanı sıra ASP.NET
              Core ve ASP.NET MVC frameworkleri üzeirnden projeler oluşturarak
              proje yönetme ve C# becerilerimi pekiştirdim. SQL veri tabanları
              üzerinden gerekli sorguları yazma becerilerimi geliştirdim.
              React-Native teknolojisini kullanarak Expo-CLI ile proje
              oluşturarak Android ve IOS uygulamaları yapma becerilerimi
              geliştirdim. Özellikle web teknolojileri konusundaki deneyimimle
              birlikte, kullanıcı dostu ve etkili çözümler üretmeye
              odaklanıyorum. Projelerimde, problem çözme becerilerimi ve
              yaratıcı düşünce yeteneğimi ön plana çıkartmaya çalışıyorum.
              Eğitimim ve projelerimle birlikte, yazılım geliştirme alanındaki
              bilgi birikimimi sürekli genişletiyor ve güncelliyorum. Hedefim,
              sektörde kendimi sürekli geliştirerek, yeniliklere açık bir
              profesyonel olmak ve teknoloji dünyasına katkıda bulunmaktır.
            </p>
            {/* Biography Scroll SVG*/}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* Skills Container */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* Skill Title */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              BECERİLER
            </motion.h1>
            {/* Skill List */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              <div className="rounded p-2 text-sm cursor-pointer bg-gray-950 text-gray-300 hover:bg-gray-300 hover:text-gray-950">
                HTML
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-gray-950 text-gray-300 hover:bg-gray-300 hover:text-gray-950">
                CSS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-gray-950 text-gray-300 hover:bg-gray-300 hover:text-gray-950">
                Tailwimd CSS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-gray-950 text-gray-300 hover:bg-gray-300 hover:text-gray-950">
                JavaScript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-gray-950 text-gray-300 hover:bg-gray-300 hover:text-gray-950">
                TypeScript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-gray-950 text-gray-300 hover:bg-gray-300 hover:text-gray-950">
                React
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-gray-950 text-gray-300 hover:bg-gray-300 hover:text-gray-950">
                Next.js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-gray-950 text-gray-300 hover:bg-gray-300 hover:text-gray-950">
                ASP.NET Core
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-gray-950 text-gray-300 hover:bg-gray-300 hover:text-gray-950">
                C#
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-gray-950 text-gray-300 hover:bg-gray-300 hover:text-gray-950">
                Java
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-gray-950 text-gray-300 hover:bg-gray-300 hover:text-gray-950">
                C
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-gray-950 text-gray-300 hover:bg-gray-300 hover:text-gray-950">
                C++
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-gray-950 text-gray-300 hover:bg-gray-300 hover:text-gray-950">
                R
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-gray-950 text-gray-300 hover:bg-gray-300 hover:text-gray-950">
                Matlab
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-gray-950 text-gray-300 hover:bg-gray-300 hover:text-gray-950">
                React-Native
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-gray-950 text-gray-300 hover:bg-gray-300 hover:text-gray-950">
                MsSQL
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-gray-950 text-gray-300 hover:bg-gray-300 hover:text-gray-950">
                MySQL
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-gray-950 text-gray-300 hover:bg-gray-300 hover:text-gray-950">
                SQLite3
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-gray-950 text-gray-300 hover:bg-gray-300 hover:text-gray-950">
                Firebase
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-gray-950 text-gray-300 hover:bg-gray-300 hover:text-gray-950">
                Linux
              </div>
            </motion.div>
            {/* Skill Scroll SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* Experience Container */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={expreinceRef}
          >
            {/* Experience Title */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              DENEYİM
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
            >
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Üniversite Kısmi Çalışma
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    Recep Tayyip Erdoğan Üniversitesinin Bilgi İşlem
                    Departmanında İşletim Sistemleri üzerine kısmi çalışma
                    fırsatım oldu.{" "}
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-gray-500 bg-gray-700 -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-gray-500 bg-gray-700 -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Staj
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    Staj dönemimde Dicle Üniversitesi üzerinden
                    gerçekleştirdiğim stajımda mobil uygulama becerilerimi
                    geliştirdim.{" "}
                  </div>
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Üniversite Kısmi Çalışma{" "}
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    Recep Tayyip Erdoğan Üniversitenin Bilgi İşlem Departmanı
                    Yazılım Bölümünde üniversite bünyesi için kullanılacak modül
                    oluşturulmasında görev almaktayım.{" "}
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-gray-500 bg-gray-700 -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
