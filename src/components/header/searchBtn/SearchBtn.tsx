import { SearchIcon } from "lucide-react";
import styles from "./saerchBar.module.css";

type Props = {
  className?: string;
  inputClassName?: string;
  iconClassName?: string;
};
const SearchBtn = ({ className, inputClassName, iconClassName }: Props) => {
  return (
    <div className={`${styles.search} ${className}`}>
      <div className={styles.searchIcon}>
        <SearchIcon className={iconClassName} />
      </div>

      <input
        type="text"
        placeholder="Найти ..."
        className={`${styles.searchInput} ${inputClassName}`}
      />
    </div>
  );
};

export default SearchBtn;
