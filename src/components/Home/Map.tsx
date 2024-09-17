import MapComponent from "./GoogleMap";
import styles from "./map.module.css";

const Map = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.addressContainer}>
        <h2>наши контакты</h2>
        {/* <TelNumber /> */}
        <div className={styles.telContainer}>
          <p className={styles.firstNum}>
            <a href="tel:4957228800"> +7 (495) 722-88-00</a>
          </p>
          <p>
            <a href="tel:4951165838">+7 (495) 116-58-38</a>
          </p>
        </div>
        <div className={styles.telContainer}>
          <p>
            <a href="mailto: magmatika08@gmail.com">magmatika08@gmail.com</a>
          </p>
        </div>
        <div className={styles.address}>
          <p>Москва, Нахимовский пр-т, 24 </p>
          <p> ЦДИ "Экспострой", пав. 3, стенд 433</p>
        </div>
      </div>
      <div className={styles.mapContainer}>
        <MapComponent />
      </div>
    </div>
  );
};

export default Map;
