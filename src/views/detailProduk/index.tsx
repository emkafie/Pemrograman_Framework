import { ProductType } from "@/types/Product.type";
import Head from "next/head";
import Link from "next/link";
import styles from "@/views/detailProduk/detailProduk.module.scss";

const DetailProduk = ({ product }: { product: ProductType | null }) => {

  if (!product) {
    return (
      <div className={styles.errorContainer}>
        <div className={styles.errorBox}>
          <h1 className={styles.errorTitle}>
            Produk tidak ditemukan
          </h1>
          <Link
            href="/produk"
            className={styles.errorLink}
          >
            Kembali ke Daftar Produk
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{product.name} | My App</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.backLinkWrapper}>
          <Link
            href="/produk"
            className={styles.backLink}
          >
            &larr; Kembali ke Daftar Produk
          </Link>
        </div>

        <main className={styles.card}>
          {/* Image Container */}
          <div className={styles.imageWrapper}>
            <div className={styles.imageInner}>
              <img
                src={product.image}
                alt={product.name}
                className={styles.image}
              />
            </div>
          </div>

          {/* Content Container */}
          <div className={styles.contentWrapper}>
            <div className={styles.header}>
              <p className={styles.category}>
                {product.category}
              </p>
              <h1 className={styles.title}>
                {product.name}
              </h1>
            </div>

            <div className={styles.priceArea}>
              <p className={styles.price}>
                Rp. {product.price?.toLocaleString("id-ID") ?? "0"}
              </p>
            </div>

            <div className={styles.sizeArea}>
              <p className={styles.sizeLabel}>
                Ukuran yang tersedia:
              </p>
              <p className={styles.sizeValue}>
                {product.size}
              </p>
            </div>

            <button
              onClick={() => alert(`Menambahkan ${product.name} ke keranjang!`)}
              className={styles.button}
            >
              Tambahkan ke Keranjang
            </button>
          </div>
        </main>
      </div>
    </>
  );
};

export default DetailProduk;
