import React from "react";
import { connect } from "react-redux";
import { Route, Routes as Router } from "react-router-dom";
import { Checkout, Home, Shop, SigninAndSignup } from "../views";
import { selectCurrentUser } from "../redux/user/selectors";

const Routes = () => (
  <Router>
    <Route path="/">
      <Route index element={<Home/>} />
      <Route path="shop" element={<Shop />} />
      <Route
        exact
        path="signin"
        element={<SigninAndSignup />}
      />
      <Route exact path="checkout" element={<Checkout />} />
    </Route>
  </Router>
);

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state)
});

export default connect(mapStateToProps)(Routes);
