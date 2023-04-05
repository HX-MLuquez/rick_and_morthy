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
import { useDispatch } from "react-redux";
import {
  addCharacter,
  addLocation,
  searchCharacter,
} from "./redux/actions/actions";

function App() {
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const EMAIL = "eje@gmail.com";
  const PASSWORD = "@Model101";

  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  //console.log("location", location);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addLocation(location.pathname));
  }, [location]);

  function login(inputs) {
    if (inputs.password === PASSWORD && inputs.email === EMAIL) {
      setAccess(true);
      navigate("/home");
      return alert("OK");
    }
  }
  function logout() {
    setAccess(false);
    navigate("/");
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  useEffect(() => {
    console.log("wwwwwwwwwwwwww")
    axios
      .get(`http://localhost:3001/rickandmorty/characters`)
      .then((results) => {
        console.log(":::", results.data);

        setCharacters([...results.data]);
        dispatch(addCharacter(results.data));
      });
  }, []);

  function onSearch(id) {
    axios
      .get(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
        console.log(":::::", data);

        dispatch(searchCharacter(data));
      });
  }

  function onClose(id) {
    setCharacters((oldChars) => {
      return oldChars.filter((ch) => ch.id !== id);
    });
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
