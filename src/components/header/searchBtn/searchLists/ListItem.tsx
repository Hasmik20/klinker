import { Link } from "react-router-dom";
import { ProductType } from "../../../../lib/types";
import styles from "./searchList.module.css";
type Props = {
  resultsList: ProductType[];
  setQuery: (value: string) => void;
  setResultList: (result: ProductType[]) => void;
};
const ListItem = ({ resultsList, setResultList, setQuery }: Props) => {
  return (
    <div className={styles.container}>
      {resultsList.map((item) => (
        <Item
          key={item.id}
          item={item}
          setResultList={setResultList}
          setQuery={setQuery}
        />
      ))}
    </div>
  );
};

export default ListItem;

type PropsItem = {
  item: ProductType;
  setQuery: (value: string) => void;
  setResultList: (result: ProductType[]) => void;
};
const Item = ({ item, setResultList, setQuery }: PropsItem) => {
  const onClickClear = () => {
    setResultList([]);
    setQuery("");
  };
  return (
    <Link
      to={`/catalog/${item.id}`}
      onClick={onClickClear}
      className={styles.itemContainer}
    >
      <div className={styles.imageContainer}>
        <img src={item.attachments[0].url} alt={item.name} />
      </div>
      <div className={styles.detailContainer}>
        <p className={styles.title}>{item.country}</p>
        <p className={styles.details}>{item.series}</p>
        <p className={styles.price}>
          {item.price} {item.priceSuffix}
        </p>
      </div>
    </Link>
  );
};
