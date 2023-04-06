import style from "../styles/Card.module.css";
import { Link } from "react-router-dom";
import {  useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../redux/actions/actions";
import { useState } from "react";
import { useEffect } from "react";

export default function Card(props) {
  const { id, name, status, species, gender, origin, image, onClose } = props;
  const dispatch = useDispatch();
  // dispatch(addFav({}))
  const [isFav, setIsFav] = useState(false);
  const { myFavorites } = useSelector((s) => s);

  function handleFavorite() {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(id));
    } else {
      setIsFav(true);
      dispatch(addFav(props));
    }
  }
  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  function superClouse() {
    onClose(id);
    dispatch(removeFav(id));
  }

  return (
    <div className={style.card}>
      <div className={style.head_card}>
        {isFav ? (
          <button onClick={handleFavorite}>❤️</button>
        ) : (
          <button onClick={handleFavorite}>🤍</button>
        )}
        <button onClick={superClouse}>X</button>
      </div>
      <Link className={style.link} to={`/detail/${id}`}>
        <h1>{name.slice(0,16)}</h1>
        {/* <h2>{status}</h2>
        <h2>{species}</h2>
        <h2>{gender}</h2> */}
        <h2>{origin && origin.slice(0,26)}</h2>
        <img src={image} alt={name} />
      </Link>
    </div>
  );
}

// function mapStateToProp(state) {
//   return {
//     myFavorites: state.myFavorites,
//   };
// }

// function mapDispatchToProp(dispatch) {
//   return {
//     addFav: (ch) => dispatch(addFav(ch)),
//     removeFav: (id) => dispatch(removeFav(id)),
//   };
// }

// export default connect(mapStateToProp, mapDispatchToProp)(Card);
