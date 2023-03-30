import React from "react";
import SearchBar from "./SearchBar";
import style from '../styles/NavBar.module.css'
import rick from '../img/rick.png'

import { Link } from "react-router-dom";

export default function NavBar({ onSearch, logout }) {
  return (
    <div className={style.nav}>
      <div>
        <img className={style.logo} src={rick} alt="rick logo"></img>
      </div>
      <Link to="/home">
        <button>Home</button>
      </Link>
      <Link to="/about">
        <button>About</button>
      </Link>
      <Link to="/favorites">
        <button>Favorites</button>
      </Link>
      <SearchBar onSearch={onSearch} />

      <button onClick={logout}>LogOut</button>
    </div>
  );
}
