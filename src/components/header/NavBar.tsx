import { Link, NavLink } from "react-router-dom";

import { navbarList } from "../../lib/const";
import { NavListsType, ProductType } from "../../lib/types";
import { HeartIcon, Logo, ShoppingIcon } from "../../ui/icons";
import MobileNav from "./mobile/MobileNav";
import SearchBtn from "./searchBtn/SearchBtn";
import styles from "./header.module.css";

import { useState } from "react";
import ListItem from "./searchBtn/searchLists/ListItem";

const NavBar = () => {
  const navLinks: NavListsType[] = navbarList;
  const [query, setQuery] = useState("");
  const [resultsList, setResultList] = useState<ProductType[]>([]);

  return (
    <>
      <nav className={styles.navbar}>
        <Link to="/" className={styles.logo}>
          <Logo />
        </Link>

        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <NavLink to={link.to}>{link.title}</NavLink>
            </li>
          ))}
        </ul>

        <SearchBtn
          setResultList={setResultList}
          query={query}
          setQuery={setQuery}
        />

        <ListItem
          resultsList={resultsList}
          setResultList={setResultList}
          setQuery={setQuery}
        />
        <div className={styles.contactBox}>
          <p>
            <a href="tel:+74957228800">+7 (495) 722-88-00</a>
          </p>

          <div className={styles.icons}>
            <div className={styles.icon}>
              <HeartIcon />
            </div>
            <div className={styles.icon}>
              <ShoppingIcon />
            </div>
          </div>
        </div>
      </nav>
      <hr></hr>
      {/* mobile nav */}
      <MobileNav />
    </>
  );
};

export default NavBar;
