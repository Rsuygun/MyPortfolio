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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
            consectetur!
          </p>
          {/* Buttons */}
          <div className=" flex gap-4">
            <button className="p-4 rounded-lg ring-1 ring-gray-950 bg-gray-950 text-gray-300">
              Projelerim
            </button>
            <button className="p-4 rounded-lg ring-1 ring-gray-950">
              İletişim
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
