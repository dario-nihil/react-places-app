import Card from "../../shared/components/UIElements/Card";
import PlaceItem from "./PlaceItem";
import IPlace from "../../shared/interfaces/IPlace";
import Button from "../../shared/components/FormElements/Button";
import styles from "./PlaceList.module.css";

type AppProps = {
  items: IPlace[];
};

const PlaceList = (props: AppProps) => {
  const { items } = props;
  if (items.length === 0) {
    return (
      <div className={`${styles["place-list"]} center`}>
        <Card>
          <h2>No places found. Maybe create one?</h2>
          <Button to="/places/new">Share Place</Button>
        </Card>
      </div>
    );
  }
  return (
    <ul className={styles["place-list"]}>
      {items.map((place) => (
        <PlaceItem key={place.id} {...place} />
      ))}
    </ul>
  );
};

export default PlaceList;
