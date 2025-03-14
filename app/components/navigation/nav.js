"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State för att toggla meny

  return (
    <nav className="bg-blue-500 p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* 🔹 Logotyp från public-mappen */}
        <Link href="/">
          <Image
            src="/logo.png" // Se till att filen finns i public/
            alt="Logotyp"
            width={120}
            height={40}
            className="cursor-pointer"
          />
        </Link>

        {/* 🔹 Hamburgermeny för mobil */}
        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          <Image
            src={isOpen ? "/close.svg" : "/menu.svg"} // Växlar ikon
            alt="Meny"
            width={30}
            height={30}
          />
        </button>

        {/* 🔹 Länkar (desktop) */}
        <ul className="hidden lg:flex space-x-6 text-white text-lg">
          <li>
            <Link href="/about">Om oss</Link>
          </li>
          <li>
            <Link href="/services">Tjänster</Link>
          </li>
          <li>
            <Link href="/contact">Kontakt</Link>
          </li>
        </ul>
      </div>

      {/* 🔹 Mobilmeny (visas om `isOpen` är `true`) */}
      {isOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-blue-500 text-white p-4">
          <ul className="flex flex-col space-y-4 text-lg">
            <li>
              <Link href="/about" onClick={() => setIsOpen(false)}>
                Om oss
              </Link>
            </li>
            <li>
              <Link href="/services" onClick={() => setIsOpen(false)}>
                Tjänster
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
