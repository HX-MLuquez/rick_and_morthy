import { useState } from "react";
import style from "../styles/SearchBar.module.css";
import { useDispatch } from "react-redux";
import { handleNumber } from "../redux/actions/actions";

export default function SearchBar({ onSearch }) {
  // console.log("####", onSearch);
  const [id, setId] = useState("");
  const dispatch = useDispatch()

  function handleChange(event) {
   // console.log("input value ", event.target.value);
    setId(event.target.value);
  }
  function submit(){
    onSearch(id)
    dispatch(handleNumber(1))
  }
  return (
    <div className={style.search}>
      <input onChange={handleChange} type="search" name="search" value={id} />
      <button onClick={submit}>Search</button>
    </div>
  );
}
