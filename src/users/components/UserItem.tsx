import { Link } from "react-router-dom";

import Card from "../../shared/components/UIElements/Card";
import Avatar from "../../shared/components/UIElements/Avatar";
import styles from "./UserItem.module.css";

type AppProps = {
  id: string;
  name: string;
  image: string;
  placeCount: number;
};

const UserItem = ({ id, image, name, placeCount }: AppProps) => {
  return (
    <li className={styles["user-item"]}>
      <Card className={styles["user-item__content"]}>
        <Link to={`/${id}/places`}>
          <div className={styles["user-item__image"]}>
            <Avatar image={image} alt={name} />
          </div>
          <div className={styles["user-item__info"]}>
            <h2>{name}</h2>
            <h3>
              {placeCount} {placeCount === 1 ? "Place" : "Places"}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default UserItem;
