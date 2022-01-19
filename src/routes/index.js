import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect, Route, Router } from "react-router-dom";
import { Checkout, Home, Shop, SigninAndSignup } from "../views";
import { selectCurrentUser } from "../redux/user/selectors";

const Routes = ({ currentUser }) => (
  <Router>
    <Route path="/shop" component={Shop} />
    <Route
      exact
      path="/signin"
      render={() => {
        if (currentUser) return <Redirect to="/" />;

        return <SigninAndSignup />;
      }}
    />
    <Route exact path="/checkout" component={Checkout} />
    <Route exact path="/" component={Home} />
  </Router>
);

Routes.propTypes = {
  currentUser: PropTypes.object
};

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state)
});

export default connect(mapStateToProps)(Routes);
