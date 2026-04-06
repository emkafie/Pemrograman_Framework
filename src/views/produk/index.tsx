import { useEffect, useState } from "react";
import HeroSection from "./components/HeroSection";
import useSWR from "swr";
import fetcher from "@/utils/swr/fetcher";

import { ProductType } from "@/types/Product.type";

const ProdukView = ({ products }: { products?: ProductType[] }) => {
  // --- MANUAL FETCHING (DI-COMMENT UNTUK PERBANDINGAN) ---
  // const [products, setProducts] = useState<ProductType[]>([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState<string | null>(null);

  // const fetchProducts = async () => {
  //   setIsLoading(true);
  //   setError(null);
  //
  //   try {
  //     const res = await fetch("/api/produk");
  //
  //     if (!res.ok) {
  //       throw new Error(`Gagal mengambil data. Status: ${res.status}`);
  //     }
  //
  //     const resdata = await res.json();
  //     setProducts(resdata.data ?? []);
  //   } catch (err) {
  //     console.error("Error fetching products:", err);
  //     setError("Data produk gagal dimuat. Silakan coba lagi.");
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetch("/api/produk")
  //     .then((res) => res.json())
  //     .then((resdata) => {
  //       setProducts(resdata.data ?? []);
  //       // console.log("Data produk:", resdata);
  //     })
  //     .catch((err) => {
  //       console.error("Error fetching products:", err);
  //       setError("Data produk gagal dimuat. Silakan coba lagi.");
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // }, []);
  // -------------------------------------------------------------

  return (
    <div className="mx-auto flex w-full flex-col gap-6 px-4 py-8">
      <HeroSection username="User" products={products} />
    </div>
  );
};

export default ProdukView;
