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
      <Route path="/landing" component={LandingPage} />
      <Route path="/people" component={People} />
      <Route path="/result" component={FinalResult} />
    </Switch>
  );
}

export default App;
