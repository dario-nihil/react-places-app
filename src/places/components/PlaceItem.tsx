import { useState } from "react";

import IPlace from "../../shared/interfaces/IPlace";
import styles from "./PlaceItem.module.css";
import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import Modal from "../../shared/components/UIElements/Modal";
import Maps from "../../shared/components/UIElements/Maps";

const PlaceItem = (props: IPlace) => {
  const [showMap, setShowMap] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const openMapHandler = () => {
    setShowMap(true);
  };
  const closeMapHandler = () => {
    setShowMap(false);
  };

  const showDeleteWarningHandler = () => {
    setShowConfirmModal(true);
  };

  const cancelDeleteModalHandler = () => {
    setShowConfirmModal(false);
  };

  const confirmDeleteHandler = () => {
    setShowConfirmModal(false);
    console.log("Deleting...");
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
            footerStyle: { textAlign: "right", marginBottom: "1rem" },
          }}
        >
          <div className={styles["map-container"]}>
            <Maps zoom={16} center={{ ...coordinate }} />
          </div>
        </Modal>
      )}
      <Modal
        show={showConfirmModal}
        onCancel={cancelDeleteModalHandler}
        overlayProps={{
          header: "Are you sure?",
          footerClass: "place-item__modal-actions",
          footerStyle: { textAlign: "right", marginBottom: "1rem" },
          footer: (
            <>
              <Button type="button" inverse onClick={cancelDeleteModalHandler}>
                CANCEL
              </Button>
              <Button type="button" danger onClick={confirmDeleteHandler}>
                DELETE
              </Button>
            </>
          ),
        }}
      >
        <p>
          Do you want to proceed and delete this place? Please note that it
          can't be undone thereafter.
        </p>
      </Modal>
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
            <Button danger onClick={showDeleteWarningHandler}>
              DELETE
            </Button>
          </div>
        </Card>
      </li>
    </>
  );
};

export default PlaceItem;
