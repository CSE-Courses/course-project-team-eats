import React from 'react';
import {LandingPage} from './LandingPage/LandingPage';
import {Route, Switch} from 'react-router-dom';
import {Search} from './Search/Search';
import { People } from './People/People';
import { StarterPage } from './StarterPage/StarterPage';
import SignUp from "./components/signup.component";
import Login from "./components/login.component";
import TextUser from "./TextField/text_field";
import Home from "./components/Signup";
import Finale from "./FinalPage/FinalPage"

function App() {
  return (
    <Switch>
      <Route path='/search' component = {Search}/>
      <Route exact path='/' component = {StarterPage} />
      <Route path='/landing' component={LandingPage}/>
      <Route path='/people' component={People}/>
        <Route path='/text' component={TextUser}/>
        <Route path='/sign-up' component={SignUp}/>
        <Route path='/sign-in' component={Login}/>
        <Route path='/Home' component={Home}/>
        <Route path='/Finale' component={Finale}/>

    </Switch>

  );
}

export default App;
