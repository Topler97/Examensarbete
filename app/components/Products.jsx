"use client";
import Image from "next/image";
import { Button } from "./Button";
import { useEffect, useState } from "react";

export const ProductsComponent = ({ selectedCategory }) => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5; // Antal produkter per sida

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("/api/products");
      const data = await res.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  // Filtrera produkter baserat på vald kategori
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  // Räkna ut pagineringens start och slutindex
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  const changePage = (newPage) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scrollar till toppen
  };

  return (
    <section className="my-20 lg:flex lg:items-center lg:flex-col">
      {paginatedProducts.map((product) => (
        <div
          key={product.key}
          className="flex flex-col items-center mx-5 sm:flex-row border-b-2 border-[#F0F0F0] py-10 lg:w-2/3"
        >
          <Image src={product.imgUrl} alt="vin" width={80} height={80} />

          <div className="sm:flex sm:flex-col">
            <h3 className="text-[#8B6060] font-bold text-[20px] py-3 text-center sm:text-start sm:mx-10">
              {product.title}
            </h3>

            <div className="sm:mx-10">
              <p className="text-[#666] text-center pb-3 sm:text-start">
                {product.description}
              </p>
            </div>

            <div className="sm:flex sm:justify-between sm:mx-10 sm:py-5 text-center">
              <p className="text-[#8B6060] pt-5 sm:p-0">{product.sort}</p>
              <p className="text-[#8B6060] pb-8 sm:p-0">{product.country}</p>
            </div>

            {product.button && (
              <div className="flex justify-center sm:flex sm:flex-col sm:items-start sm:ml-10">
                <Button buttonText={"Läs mer"} buttonColor={"#8B6060"} />
              </div>
            )}
          </div>
        </div>
      ))}

      {/* Paginering */}
      <div className="flex justify-center mt-5">
        <button
          className="px-4 py-2 mx-2 bg-[#8B6060] text-white rounded disabled:opacity-50"
          onClick={() => changePage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Föregående
        </button>

        <span className="px-4 py-2">{currentPage}</span>

        <button
          className="px-4 py-2 mx-2 bg-[#8B6060] text-white rounded disabled:opacity-50"
          onClick={() => changePage(currentPage + 1)}
          disabled={endIndex >= filteredProducts.length}
        >
          Nästa
        </button>
      </div>
    </section>
  );
};
