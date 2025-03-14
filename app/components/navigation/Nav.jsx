"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State för att toggla meny

  return (
    <nav className="p-4 relative">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* 🔹 Logotyp */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logotyp"
            width={120}
            height={40}
            className="cursor-pointer"
          />
        </Link>

        {/* 🔹 Hamburgermeny-knapp */}
        <div className="lg:hidden" onClick={() => setIsOpen(true)}>
          <Image src="/menu.svg" alt="Meny" width={30} height={30} />
        </div>

        {/* 🔹 Desktop-navigation */}
        <ul className="hidden lg:flex space-x-6 text-white text-lg flex-1 justify-center">
          <li>
            <Link href="/products">Våra produkter</Link>
          </li>
          <li>
            <Link href="/ranking">Topplistan</Link>
          </li>
          <li>
            <Link href="/news">Nyheter</Link>
          </li>
          <li>
            <Link href="/extra">Tillbehör</Link>
          </li>
          <li>
            <Link href="/about">Om oss</Link>
          </li>
        </ul>
      </div>

      {/* 🔹 Overlay & Mobilmeny */}
      {isOpen && (
        <div className="fixed inset-0 overlay z-50 flex justify-end">
          {/* 🔹 Menyn */}
          <div className=" w-64 h-full p-6 flex flex-col gap-4 transition-transform duration-300 ease-in-out transform translate-x-0">
            {/* 🔹 Stäng-knapp */}
            <button className="self-end" onClick={() => setIsOpen(false)}>
              <Image src="/close.svg" alt="Stäng meny" width={30} height={30} />
            </button>

            {/* 🔹 Menylänkar */}
            <ul className="text-lg text-white">
              <li>
                <Link href="/products" onClick={() => setIsOpen(false)}>
                  Våra produkter
                </Link>
              </li>
              <li>
                <Link href="/ranking" onClick={() => setIsOpen(false)}>
                  Topplistan
                </Link>
              </li>
              <li>
                <Link href="/news" onClick={() => setIsOpen(false)}>
                  Nyheter
                </Link>
              </li>
              <li>
                <Link href="/extra" onClick={() => setIsOpen(false)}>
                  Tillbehör
                </Link>
              </li>
              <li>
                <Link href="/about" onClick={() => setIsOpen(false)}>
                  Om oss
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}







// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false); // State för att toggla meny

//   return (
//     <nav className=" p-4">
//       <div className="max-w-6xl mx-auto flex justify-between items-center">
//         {/* 🔹 Logotyp från public-mappen */}
//         <Link href="/">
//           <Image
//             src="/logo.png" // Se till att filen finns i public/
//             alt="Logotyp"
//             width={120}
//             height={40}
//             className="cursor-pointer"
//           />
//         </Link>

//         {/* 🔹 Hamburgermeny för mobil */}
//         <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
//           <Image
//             src={isOpen ? "/close.svg" : "/menu.svg"} // Växlar ikon
//             alt="Meny"
//             width={30}
//             height={30}
//           />
//         </button>

//         {/* 🔹 Länkar (desktop) */}
//         <ul className="hidden lg:flex space-x-6 text-white text-lg flex-1 justify-center">
//           <li>
//             <Link href="/products">Våra produkter</Link>
//           </li>
//           <li>
//             <Link href="/ranking">Topplistan</Link>
//           </li>
//           <li>
//             <Link href="/news">Nyheter</Link>
//           </li>
//           <li>
//             <Link href="/extra">Tillbehör</Link>
//           </li>
//           <li>
//             <Link href="/about">Om oss</Link>
//           </li>
//         </ul>
//       </div>

//       {/* 🔹 Mobilmeny (visas om `isOpen` är `true`) */}
//       {isOpen && (
//         <div className="lg:hidden absolute top-16 left-0 w-full text-white p-4">
//           <ul className="flex flex-col space-y-4 text-lg">
//             <li>
//               <Link href="/products" onClick={() => setIsOpen(false)}>
//                 Om oss
//               </Link>
//             </li>
//             <li>
//               <Link href="/ranking" onClick={() => setIsOpen(false)}>
//                 Tjänster
//               </Link>
//             </li>
//             <li>
//               <Link href="/news" onClick={() => setIsOpen(false)}>
//                 Kontakt
//               </Link>
//             </li>
//             <li>
//               <Link href="/extra" onClick={() => setIsOpen(false)}>
//                 Kontakt
//               </Link>
//             </li>
//             <li>
//               <Link href="/about" onClick={() => setIsOpen(false)}>
//                 Kontakt
//               </Link>
//             </li>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// }
