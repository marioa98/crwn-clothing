import React from "react";

import Input from "../shared/Input/Input";
import Button from "../shared/Button/Button";
import theme from "./Signin.module.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({[name]: value});
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className={theme.signInForm}>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <Input
            id="email"
            type="email"
            name="email"
            onChange={this.handleChange}
            value={email}
            required
            label="Email"
          />

          <Input
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange }
            required
            label="Password"
          />

          <Button type="submit">
            Sign in
          </Button>
        </form>
      </div>
    );
  }
}

export default SignIn;
