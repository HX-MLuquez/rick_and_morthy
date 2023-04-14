import React from "react";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFav,
  orderCards,
  filterCards,
  reset,
} from "../redux/actions/actions";
import style from "../styles/Favorites.module.css";

export default function Favorites({ onClose }) {
  const { myFavorites } = useSelector((state) => state);
  const dispatch = useDispatch();
  function closeFavorite(id) {
    onClose(id);
    dispatch(removeFav(id));
  }
  // Male, Female, Genderless y unknown.
  function handleOrder(e) {
    e.preventDefault();
    const { name, value } = e.target;
    dispatch(orderCards(value));
  }

  function handleFilter(e) {
    e.preventDefault();
    const { name, value } = e.target;
    dispatch(filterCards(value));
  }

  function resetBtton() {
    dispatch(reset());
  }
  return (
    <div>
      <div className={style.nav_favorites}>
        <select onChange={handleOrder} name="order" defaultValue={"DEFAULT"}>
          <option value="DEFAULT" disable="true">
            Select Order
          </option>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <select onChange={handleFilter} name="filter" defaultValue={"DEFAULT"}>
          <option value="DEFAULT" disable="true">
            Select Filter
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
        <button onClick={resetBtton}>Reset</button>
      </div>
      <div className={style.cards_container}>
        {myFavorites &&
          myFavorites.map((element) => {
            return (
              <Card
                key={element.id}
                id={element.id}
                name={element.name}
                status={element.status}
                species={element.species}
                gender={element.gender}
                origin={element.origin}
                image={element.image}
                onClose={() => closeFavorite(element.id)}
              ></Card>
            );
          })}
      </div>
    </div>
  );
}
// function mapState(st) {
//   return {
//     myFavorites: st.myFavorites,
//   };
// }
// function mapDispatch(d) {
//   return {
//     removeFav: (id) => d(removeFav(id)),
//   };
// }

// export default connect(mapState, mapDispatch)(Favorites);
