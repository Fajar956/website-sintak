import { CodeXml, Facebook, Instagram, Youtube } from 'lucide-react';
import React from 'react'

function Footer() {
return (
  <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4">
    <aside className="grid-flow-col items-center">
      <CodeXml />
      <p>SINTAK © {new Date().getFullYear()} - Fajar Setyanusa</p>
    </aside>
    <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
      <a href='https://facebook.com'>
        <Facebook />
      </a>
      <a href='https://instagram.com'>
        <Instagram />
      </a>
      <a href='https://youtube.com'>
        <Youtube />
      </a>
    </nav>
  </footer>
);
}

export default Footer