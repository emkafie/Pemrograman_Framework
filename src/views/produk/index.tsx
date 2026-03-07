import { useEffect, useState } from "react";
import HeroSection from "./components/HeroSection";

type ProductType = {
  id: string;
  name: string;
  price: number;
  size: string;
  category: string;
};

const ProdukView = () => {
  // const router = useRouter();
  // const [isLogin, setIsLogin] = useState(false);

  const [products, setProducts] = useState<ProductType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   const userToken = localStorage.getItem("authToken");

  //   if (!userToken) {
  //     router.replace("/auth/login");
  //     return;
  //   }

  //   setIsLogin(true);
  // }, [router]);

  // const handleLogout = () => {
  //   localStorage.removeItem("authToken");
  //   router.push("/auth/login");
  // };

  // if (!isLogin) {
  //   return <div>Redirecting...</div>;
  // }

  const fetchProducts = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/produk");

      if (!res.ok) {
        throw new Error(`Gagal mengambil data. Status: ${res.status}`);
      }

      const resdata = await res.json();
      setProducts(resdata.data ?? []);
    } catch (err) {
      console.error("Error fetching products:", err);
      setError("Data produk gagal dimuat. Silakan coba lagi.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="mx-auto flex min-h-[calc(100vh-120px)] w-full max-w-5xl flex-col gap-6 px-4 py-8">
      <HeroSection username="User" />
      {/* <MainSection onLogout={handleLogout} /> */}
      <main className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-3 flex flex-row items-center justify-between gap-3">
          <h1 className="text-3xl font-bold text-slate-800">Daftar Produk</h1>
          <button
            type="button"
            onClick={fetchProducts}
            disabled={isLoading}
            className="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600 disabled:cursor-not-allowed disabled:bg-green-300"
          >
            {isLoading ? "Memuat..." : "Refresh Data"}
          </button>
        </div>
        {error && <p className="mb-4 rounded bg-red-50 px-3 py-2 text-sm text-red-600">{error}</p>}
        {products.map((product) => (
          <div key={product.id} className="mb-4 rounded border border-slate-300 p-4">
            <h2 className="text-2xl font-semibold text-slate-800">
              {product.name}
            </h2>
            <p className="mt-2 text-slate-600">
              Harga: {product.price}
            </p>
            <p className="mt-2 text-slate-600">
              Ukuran: {product.size}
            </p>
            <p className="mt-2 text-slate-600">
              Kategori: {product.category}
            </p>
          </div>
        ))}
      </main>
    </div>
  );
};

export default ProdukView;
