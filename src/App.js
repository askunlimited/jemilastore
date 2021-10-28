import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Home from './pages/home/Home';



function HatsPage() {
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  )
}


class App extends React.Component {
  render() {
    return (
      <div className='App'>

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/hats' component={HatsPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
