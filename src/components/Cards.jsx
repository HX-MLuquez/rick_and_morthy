import Card from "./Card";
import style from "../styles/Cards.module.css";
import { useSelector } from "react-redux";
import Paginate from "./Paginate";

export default function Cards({ onClose }) {
  const { characters } = useSelector((state) => state);
  const { numPage } = useSelector((state) => state);

  // 20
  //  2    3
  // 0 5  5 10
  let desde = (numPage - 1) * 8; // 5
  let hasta = numPage * 8; // 10

  // cant de numb de page si quiero 5 por page y tengo 20
  // 1   2   3   4
  let cantPages = Math.floor(characters.length / 8);

  let viewCharacters = characters?.slice(desde, hasta);

  return (
    console.log("--->", characters),
    (
      <div>
        <div className={style.cards_container}>
          {viewCharacters &&
            viewCharacters.map((element, index) => {
              return (
                <Card
                  key={index}
                  id={element.id}
                  name={element.name}
                  status={element.status}
                  species={element.species}
                  gender={element.gender}
                  origin={element.origin.name}
                  image={element.image}
                  onClose={onClose}
                ></Card>
              );
            })}
        </div>
        {/* <Paginate cantPages={characters.slice(0,cantPages)}></Paginate> */}
        <Paginate cantPages={cantPages}></Paginate>
      </div>
    )
  );
}
