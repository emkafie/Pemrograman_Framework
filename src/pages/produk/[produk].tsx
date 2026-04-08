import { ProductType } from "@/types/Product.type";
import { useRouter } from "next/router";
import useSWR from "swr";
import fetcher from "@/utils/swr/fetcher";
import DetailProduk from "@/views/detailProduk";
import { retrieveProductById, retrieveProducts } from "@/utils/db/servicefirebase";

const DetailProdukPage = ({ product }: { product: ProductType | null }) => {
//   const { query } = useRouter();
//   const { data, error, isLoading } = useSWR(
//     `/api/produk/${query.produk}`,
//     fetcher,
//   );
//   return (
//     <div>
//       <DetailProduk product={isLoading ? null : data.data} />
//     </div>
//   )
// }

return (
  <div>
    <DetailProduk product={product} />
  </div>
)
}


export default DetailProdukPage;

export async function getServerSideProps(context: any) {
  const { produk } = context.params;
  const data = await retrieveProductById("products", produk);

  return {
    props: {
      product: data ? data : null,
    },
  };
}

export async function getStaticPaths() {
  const data = await retrieveProducts("products");
  const paths = data.map((product: { id: string }) => ({
    params: { produk: product.id },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const { produk } = context.params;
  const data = await retrieveProductById("products", produk);

  return {
    props: {
      product: data ? data : null,
    },
  };
}
