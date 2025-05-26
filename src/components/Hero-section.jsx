import { Calendar, Clock, MapPin, Rocket } from "lucide-react";

function HeroSection() {
    return (
        <section className="w-full ">
            <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center">
                <div className="flex flex-col justify-center gap-4">
                    <h1 className="text-4xl md:text-6xl font-bold">
                        Kembangkan Skill web Develompment-mu Dengan Mengikuti Kelas Terbuka
                        Sintak.
                    </h1>
                    <p className="text-gray-500 text-xl">
                        Pelajari Materi Pengembangan Website Dengan React dan NextJS Bersama
                        HMJ Manajemen Informatika dan Google Developer Group on Campus
                        Polsri.
                    </p>
                <div className="flex gap-4 flex-col md:flex-row text-center">
                    <a href="" className='bg-red-500 px-4 py-2 text-white rounded-md hover:bg-red-400
                     hover:text-gray-200 gap-2'>Daftar Sekarang</a>
                    <a href="" className='border border-gray-400 px-4 py-2 rounded-md hover:text-gray-400'>Pelajari Selengkapnya</a>
                </div>
                <div className="flex gap-2">
                    <Calendar />
                    <p>Rabu, 21 mei 2025</p>
                    <Clock />
                    <p>13:30 - 14:30</p>
                    <MapPin />
                    <p>Kampus Polsri</p>
                </div>
                </div >
                <img className="w-125 rounded-full" src="fajarty.jpg" alt="" />
            </div>
        </section>
    );
}

export default HeroSection