import stone from "../../../../assets/images/stone.png";

const ListItem = () => {
  return (
    <div>
      <div>
        <img src={stone} alt="logo" />
      </div>
      <div>
        <h3>Cerrad Loft brick, Cardamon</h3>
        <p>Кирпич</p>
        <p>1 714,00 руб./м²</p>
      </div>
    </div>
  );
};

export default ListItem;
