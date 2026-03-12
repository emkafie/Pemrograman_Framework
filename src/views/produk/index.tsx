import { useEffect, useState } from "react";
import HeroSection from "./components/HeroSection";
import styles from "./produk.module.scss";
import useSWR from "swr";
import fetcher from "@/pages/utils/swr/fetcher";

type ProductType = {
  id: string;
  name: string;
  price: number;
  size: string;
  category: string;
  image: string;
};

const ProdukView = () => {
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

  // --- FETCHING DENGAN SWR ---
  const { data, error, isLoading, mutate } = useSWR("/api/produk", fetcher);
  const products: ProductType[] = data?.data ?? [];

  return (
    <div className="mx-auto flex min-h-[calc(100vh-120px)] w-full max-w-5xl flex-col gap-6 px-4 py-8">
      <HeroSection username="User" />
      {/* <MainSection onLogout={handleLogout} /> */}
      <main className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-3 flex flex-row items-center justify-between gap-3">
          <h1 className="text-3xl font-bold text-slate-800">Daftar Produk</h1>
          <button
            type="button"
            // onClick={fetchProducts} // --- MANUAL FETCHING ---
            onClick={() => mutate()} // --- SWR FETCHING ---
            disabled={isLoading}
            className="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600 disabled:cursor-not-allowed disabled:bg-green-300"
          >
            {isLoading ? "Memuat..." : "Refresh Data"}
          </button>
        </div>
        {error && (
          <p className="mb-4 rounded bg-red-50 px-3 py-2 text-sm text-red-600">
            {/* {error} */} {/* --- MANUAL ERROR STRING --- */}
            Data produk gagal dimuat. Silakan coba lagi. {/* --- SWR ERROR --- */}
          </p>
        )}
        <section className="grid grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="mb-4 flex flex-row items-center border-slate-300 py-4 w-fit"
            >
              <div className="flex flex-col ">
                <img
                  src={product.image}
                  alt="product_image"
                  className="mt-2 h-32 w-32 object-cover"
                />
                <h2 className="text-2xl font-semibold text-slate-800">
                  {product.name}
                </h2>
                <p className="mt-2 text-slate-800">Ukuran: {product.size}</p>
                <p className="mt-2 text-slate-500">{product.category}</p>
                <p className="text-xl mt-2 text-amber-600 font-semibold">
                  Rp. {product.price}
                </p>
              </div>
            </div>
          ))}
          <div className={styles.produk_content_skeleton}>
            <div className={styles.produk_content_skeleton_image}></div>
            <div className={styles.produk_content_skeleton_name}></div>
            <div className={styles.produk_content_skeleton_price}></div>
            <div className={styles.produk_content_skeleton_category}></div>
            <div className={styles.produk_content_skeleton_size}></div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProdukView;
