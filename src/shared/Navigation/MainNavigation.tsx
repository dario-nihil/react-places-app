import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import styles from "./MainNavigation.module.css";
import NavLinks from "./NavLinks";

const MainNavigation = () => {
  return (
    <MainHeader>
      <button className={styles["main-navigation__menu-btn"]}>
        <span />
        <span />
        <span />
      </button>
      <h1 className={styles["main-navigation__title"]}>
        <Link to="/">YourPlaces</Link>
      </h1>
      <nav>
        <NavLinks />
      </nav>
    </MainHeader>
  );
};

export default MainNavigation;
