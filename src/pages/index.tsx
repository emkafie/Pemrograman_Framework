import Link from "next/link";

export default function Home() {
  return (
    <section className="flex min-h-screen flex-col gap-4 p-24">
      <h1 className="text-4xl font-bold">Praktikum Next.js</h1>
      <p className="text-lg">Mahasiswa D4 Pengembangan Web</p>
      <div className="flex flex-col my-3 gap-4">
        <Link
          href="/about"
          className="w-fit p-2 bg-green-500 rounded hover:bg-green-600"
        >
          <p className="text-white">Ke Halaman About</p>
        </Link>
        <Link
          href="/profile"
          className="w-fit p-2 bg-blue-500 rounded hover:bg-blue-600"
        >
          <p className="text-white">Ke Halaman Profile</p>
        </Link>
      </div>
    </section>
  );
}
