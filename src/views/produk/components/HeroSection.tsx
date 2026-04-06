import MainSection from "./MainSection";
import { ProductType } from "@/types/Product.type";

type HeroSectionProps = {
  username: string;
  products?: ProductType[];
};

const HeroSection = ({ username, products }: HeroSectionProps) => {
  return (
    <main className="flex flex-col gap-5 ">
      <section className="rounded-xl bg-linear-to-r from-emerald-500 to-green-600 p-6 text-white shadow-md">
      <p className="text-sm uppercase tracking-wide text-emerald-100">Dashboard Produk</p>
      <h1 className="mt-2 text-3xl font-bold">Selamat datang, {username}</h1>
      <p className="mt-2 text-emerald-50">
        Kelola dan lihat ringkasan produk kamu dari satu tempat.
      </p>
    </section>
      <MainSection products={products} />
    </main>
  );
};

export default HeroSection;
