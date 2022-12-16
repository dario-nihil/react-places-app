import styles from "./UserItem.module.css";

type AppProps = {
  id: string;
  name: string;
  image: string;
  placeCount: number;
};

const UserItem = ({ image, name, placeCount }: AppProps) => {
  return (
    <li className={styles["user-item"]}>
      <div className={styles["user-item__content"]}>
        <div className={styles["user-item__image"]}>
          <img src={image} alt={name} />
        </div>
        <div className={styles["user-item__info"]}>
          <h2>{name}</h2>
          <h3>
            {placeCount} {placeCount === 1 ? "Place" : "Places"}
          </h3>
        </div>
      </div>
    </li>
  );
};

export default UserItem;
