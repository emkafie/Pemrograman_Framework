type HeroSectionProps = {
  username: string;
};

const HeroSection = ({ username }: HeroSectionProps) => {
  return (
    <section className="rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 p-6 text-white shadow-md">
      <p className="text-sm uppercase tracking-wide text-emerald-100">Dashboard Produk</p>
      <h1 className="mt-2 text-3xl font-bold">Selamat datang, {username}</h1>
      <p className="mt-2 text-emerald-50">
        Kelola dan lihat ringkasan produk kamu dari satu tempat.
      </p>
    </section>
  );
};

export default HeroSection;
