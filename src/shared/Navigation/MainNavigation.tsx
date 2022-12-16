import { useState } from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import styles from "./MainNavigation.module.css";
import Backdrop from "../components/UIElements/Backdrop";

const MainNavigation = () => {
  const [drawerIsOpen, SetDrawerIsOpen] = useState(false);

  const openDrawer = () => {
    console.log("Open Drawer");
    SetDrawerIsOpen(true);
  };

  const closeDrawer = () => {
    console.log("Close Drawer");
    SetDrawerIsOpen(false);
  };

  return (
    <>
      {drawerIsOpen && <Backdrop onClick={closeDrawer} />}
      {drawerIsOpen && (
        <SideDrawer>
          <nav className={styles["main-navigation__drawer-nav"]}>
            <NavLinks />
          </nav>
        </SideDrawer>
      )}
      <MainHeader>
        <button
          className={styles["main-navigation__menu-btn"]}
          onClick={openDrawer}
        >
          <span />
          <span />
          <span />
        </button>
        <h1 className={styles["main-navigation__title"]}>
          <Link to="/">YourPlaces</Link>
        </h1>
        <nav className={styles["main-navigation__header-nav"]}>
          <NavLinks />
        </nav>
      </MainHeader>
    </>
  );
};

export default MainNavigation;
