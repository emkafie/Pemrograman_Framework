import { useRouter } from "next/router";

const HalamanProduk = () => {
    const Router = useRouter();
    console.log(Router);
    return (
        <div>
            <h1>Halaman Produk</h1>
            <p>Produk: {Router.query.id}</p>
        </div>
    );
}

export default HalamanProduk;