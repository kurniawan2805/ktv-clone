import React from "react";
import { MdSearch, MdMenu } from "react-icons/md";
// import { GiHamburgerMenu } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__item ham-menu">
        <MdMenu />
      </div>
      <div className="navbar__item logo">KASKUS TV</div>
      <div className="navbar__item search-icon">
        <MdSearch />
      </div>
    </div>
  );
};

export default Navbar;
