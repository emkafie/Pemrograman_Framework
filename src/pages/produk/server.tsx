import TampilanProduk from "../../views/produk";
import { ProductType } from "../../types/Product.type";
import { retrieveProducts } from "@/utils/db/servicefirebase";


const halamanProdukServer = (props: { products: ProductType[] }) => {
  const { products } = props;
  return (
    <div>
      <TampilanProduk products={products} />
    </div>
  );
};

export default halamanProdukServer;

export async function getServerSideProps() {
  const data = await retrieveProducts("products");
  return {
    props: {
      products: data as ProductType[],
    },
  };
}
