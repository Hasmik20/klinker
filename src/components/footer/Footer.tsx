import { Envelope, Phone, Location } from "../../ui/icons";
// import TelNumber from "../../ui/TelNumber";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.mainContainer}>
        <section className={styles.leftSection}>
          <div className={styles.contacts}>
            <div className={styles.icon}>
              <Phone />
            </div>
            {/* <TelNumber /> */}
            <div>
              <p className={styles.firstIcon}>
                <a href="tel:4957228800"> +7 (495) 722-88-00</a>
              </p>
              <p>
                <a href="tel:4951165838">+7 (495) 116-58-38</a>
              </p>
            </div>
          </div>
          <div className={styles.contacts}>
            <div className={styles.icon}>
              <Envelope />
            </div>
            <div>
              <p>
                <a href="mailto: magmatika08@gmail.com">
                  magmatika08@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className={styles.contacts}>
            <div className={styles.icon}>
              <Location />
            </div>
            <div>
              <p>Москва, Нахимовский пр-т, 24 </p>
              <p> ЦДИ "Экспострой", пав. 3, стенд 433</p>
            </div>
          </div>
        </section>
        <section className={styles.rightSection}>
          <h6>Каталог</h6>
          <div className={styles.detailsContainer}>
            <div>
              <p>Фасадная плитка, отделка</p>
              <p>Тротуарная плитка</p>
              <p>Ступени</p>
              <p>Бордюры</p>
              <p>Кирпич</p>
            </div>
            <div>
              <p>Термопанели</p>
              <p>Плитка для бассейна</p>
              <p>Товары для благоустройства</p>
              <p>Строительные блоки</p>
              <p>Строительные смеси</p>
            </div>
          </div>
        </section>
        <div className={styles.copyRight}>
          <p>© ТПК “Магматика”</p>
          <p>Пользовательское соглашение</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
