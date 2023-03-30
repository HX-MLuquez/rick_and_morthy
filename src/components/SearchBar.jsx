import { useState } from "react";
import style from "../styles/SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  // console.log("####", onSearch);
  const [id, setId] = useState("");

  function handleChange(event) {
   console.log("input value ", event.target.value);
    setId(event.target.value);
  }
  return (
    <div className={style.search}>
      <input onChange={handleChange} type="search" name="search" value={id} />
      <button onClick={() => onSearch(id)}>Agregar</button>
    </div>
  );
}
