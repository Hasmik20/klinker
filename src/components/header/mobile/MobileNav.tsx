import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import "./mobileNav.scss";
import {
  Logo,
  ShoppingIcon,
  BurgerIcon,
  CloseIcon,
  HeartIcon,
  SearchIcon,
  GreaterIcon,
} from "../../../ui/icons";
import { NavListsType } from "../../../lib/types";
import { navbarList } from "../../../lib/const";
import LineDivider from "../../../ui/Linedivider";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks: NavListsType[] = navbarList;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="navMobile">
      <div>
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="rightSide">
        <HeartIcon />

        <ShoppingIcon />
        {/* burger */}
        {!isOpen && <BurgerIcon onClick={toggleMenu} />}
        {isOpen && <CloseIcon onClick={toggleMenu} />}
      </div>

      {/* start menu bar */}
      {isOpen ? (
        <div
          className={
            isOpen
              ? "headerMenuMobile animationDrop "
              : "headerMenuMobile animationUp"
          }
        >
          <div onClick={toggleMenu}></div>
          {/* for mobile nav header */}
          <div className="layerNavHeader">
            <div>
              <Link to="/">
                <Logo />
              </Link>
            </div>
            <div className="rightSide">
              <HeartIcon />
              <ShoppingIcon />
              <div onClick={toggleMenu}>
                <CloseIcon />
              </div>
            </div>
          </div>
          <LineDivider />

          {/* end of mobile header */}
          <div className="searchMobile1">
            <div>
              <span className="searchIcon1">
                <SearchIcon />
              </span>
            </div>

            <input
              type="text"
              placeholder="Найти ..."
              className="searchInput1"
            />
          </div>
          <LineDivider />
          <ul>
            {navLinks.map((link) => (
              <li key={link.id} onClick={() => setIsOpen(false)}>
                <NavLink to={link.to}>{link.title}</NavLink>
                <GreaterIcon />
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {/* end menu bar */}
    </nav>
  );
};

export default MobileNav;
