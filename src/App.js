import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Home from './pages/home/Home';
import Shop from './pages/shop/Shop';



class App extends React.Component {
  render() {
    return (
      <div className='App'>

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/shop' component={Shop} />
        </Switch>
      </div>
    );
  }
}

export default App;
