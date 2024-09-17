import { useState } from "react";
import house from "../../assets/images/house.jpeg";
import house2 from "../../assets/images/house2.jpeg";
import house3 from "../../assets/images/house3.jpeg";
import house4 from "../../assets/images/house4.jpeg";
import styles from "./slideShow.module.css";
import { Link } from "react-router-dom";

const images = [
  { image: house, id: 1 },
  { image: house2, id: 2 },
  { image: house3, id: 3 },
  { image: house4, id: 4 },
];
const SlideShow = () => {
  const [currentImg, setCurrentImg] = useState(0);

  return (
    <section
      className={styles.mainHero}
      style={{ backgroundImage: `url(${images[currentImg].image})` }}
    >
      <div className={styles.titles}>
        <h2> дизайн</h2>
        <h2>простота</h2>
        <h2>надежность</h2>
      </div>
      <div className={styles.btn}>
        <Link to="/catalog">
          <button>посмотреть каталог</button>
        </Link>
      </div>
      <ul className={styles.inputContainer}>
        {images.map((item, index) => (
          <li key={item.id}>
            <input
              type="radio"
              name="slide"
              value={currentImg}
              onChange={() => {
                setCurrentImg(index);
              }}
              checked={currentImg === index}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SlideShow;
