"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ProductsComponent } from "../../components/Products";
import { Hero } from "../../components/Hero";
import CallToActionProductComponent from "../../components/CTAProduct/CTAProduct";
import { Category } from "../../components/Category";
import { useRouter } from "next/navigation";

export default function CategoryPage() {
  const [products, setProducts] = useState([]);
  const [isClient, setIsClient] = useState(false);
  const [category, setCategory] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const categoryFromUrl = pathname.split('/').pop(); // Tar den sista delen av URL:en som kategori
      setCategory(categoryFromUrl);
    }
  }, [pathname, isClient]);

  useEffect(() => {
    if (category) {
      const fetchProducts = async () => {
        const res = await fetch(`/api/products?category=${category}`);
        const data = await res.json();
        setProducts(data);
      };

      fetchProducts();
    }
  }, [category]);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    router.push(`/products/${category}`);
  };

  return (
    <main>
        <Hero />

        <div className="flex flex-col items-center my-12 md:w-2/3 md:m-auto md:pt-12 pb-12">
            <h2 className="text-[20px] font-bold text-[#333] pb-3 md:text-[26px] text-center mx-4">
                Utforska våra favoriter när det kommer till {category}!
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

        {products.length > 0 ? (
            products.map((product) => (
            <ProductsComponent
                key={product.title}
                imgUrl={product.imgUrl}
                title={product.title}
                description={product.description}
                sortProducts={product.sortProducts}
                country={product.country}
                button={product.button}
            />
            ))
        ) : (
            <p>Inga produkter hittades för denna kategori.</p>
        )}

        <CallToActionProductComponent />
    </main>
  );
}
