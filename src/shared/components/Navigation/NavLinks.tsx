import { NavLink } from "react-router-dom";

import styles from "./NavLinks.module.css";

const NavLinks = () => {
  return (
    <ul className={styles["nav-links"]}>
      <li>
        <NavLink to="/" exact activeClassName={styles.active}>
          ALL USERS
        </NavLink>
      </li>
      <li>
        <NavLink to="/u1/places" activeClassName={styles.active}>
          MY PLACES
        </NavLink>
      </li>
      <li>
        <NavLink to="/places/new" activeClassName={styles.active}>
          ADD PLACE
        </NavLink>
      </li>
      <li>
        <NavLink to="/auth" activeClassName={styles.active}>
          AUTHENTICATE
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
