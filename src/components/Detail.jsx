import React, { useState, useEffect } from "react";
import style from "../styles/Detail.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <div className={style.detail}>
      <img src={character.image} alt={character.name} />
      <h1>{character.name}</h1>
      <div className={style.text_contain}>
        <h2>{character.status}</h2>
        <h2>{character.species}</h2>
        <h2>{character.gender}</h2>
        <h2>{character.origin?.name}</h2>
      </div>
    </div>
  );
}
