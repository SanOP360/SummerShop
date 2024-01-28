import { Fragment } from "react";
import { NavLink } from "react-router-dom";

import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Trends Shop</h1>

        <nav className={classes.navbar}>
          <ul className={classes.navList}>
            <li className={classes.item}>
              <NavLink activeClassName={classes.active} to="/Form">
                Add Tshirt
              </NavLink>
            </li>
            <li className={classes.item}>
              <NavLink activeClassName={classes.active} to="/Product">
                Product List
              </NavLink>
            </li>
          </ul>
        </nav>

        <HeaderCartButton onClick={props.onShowCart} />
      </header>
    </Fragment>
  );
};

export default Header;
