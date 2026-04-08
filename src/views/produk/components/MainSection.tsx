import styles from "@/views/produk/produk.module.scss";
import { ProductType } from "@/types/Product.type";
import useSWR from "swr";
import fetcher from "@/utils/swr/fetcher";
import Link from "next/link";

type MainSectionProps = {
  products?: ProductType[];
};

const MainSection = ({ products }: MainSectionProps) => {
  // --- FETCHING DENGAN SWR ---
  // Gunakan fallbackData dari props (SSR/SSG), tapi tetap aktifkan kunci cache "/api/produk"
  // agar mutate() bisa jalan (refresh).
  const { data, error, isLoading, isValidating, mutate } = useSWR(
    "/api/produk",
    fetcher,
    { fallbackData: products ? { data: products } : undefined }
  );

  // Status isFetching dipakai agar tampil "Memuat..." saat me-refresh SWR.
  const isFetching = isLoading || isValidating;

  // Prioritaskan data SWR, lalu fallback ke props
  const displayProducts: ProductType[] = data?.data ?? products ?? [];

  return (
    <main className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-3 flex flex-row items-center justify-between gap-3">
        <h1 className="text-3xl font-bold text-slate-800">
          Daftar Produk {products ? "(Static/Server)" : "(Client-SWR)"}
        </h1>
        <button
          type="button"
          onClick={() => mutate()} // --- SWR FETCHING ---
          disabled={isFetching}
          className="rounded bg-green-500 px-4 py-2 text-white transition-all hover:bg-green-600 active:scale-95 disabled:cursor-not-allowed disabled:bg-green-300"
        >
          {isFetching ? "Memuat..." : "Refresh Data"}
        </button>
      </div>
      {error && (
        <p className="mb-4 rounded bg-red-50 px-3 py-2 text-sm text-red-600">
          Data produk gagal dimuat. Silakan coba lagi. {/* --- SWR ERROR --- */}
        </p>
      )}
      <section className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {displayProducts.length > 0 ? (
          <>
            {displayProducts.map((product: ProductType) => (
              <Link 
                href={`/produk/${product.id}`} 
                key={product.id} 
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-slate-300 hover:shadow-md hover:-translate-y-1"
                style={{ cursor: "pointer", display: "flex" }}
              >
                {/* Image Container - Consistent Aspect Ratio */}
                <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden bg-slate-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content Container */}
                <div className="flex flex-1 flex-col justify-between border-t border-slate-100 p-5">
                  <div className="flex flex-col gap-2">
                    <div className="flex">
                      <p className="-ml-1 w-fit rounded-md bg-slate-100 px-2 py-1 text-xs font-semibold uppercase tracking-wider text-slate-600">
                        {product.category}
                      </p>
                    </div>
                    <h2 className="line-clamp-2 text-lg font-bold leading-snug text-slate-800 transition-colors group-hover:text-blue-600">
                      {product.name}
                    </h2>
                    <p className="text-sm font-medium text-slate-500">
                      Ukuran: {product.size}
                    </p>
                  </div>
                  <div className="mt-5 flex items-center justify-between">
                    <p className="text-xl font-bold text-slate-900">
                      Rp. {product.price?.toLocaleString("id-ID") ?? "0"}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </>
        ) : (
          <div className={styles.produk_content_skeleton}>
            <div className={styles.produk_content_skeleton_image}></div>
            <div className={styles.produk_content_skeleton_name}></div>
            <div className={styles.produk_content_skeleton_price}></div>
            <div className={styles.produk_content_skeleton_category}></div>
            <div className={styles.produk_content_skeleton_size}></div>
          </div>
        )}
      </section>
    </main>
  );
};

export default MainSection;
