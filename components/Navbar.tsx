import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href={"/assets-page"}>Asset Page</Link>
        </li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default Navbar;
