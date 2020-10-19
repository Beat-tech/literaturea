import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Inicio from "./components/Inicio/Inicio";
import Autoresgeneracion from "./components/Autoresgeneracion/Autoresgeneracion";
import Lorcainicio from "./components/Lorcainicio/Lorcainicio";
import Lorcabio from "./components/Lorcabio/Lorcabio";
import Lorcadrama from "./components/Lorcapoet/Lorcapoet";
import Lorcatest from "./components/Lorcatest/Lorcatest";
import Lorcapoet from "./components/Lorcapoet/Lorcapoet";
import Presentacion from "./components/Presentacion/Presentacion";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Presentacion}></Route>
          <Route path="/home" component={Inicio}></Route>
          <Route path="/generacion" component={Autoresgeneracion}></Route>
          <Route path="/lorca" component={Lorcainicio}></Route>
          <Route path="/lorcabio" component={Lorcabio}></Route>
          <Route path="/lorcapoet" component={Lorcapoet}></Route>
          <Route path="/lorcadrama" component={Lorcadrama}></Route>
          <Route path="/lorcatest" component={Lorcatest}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
