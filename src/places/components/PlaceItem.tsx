import IPlace from "../../shared/interfaces/IPlace";
import styles from "./PlaceItem.module.css";
import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";

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
          <Button inverse>VIEW ON MAP</Button>
          <Button to={`/places/${id}`}>EDIT</Button>
          <Button danger>DELETE</Button>
        </div>
      </Card>
    </li>
  );
};

export default PlaceItem;
