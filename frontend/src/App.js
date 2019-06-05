import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import NavBar from './components/NavBar';
import Callback from './Callback';
import FindLeague from './components/FindLeague';
import CreateLeague from './components/CreateLeague';


class App extends Component {
  render() {

    return (
      <div>
      <NavBar/>
        <Link to={'/FindLeague'}>FIND LEAGUE</Link>
        <Link to={'/CreateLeague'}>CREATE LEAGUE</Link>
        <Route exact path='/callback' component={Callback}/>
        <Route path= '/findLeague' component={FindLeague}/>
        <Route path= '/createLeague' component={CreateLeague}/>
      </div>
      );
  }
}

export default App;
