import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
  } from "react-router-dom";
import Home from "Routes/Home/HomeContainer";
import TV from "Routes/TV/TVContainer";
import Search from "Routes/Search/SearchContainer";
import Header from 'Components/Header';

export default () => (
  <Router>
    <>
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/tv" exact component={TV} />
      <Route path="/search" exact component={Search} />
      <Redirect from="*" to="/" />
    </Switch>
    </>
  </Router>
);