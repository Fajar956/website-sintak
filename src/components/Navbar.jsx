import { CodeXml, Rocket } from "lucide-react";
import React from "react";

function Navbar() {
  return (
    <header className="sticky top-0 border bg-white/80 border-gray-300">
      <div className="flex max-w-7xl mx-auto justify-between h-16 items-center">
        <div className="flex item items-center gap-2">
          <CodeXml size={32} />
          <h1 className="font-bold text-xl text-red-500">SINTAK.</h1>
        </div>
        <ul className="hidden md:flex gap-8 ">
          <li>
            <a href="/about" className="hover:text-red-400">
              Tentang
            </a>
          </li>
          <li>
            <a href="/kontak" className="hover:text-red-400">
              Contact
            </a>
          </li>
          <li>
            <a href="/Review" className="hover:text-red-400">
              Review
            </a>
          </li>
        </ul>
        <a
          href=""
          className="bg-red-500 px-4 py-3
             text-white rounded-xl hover:bg-red-400 flex items-center gap-2"
        >
          <Rocket size={18} /> Daftar Sekarang
        </a>
      </div>
    </header>
  );
}

export default Navbar;
