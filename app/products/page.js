"use client";

import { Category } from "../components/Category";
import { Hero } from "../components/Hero";
import { ProductsComponent } from "../components/Products";
import { useState, useEffect } from "react";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5; // Antal produkter per sida

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Återställ sidan när kategori ändras
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("/api/products");
      const data = await res.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  // Filtrera produkter baserat på kategori
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  // Beräkna pagineringens start och slutindex
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  const changePage = (newPage) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scrolla uppåt vid sidbyte
  };

  return (
    <main>
      <Hero />
      <div className="flex flex-col items-center my-12 md:w-2/3 md:m-auto md:py-12">
        <h2 className="text-[20px] font-bold text-[#333] pb-3 md:text-[26px]">
          Alla våra produkter
        </h2>
        <p className="text-[#666] mx-5 text-center">
          Utforska vårt breda sortiment av noggrant utvalda produkter, skapade
          för att möta dina behov och önskemål. Oavsett om du letar efter
          högkvalitativa material, smarta lösningar eller stilrena detaljer, har
          vi något för dig. Våra produkter kombinerar funktionalitet, design och
          hållbarhet för att säkerställa att du alltid får det bästa.
        </p>
      </div>

      <Category onSelectCategory={handleSelectCategory} />

      {paginatedProducts.map((product) => (
        <ProductsComponent
          key={product.title}
          imgUrl={product.imgUrl}
          title={product.title}
          description={product.description}
          sortProducts={product.sortProducts}
          country={product.country}
          button={product.button}
        />
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
    </main>
  );
}
