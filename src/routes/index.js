import React from "react";
import { Route, Switch } from "react-router-dom";
import { Hats, Home } from "../views";

const Routes = () => (
  <Switch>
    <Route path="/hats" component={Hats} />
    <Route exact path="/" component={Home} />
  </Switch>
);

export default Routes;
