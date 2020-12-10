import React from "react";
import { LandingPage } from "./LandingPage/LandingPage";
import { Route, Switch } from "react-router-dom";
import { Search } from "./Search/Search";
import { People } from "./People/People";
import { StarterPage } from "./StarterPage/StarterPage";
import { FinalResult } from "./FinalResult/FinalResult";

function App() {
  return (
    <Switch>
      <Route path="/search" component={Search} />
      <Route exact path="/" component={StarterPage} />
      <Route
        path="/welcome"
        component={() => {
          window.location.href =
            "https://sleepy-scrubland-97776.herokuapp.com/welcome";
          return null;
        }}
      />
      <Route
        path="/dashboard"
        component={() => {
          window.location.href =
            "https://sleepy-scrubland-97776.herokuapp.com/dashboard";
          return null;
        }}
      />
      <Route
        path="/register"
        component={() => {
          window.location.href =
            "https://sleepy-scrubland-97776.herokuapp.com/users/register";
          return null;
        }}
      />
      <Route
        path="/login"
        component={() => {
          window.location.href =
            "https://sleepy-scrubland-97776.herokuapp.com/users/login";
          return null;
        }}
      />
      <Route path="/landing" component={LandingPage} />
      <Route path="/people" component={People} />
      <Route path="/result" component={FinalResult} />
    </Switch>
  );
}

export default App;
