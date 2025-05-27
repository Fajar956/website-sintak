import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import { User, AtSign } from 'lucide-react'

function Kontak() {
  return (
    <div>
      <Navbar />
      <div className="hero bg-[url(/BGMI.png)] bg-fixed min-h-screen flex flex-col md:flex-row">
        <div className="flex flex-row max-w-7xl mx-auto w-full gap-8">
          {/* Form di kiri */}
          <div className="flex-1 flex flex-col text-black font-bold justify-center gap-4">
            <div className="flex py-2">
              <User />
              <h2>What is your name?</h2>
            </div>
            <fieldset className="fieldset">
              <input type="text" className="input" placeholder="Type here" />
              <p className="label">Optional</p>
            </fieldset>
            <div>
              <div className="flex py-2">
                <AtSign />
                <h2>Email</h2>
              </div>
              <label className="input validator">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </g>
                </svg>
                <input type="email" placeholder="mail@site.com" required />
              </label>
              <div className="validator-hint hidden">
                Enter valid email address
              </div>
            </div>
            <div className="max-w-4xl py-2">
              <div className="flex py-2">
                <h2>Your Comment</h2>
              </div>
              <textarea
                className="input h-32 w-full resize-none"
                placeholder="Write your comment here..."
              ></textarea>
            </div>
            <div>
              <button className="flex flex-col border border-red-500 py-2 px-3 rounded-md bg-red-500 hover:bg-red-400">
                <h3 className="text-white hover:text-white-300">Kirim</h3>
              </button>
            </div>
          </div>
          {/* Foto di kanan */}
          <div className="flex-shrink-0 flex items-start ">
            <img className="w-80 rounded-full shadow-lg" src="./fajarbiru.jpg" alt="foto" />
          </div>
        </div>
      </div>
      <Footer /> 
    </div>
  );
}

export default Kontak