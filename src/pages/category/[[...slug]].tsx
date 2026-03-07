import { useRouter } from "next/router";

const halamanKategori = () => {
    const router = useRouter();
    const { query } = useRouter();
    
    return (
        <div className="flex min-h-screen flex-col gap-4 p-2">
            <h1 className="text-4xl font-bold">Halaman Kategori</h1>
            <div>
                <p>Kategori:</p>
                <ul className="list-disc pl-5">
                    {Array.isArray(query.slug) ? (
                        query.slug.map((item, index) => (
                            <li key={index}>- {item}</li>
                        ))
                    ) : query.slug ? (
                        <li>{query.slug}</li>
                    ) : (
                        <li>Semua Kategori</li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default halamanKategori;
