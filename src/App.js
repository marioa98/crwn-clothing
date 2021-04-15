import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Routes from "./routes";

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes />
  </BrowserRouter>
);

export default App;
