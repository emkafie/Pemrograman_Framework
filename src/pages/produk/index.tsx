import ProdukView from "../../views/produk";
import { retrieveProducts } from "@/utils/db/servicefirebase";

const ProdukPage = ({ products }: { products: any }) => {
  return (
    <div>
      <ProdukView products={products} />
    </div>
  );
};
export default ProdukPage;

export async function getStaticProps() {
  const data = await retrieveProducts("products");
  return {
    props: {
      products: data,
    },
    revalidate: 10,
  };
}
