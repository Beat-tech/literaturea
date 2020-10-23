import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Inicio from "./components/Inicio/Inicio";
import Autoresgeneracion from "./components/Autoresgeneracion/Autoresgeneracion";
import Lorcainicio from "./components/Lorcainicio/Lorcainicio";
import Lorcabio from "./components/Lorcabio/Lorcabio";
import Lorcadrama from "./components/Lorcadrama/Lorcadrama";
import Lorcatest from "./components/Lorcatest/Lorcatest";
import Lorcapoet from "./components/Lorcapoet/Lorcapoet";
import Presentacion from "./components/Presentacion/Presentacion";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Presentacion}></Route>
          <Route exact path="/home">
            <Inicio />
            <Nav />
          </Route>
          <Route path="/generacion">
            <Autoresgeneracion />
            <Nav />
          </Route>
          <Route path="/lorcadrama">
            <Lorcadrama />
            <Nav />
          </Route>
          <Route path="/lorca">
            <Lorcainicio />
            <Nav />
          </Route>
          <Route path="/lorcabio">
            <Lorcabio />
            <Nav />
          </Route>
          <Route path="/lorcapoet">
            <Lorcapoet />
            <Nav />
          </Route>
          <Route path="/lorcatest">
            <Lorcatest />
            <Nav />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
