import { getProducts } from "../../lib/services";

import Catalogs from "../../components/catalog/Catalogs";
import { useLoaderData } from "react-router-dom";
import { ProductType } from "../../lib/types";

const Catalog = () => {
  const products: ProductType[] = useLoaderData();

  return (
    <div>
      <Catalogs products={products} />

      {/* <ImagesFrame /> */}
    </div>
  );
};

export async function loader() {
  const products = await getProducts();

  return products;
}
export default Catalog;
