import { SearchIcon } from "lucide-react";

import { useEffect } from "react";

import styles from "./saerchBar.module.css";
import { getProducts } from "../../../lib/services";
import { ProductType } from "../../../lib/types";

type Props = {
  className?: string;
  inputClassName?: string;
  iconClassName?: string;
  query: string;
  setQuery: (value: string) => void;
  setResultList: (result: ProductType[]) => void;
};
const SearchBtn = ({
  className,
  inputClassName,
  iconClassName,
  query,
  setQuery,
  setResultList,
}: Props) => {
  useEffect(() => {
    const fetchProduct = async (value: string) => {
      if (!value) return;
      if (!value) return setResultList([]);
      const products: ProductType[] = await getProducts();

      const results = products.filter((product) => {
        return (
          value &&
          product?.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
        );
      });
      setResultList(results);
    };

    fetchProduct(query);
  }, [query, setResultList]);

  // const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setQuery(e.target.value);
  // };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setQuery("");
  };
  return (
    <div className={`${styles.search} ${className}`}>
      <div className={styles.searchIcon}>
        <SearchIcon className={iconClassName} />
      </div>
      <form onSubmit={onSubmit}>
        <input
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          type="text"
          placeholder="Найти ..."
          className={`${styles.searchInput} ${inputClassName}`}
        />
      </form>
    </div>
  );
};

export default SearchBtn;
