import styles from "./catalogItems.module.css";
import { ProductType } from "../../lib/types";
import { useNavigate } from "react-router-dom";

type Props = {
  product: ProductType;
};

const CatalogItem = ({ product }: Props) => {
  const navigate = useNavigate();
  const onClickDetails = () => {
    navigate(`/catalog/${product.id}`);
  };
  return (
    <div onClick={onClickDetails} className={styles.itemsContainer}>
      <img
        src={product.attachments[0].url}
        alt={product.name}
        className={styles.img}
      />

      <div>
        <p className={styles.text}>{product.name}</p>
        <p className={styles.price}>
          {product.price} {product.priceSuffix}{" "}
        </p>
      </div>
    </div>
  );
};

export default CatalogItem;
