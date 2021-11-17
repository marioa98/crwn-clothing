import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import { Home, Shop, SigninAndSignup } from "../views";
import { selectCurrentUser } from "../redux/user/selectors";

const Routes = ({ currentUser }) => (
  <Switch>
    <Route path="/shop" component={Shop} />
    <Route
      exact
      path="/signin"
      render={() => {
        if (currentUser) return <Redirect to="/" />;

        return <SigninAndSignup />;
      }}
    />
    <Route exact path="/" component={Home} />
  </Switch>
);

Routes.propTypes = {
  currentUser: PropTypes.object
};

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state)
});

export default connect(mapStateToProps)(Routes);
