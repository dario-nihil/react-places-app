import { useState } from "react";

import IPlace from "../../shared/interfaces/IPlace";
import styles from "./PlaceItem.module.css";
import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import Modal from "../../shared/components/UIElements/Modal";

const PlaceItem = (props: IPlace) => {
  const [showMap, setShowMap] = useState(false);
  const openMapHandler = () => {
    setShowMap(true);
  };
  const closeMapHandler = () => {
    setShowMap(false);
  };

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
    <>
      {showMap && (
        <Modal
          show={showMap}
          onCancel={closeMapHandler}
          overlayProps={{
            header: address,
            contentClass: "place-item__modal-content",
            contentStyle: { padding: "0" },
            footerClass: "place-item__modal-actions",
            footer: <Button onClick={closeMapHandler}>CLOSE</Button>,
            footerStyle: { textAlign: "right" },
          }}
        >
          <div className={styles["map-container"]}>
            <h2>THE MAP!</h2>
          </div>
        </Modal>
      )}
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
            <Button inverse onClick={openMapHandler}>
              VIEW ON MAP
            </Button>
            <Button to={`/places/${id}`}>EDIT</Button>
            <Button danger>DELETE</Button>
          </div>
        </Card>
      </li>
    </>
  );
};

export default PlaceItem;
