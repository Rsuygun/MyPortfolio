"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { url: "/", title: "Ana Sayfa" },
  { url: "/about", title: "Hakkımda" },
  { url: "/portfolio", title: "Portfolyo" },
  { url: "/contact", title: "İletişim" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* Logo */}
      <div className="md:hidden">
        <Link
          href="/"
          className="text-sm bg-gray-950 rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-gray-500 mr-1">Rsuygun</span>
          <span className="w-12 h-8 rounded bg-gray-500 text-gray-950 flex items-center justify-center">
            .dev
          </span>
        </Link>
      </div>
      {/* Responsive Menu */}
      <div className="md:hidden">
        <button className="w-10 h-8 flex flex-col justify-between z-50 relative" onClick={()=>setOpen((prev) => !prev)}>
          <div className="w-10 h-1 bg-gray-500 rounded"></div>
          <div className="w-10 h-1 bg-gray-500 rounded"></div>
          <div className="w-10 h-1 bg-gray-500 rounded"></div>
        </button>
        {/* Menu List */}
        {open &&
          <div className="absolute top-0 left-0 w-screen h-screen bg-gray-950 text-gray-500 flex flex-col items-center justify-center gap-10 text-4xl">
            {links.map((link) => (
              <Link href={link.url} key={link.url}>
                {link.title}
              </Link>
            ))}
          </div>
        }
      </div>
    </div>
  );
};

export default Navbar;
