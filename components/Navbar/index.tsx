import Link from "next/link";
import React from "react";
import classes from "./navbar.module.scss";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <p>
        <Link href={"/"}>Coins List</Link>
      </p>
      <p>
        <Link href={"/"}>Dashboard</Link>
      </p>
      <li></li>
    </div>
  );
};

export default Navbar;
