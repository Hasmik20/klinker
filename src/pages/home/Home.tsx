import ImagesFrame from "../../components/Home/ImagesFrame";
import SlideShow from "../../components/Home/SlideShow";
import Map from "../../components/Home/map";
const Home = () => {
  return (
    <div>
      <SlideShow />

      <div className="wrapper">
        <ImagesFrame />
        <Map />
      </div>
    </div>
  );
};

export default Home;
