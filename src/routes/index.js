import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home, Shop, SigninAndSignup } from "../views";

const Routes = () => (
  <Switch>
    <Route path="/shop" component={Shop} />
    <Route exact path="/signin" component={SigninAndSignup} />
    <Route exact path="/" component={Home} />
  </Switch>
);

export default Routes;
