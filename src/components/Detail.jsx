import React, { useState, useEffect } from "react";
import style from "../styles/Detail.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/detail/${id}`).then(
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
    <div className={style.detail} key={character.id}>
      <img src={character.image} alt={character.name} />
      <div>
        <h1>{character.name}</h1>
        <h2>{character.species}</h2>
      </div>

      <div className={style.text_contain}>
        <h3>{character.status}</h3>
        <h3>{character.gender}</h3>
        <h3>{character.origin}</h3>
        <h3>{character.location}</h3>
      </div>
    </div>
  );
}
