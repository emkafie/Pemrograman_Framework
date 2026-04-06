import ProdukView from "@/views/produk";
import { ProductType } from "../../types/Product.type";
import { retrieveProducts } from "@/utils/db/servicefirebase";


const halamanProdukStatic = (props: { products: ProductType[] }) => {
  const { products } = props;
  return (
    <div>
      <ProdukView products={products} />
    </div>
  );
};

export default halamanProdukStatic;

export async function getStaticProps() {
  const data = await retrieveProducts("products");
  return {
    props: {
      products: data as ProductType[],
    },
  };
}
