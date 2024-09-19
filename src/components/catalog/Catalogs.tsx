import styles from "./catalogItems.module.css";
import CatalogItem from "./CatalogItem";
import { ProductType } from "../../lib/types";

type Props = {
  products: ProductType[];
};
const Catalogs = ({ products }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.filter}>
        <h2>Каталог</h2>
        <h6 className={styles.categoryT}>Категория</h6>
        {products.map((item) => (
          <p key={item.id} className={styles.productP}>
            {item.series}
          </p>
        ))}
        <h6 className={styles.categoryT}>Цена</h6>
        <h6 className={styles.categoryT}>Производитель</h6>
        {products.map((item) => (
          <div key={item.id} className={styles.checkBox}>
            <input
              type="checkbox"
              value={item.manufacturer}
              name={item.manufacturer}
            />
            <label>{item.manufacturer}</label>
          </div>
        ))}
      </div>

      <div className={styles.imgContainer}>
        {products.map((product) => (
          <CatalogItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Catalogs;
