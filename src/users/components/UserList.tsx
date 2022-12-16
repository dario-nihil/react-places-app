import UserItem from "./UserItem";
import IUser from "../../shared/IUser";
import styles from "./UserList.module.css";
import Card from "../../shared/components/UIElements/Card";

type AppPorps = {
  items: IUser[];
};
const UserList = (props: AppPorps) => {
  const { items } = props;
  if (items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>No users found.</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className={styles["users-list"]}>
      {items.map((user) => (
        <UserItem key={user.id} placeCount={user.places} {...user} />
      ))}
    </ul>
  );
};

export default UserList;
