import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Home from './pages/home/Home';
import Shop from './pages/shop/Shop';
import Header from './components/header/Header';
import Authenticate from './pages/authenticate/Authenticate';



class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/shop' component={Shop} />
          <Route exact path='/auth' component={Authenticate} />
        </Switch>
      </div>
    );
  }
}

export default App;
