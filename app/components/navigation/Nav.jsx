"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-4 relative">
      <div className="flex justify-between items-center lg:mx-18">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logotyp"
            width={200}
            height={100}
            className="cursor-pointer w-[130px] lg:w-[200px]"
          />
        </Link>

        {/* Hamburgermenu */}
        <div className="lg:hidden" onClick={() => setIsOpen(true)}>
          <Image src="/menu.svg" alt="Meny" width={30} height={30} style={{ width: "auto", height: "auto" }}/>
        </div>

        {/* Desktop-navigation */}
        <div className="hidden lg:flex text-white text-[16px] items-center w-full">
          <ul className="flex space-x-6 flex-1 justify-center">
            <li>
              <Link href="/products">Våra produkter</Link>
            </li>
            <li>
              <Link href="/toplist">Topplistan</Link>
            </li>
            <li>
              <Link href="/news">Nyheter</Link>
            </li>
            <li>
              <Link href="/about">Om oss</Link>
            </li>
          </ul>

          <div className="ml-auto">
            <Button
              buttonText="Kontakta oss"
              buttonColor="#8B6060"
              className="py-2 px-6"
              link="/contact"
            />
          </div>
        </div>
      </div>

      {/* 🔹 Overlay Mobilmeny */}
      {isOpen && (
        <div className="fixed inset-0 overlay z-50 flex justify-center items-center">
          <div className="w-80 h-full p-6 flex flex-col transition-transform duration-300 ease-in-out transform translate-x-0">
            {/* Stäng-knapp */}
            <div className="absolute top-6 right-0">
              <button onClick={() => setIsOpen(false)}>
                <Image
                  src="/close.svg"
                  alt="Stäng meny"
                  width={30}
                  height={30}
                />
              </button>
            </div>

            <div className="flex flex-col items-center justify-center flex-grow">
              <ul className="text-[16px] text-white space-y-6 text-center">
                <li>
                  <Link href="/products" onClick={() => setIsOpen(false)}>
                    Våra produkter
                  </Link>
                </li>
                <li>
                  <Link href="/toplist" onClick={() => setIsOpen(false)}>
                    Topplistan
                  </Link>
                </li>
                <li>
                  <Link href="/news" onClick={() => setIsOpen(false)}>
                    Nyheter
                  </Link>
                </li>
                <li>
                  <Link href="/about" onClick={() => setIsOpen(false)}>
                    Om oss
                  </Link>
                </li>
                <li>
                  <Button
                    buttonText="Kontakta oss"
                    buttonColor="#5B3636"
                    className="py-2 px-6 text-lg"
                    link="/contact"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
