import styles from "./generalCss.module.css";

const TelNumber = () => {
  return (
    <div>
      <p className={styles.firstIcon}>
        <a href="tel:4957228800"> +7 (495) 722-88-00</a>
      </p>
      <p>
        <a href="tel:4951165838">+7 (495) 116-58-38</a>
      </p>
    </div>
  );
};

export default TelNumber;
