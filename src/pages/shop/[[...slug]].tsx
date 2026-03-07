import { useRouter } from "next/router";

const halamanToko = () => {
  const router = useRouter();
  console.log(router);
  const { query } = useRouter();
    return (
        <div className="flex min-h-screen flex-col gap-4 p-2">
            <h1 className="text-4xl font-bold">Halaman Toko</h1>
            <p>Toko: {Array.isArray(query.slug) ? query.slug.join("-") : query.slug || "Semua Kategori"}</p>
        </div>
    );
};

export default halamanToko;