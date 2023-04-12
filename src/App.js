import React, { useState, useEffect } from "react";
import style from "./App.module.css";
import axios from "axios";

import { useLocation, useNavigate } from "react-router-dom";

import Cards from "./components/Cards.jsx";
import NavBar from "./components/NavBar";

import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import About from "./components/About";
import Detail from "./components/Detail";
import Favorites from "./components/Favorites";
import { useDispatch, useSelector } from "react-redux";
import {
  addCharacters,
  addLocation,
  searchCharacter,
} from "./redux/actions/actions";

function App() {
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  // const EMAIL = "eje@gmail.com";
  // const PASSWORD = "@Model101";

  // const [characters, setCharacters] = useState([]);
  const { characters } = useSelector((state) => state); // |*|*|*| AAA |*|*|*|
  const location = useLocation();
  //console.log("location", location);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addLocation(location.pathname));
  }, [dispatch, location]);

  function login(inputs) {
    axios
      .get(
        `http://localhost:3001/rickandmorty/login?password=${inputs.password}&email=${inputs.email}`
      )
      .then(({ data }) => {
        // console.log(":::::::::", data.access);
        if (data.access) {
          setAccess(data.access);
          navigate("/home");
          return alert("Welcome to our App");
        } else {
          return alert("invalid user");
        }
      });
  }
  function logout() {
    axios
      .get(`http://localhost:3001/rickandmorty/login?password=1234&email=1234`)
      .then(({ data }) => {
        // console.log(":::::::::", data.access);
        if (!data.access) {
          setAccess(data.access);
          navigate("/");
        }
      });
  }

  useEffect(() => {
    !access && navigate("/");
  }, [navigate, access]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/rickandmorty/character/all`)
      .then((results) => {
        // console.log(":::", results.data);
        // setCharacters([...results.data]);
        dispatch(addCharacters(results.data));
      });
    /* eslint-disable react-hooks/exhaustive-deps */
  }, []);

  function onSearch(id) {
    axios
      .get(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
        // console.log("01:::::", data);

        dispatch(searchCharacter(data));
      });
  }

  function onClose(id) {
    // setCharacters((oldChars) => {
    //   return oldChars.filter((ch) => ch.id !== id);
    // });
    // |*|*|*| BBB |*|*|*|
    const filterCharacters = characters.filter((ch) => ch.id !== id);
    dispatch(addCharacters(filterCharacters));
  }
  return (
    <div className={style.app}>
      {location.pathname === "/" ? null : (
        <NavBar logout={logout} onSearch={onSearch} />
      )}

      <Routes>
        <Route path="/" element={<Login login={login} />}></Route>
        <Route path="/home" element={<Cards onClose={onClose} />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route
          path="/favorites"
          element={<Favorites onClose={onClose} />}
        ></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
      </Routes>
    </div>
  );
}

export default App;

/*
Nav debe que aparecer en todas las rutas.
Cards debe aparecer solo en la ruta /home.
About debe aparecer solo en la ruta /about.
Detail debe aparecer solo en la ruta /detail/:id.
*/

/*
en el class component, como hago para dispachear al redux un state local


import React, { Component } from 'react'
import {connect}
import {addForm}

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      form:{}
    }
  }
  add = ()=>{
    this.props.addForm(this.state.form)
  }
  componentDidMount
  render() {
    return (
      <div>
        <button onClick={this.add}> 
      </div>
    )
  }
}
function mapDispatch(dis){
  return {
    addForm: (form)=> dis(addForm(form))
  }
}

export default connect(mapState, mapDispatch)(App)
*/
