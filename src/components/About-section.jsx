import { Book, BookmarkCheck, Rocket } from "lucide-react";
import React from "react";

const dataKonten = [
    {
        ikon: Rocket, 
        judul: "Pembelajaran Praktis",
        deskripsi: "Dapatkan pengalaman dengan Belajar SINTAK."
    },
    {
        ikon: Book,
        judul: "Relasi yang luas",
        deskripsi: "Dapatkan Pengalaman baru di program SINATAK."
    },
    {
        ikon: BookmarkCheck,
        judul: "Penawaran menarik",
        deskripsi: "Dapatkan Penawaran Menarik dari SINTAK."
    }
]

function AboutSection() {
  return (
    <section className="py-32">
      <div className="flex flex-col px-4 items-center justify-center max-w-7xl mx-auto mt-15">
        {/* Bagian judul*/}
        <div className="text-center space-y-2 mt-15">
          <h1 className="font-bold text-4xl md:text-6xl">Mengenal Lebih Dekat SINTAK</h1>
          <p className="text-gray-500">
            SINTAK adalah kelas terbuka yang diselenggarakan oleh HMJ Manajemen
            Informatika dan Google Developer Groups on Campus POLSRI untuk
            memperkenalkan mahasiswa pada pengembangan web modern menggunakan
            React dan Next.js dengan bantuan AI.
          </p>
        </div>

        {/* bagian Kotak */}
        <div className="flex flex-col lg:flex-row items-center gap-4">
          {dataKonten.map((data) => (
            <div className="flex items-center flex-col p-4 min-w-sm border border-gray-300 rounded-lg shadow-lg bg-white mt-8" >
              <div className="bg-red-200 p-4 rounded-full">
                <data.ikon size={32} />
              </div>
              <h2 className="font-bold  text-xl">Pembelajaran Praktis</h2>
              <p className="text-gray-500">
                Dapatkan Pengalaman Dengan Belajar SINTAK.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
