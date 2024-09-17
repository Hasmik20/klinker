import { Link, NavLink } from "react-router-dom";

import { navbarList } from "../../lib/const";
import { NavListsType } from "../../lib/types";
import { HeartIcon, Logo, ShoppingIcon } from "../../ui/icons";
import MobileNav from "./mobile/MobileNav";
import SearchBtn from "./searchBtn/SearchBtn";
import styles from "./header.module.css";
// import SearchLists from "./searchBtn/searchLists/SearchLists";

const NavBar = () => {
  const navLinks: NavListsType[] = navbarList;

  return (
    <>
      <nav className={styles.navbar}>
        <Link to="/">
          <Logo />
        </Link>

        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <NavLink to={link.to}>{link.title}</NavLink>
            </li>
          ))}
        </ul>

        <SearchBtn />
        {/* <SearchLists /> */}
        <div className={styles.contactBox}>
          <p>
            <a href="tel:+74957228800">+7 (495) 722-88-00</a>
          </p>

          <div className={styles.icons}>
            <HeartIcon />
            <div className={styles.icon}>
              <ShoppingIcon />
            </div>
          </div>
        </div>
      </nav>
      {/* mobile nav */}
      <MobileNav />
    </>
  );
};

export default NavBar;
