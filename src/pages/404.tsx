import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/404.module.scss";
import Image from "next/image";

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>404 - Halaman Tidak Ditemukan</title>
      </Head>
      <div className={styles.error}>
        <div className={styles.error__card}>
          <Image
            src="/404.svg"
            alt="404 Not Found"
            className={styles.error__image}
          />
          <h1 className={styles.error__title}>Halaman Tidak Ditemukan</h1>
          <p className={styles.error__description}>
            Maaf, halaman yang Anda cari tidak tersedia atau mungkin sudah
            dipindahkan.
          </p>
          <Link href="/" className={styles.error__homeButton}>
            Kembali ke Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default Custom404;
