import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles.css";

//pages
import HomePage from "./Pages/HompePage";
import AboutPage from "./Pages/AboutPage";
import FavoritesPage from "./Pages/FavoritesPage";
import ErrorPage from "./Pages/ErrorPage";
// components
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        {/*  <Route exact path="/rick-and-morty-api">  <HomePage /> </Route>    for Github Pages*/}
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/favorites">
          <FavoritesPage />
        </Route>
        {/* <Route exact path="/episodes/:id" children={<SingleEpisodePage />} /> */}
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
