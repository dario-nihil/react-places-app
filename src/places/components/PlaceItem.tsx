import IPlace from "../../shared/interfaces/IPlace";
import styles from "./PlaceItem.module.css";
import Card from "../../shared/components/UIElements/Card";

const PlaceItem = (props: IPlace) => {
  const {
    address,
    location: coordinate,
    creatorId,
    description,
    id,
    imageUrl: image,
    title,
  } = props;
  return (
    <li className={styles["place-item"]}>
      <Card className={styles["place-item__content"]}>
        <div className={styles["place-item__image"]}>
          <img src={image} alt={title} />
        </div>
        <div className={styles["place-item__info"]}>
          <h2>{title}</h2>
          <h3>{address}</h3>
          <p>{description}</p>
        </div>
        <div className={styles["place-item__actions"]}>
          <button>VIEW ON MAP</button>
          <button>EDIT</button>
          <button>DELETE</button>
        </div>
      </Card>
    </li>
  );
};

export default PlaceItem;
