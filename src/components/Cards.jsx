import Card from "./Card";
import style from "../styles/Cards.module.css";
import { useSelector } from "react-redux";
import Paginate from "./Paginate";


export default function Cards({ onClose }) {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   console.log("in dispatch Cards Home")
  //   dispatch(resetCharacters());
  // }, []);

  const { characters } = useSelector((state) => state);
  const { numPage } = useSelector((state) => state);

  // 20
  //  2    3
  // 0 5  5 10
  let desde = (numPage - 1) * 4; // 5
  let hasta = numPage * 4; // 10

  // cant de numb de page si quiero 5 por page y tengo 20
  // 1   2   3   4
  let cantPages = Math.floor(characters.length / 4);

  let viewCharacters = characters?.slice(desde, hasta); // [{1}{2}{3}{4}][{5}{6}{7}{}]

  return (
    // console.log("--->", characters),
    (
      <div>
        <div className={style.cards_container}>
          {viewCharacters &&
            viewCharacters.map((element) => {
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
