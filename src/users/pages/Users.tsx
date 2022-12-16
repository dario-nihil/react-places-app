import IUser from "../../shared/IUser";
import UserList from "../components/UserList";

const Users = () => {
  const USERS: IUser[] = [
    {
      id: "u1",
      name: "Max Swartz",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      places: 3,
    },
  ];
  return <UserList items={USERS} />;
};

export default Users;
