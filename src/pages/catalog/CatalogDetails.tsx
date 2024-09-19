import { useLoaderData } from "react-router-dom";

import { getDetails } from "../../lib/services";
import { ProductType } from "../../lib/types";
import styles from "./catalogDetails.module.css";
import { useState } from "react";

const CatalogDetails = () => {
  const product: ProductType = useLoaderData();
  const [currentImgId, setCurrentImgId] = useState(0);
  const onClickChangeId = (id: number) => {
    setCurrentImgId(Number(id));
  };
  return (
    <div className={styles.container}>
      <div className={styles.upperBox}>
        <div className={styles.imagesContainer}>
          {product.attachments?.map((item, index) => (
            <div
              key={item.id}
              className={styles.img}
              onClick={() => onClickChangeId(index)}
            >
              <img src={item.url} alt="img" />
            </div>
          ))}
        </div>
        <div className={styles.imgContainer}>
          <img src={product.attachments[currentImgId].url} alt={product.name} />
        </div>
        <div className={styles.detailsContainer}>
          <h5 className={styles.sector}>{product.subCategory.name}</h5>
          <h2>{product.manufacturer}</h2>
          <p className={styles.series}>{product.series}</p>
          <p className={styles.price}>
            {product.price} {product.priceSuffix}
          </p>
          <button className={styles.btn1}>Добавить в корзину</button>
          <p className={styles.car}>{product.color}</p>
          <p className={styles.allP}>{product.country}</p>
          <p className={styles.allP}>{product.series}</p>
          <p className={styles.allP}>{product.size}</p>
          <p className={styles.allP}>{product.thickness}</p>
          <div className={styles.space}></div>
        </div>
      </div>
      <div className={styles.downBox}>
        <h2>Похожие товары</h2>
      </div>
    </div>
  );
};

type Props = {
  params: {
    catalogId: string;
  };
};
export async function loader({ params }: Props) {
  const details = await getDetails(params.catalogId);

  return details;
}
export default CatalogDetails;
