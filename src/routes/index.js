import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home, Shop } from "../views";

const Routes = () => (
  <Switch>
    <Route path="/shop" component={Shop} />
    <Route exact path="/" component={Home} />
  </Switch>
);

export default Routes;
