import IUser from "../../shared/interfaces/IUser";
import UserList from "../components/UserList";

const Users = () => {
  const USERS: IUser[] = [
    {
      id: "u1",
      name: "Max Swartz",
      image:
        "https://imageio.forbes.com/specials-images/dam/imageserve/1171238184/0x0.jpg?format=jpg&width=1200",
      places: 3,
    },
  ];
  return <UserList items={USERS} />;
};

export default Users;
