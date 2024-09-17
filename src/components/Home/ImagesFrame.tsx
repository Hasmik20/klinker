import { Link } from "react-router-dom";
import house2 from "../../assets/images/house2.jpeg";
import house3 from "../../assets/images/house3.jpeg";
import house4 from "../../assets/images/house4.jpeg";
import styles from "./imageFrame.module.css";

const images = [
  { image: house4, title: "Термопанели", id: 1 },
  { image: house2, title: "Термопанели", id: 2 },
  { image: house3, title: "Термопанели", id: 3 },
  { image: house4, title: "Термопанели", id: 4 },
];
const ImagesFrame = () => {
  return (
    <div className={styles.imagesContainer}>
      {images.map((item) => (
        <Link
          to={`/catalog/:${item.id}`}
          key={item.id}
          className={styles.imageContainer}
        >
          <div className={styles.titleContainer}>
            <h2>{item.title}</h2>
          </div>
          <div className={styles.img}>
            <img src={item.image} alt="logo"></img>{" "}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ImagesFrame;
