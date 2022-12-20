import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../../context/auth-context";
import styles from "./NavLinks.module.css";

const NavLinks = () => {
  const authCtx = useContext(AuthContext);

  return (
    <ul className={styles["nav-links"]}>
      <li>
        <NavLink to="/" exact activeClassName={styles.active}>
          ALL USERS
        </NavLink>
      </li>
      {authCtx?.isLoggedIn && (
        <li>
          <NavLink to="/u1/places" activeClassName={styles.active}>
            MY PLACES
          </NavLink>
        </li>
      )}
      {authCtx?.isLoggedIn && (
        <li>
          <NavLink to="/places/new" activeClassName={styles.active}>
            ADD PLACE
          </NavLink>
        </li>
      )}
      {!authCtx?.isLoggedIn && (
        <li>
          <NavLink to="/auth" activeClassName={styles.active}>
            AUTHENTICATE
          </NavLink>
        </li>
      )}
      {authCtx?.isLoggedIn && <button onClick={authCtx.logout}>LOGOUT</button>}
    </ul>
  );
};

export default NavLinks;
