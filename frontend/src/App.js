import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Callback from './Callback';


class App extends Component {
  render() {

    return (
      <div>
      <NavBar/>
        <p>Work in progress.</p>
        <Route exact path='/callback' component={Callback}/>
      </div>
      );
  }
}

export default App;
