import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Home from './pages/home/Home';
import Shop from './pages/shop/Shop';
import Header from './components/header/Header';
import Authenticate from './pages/authenticate/Authenticate';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';



class App extends React.Component {
  constructor() {
    super()
  
    this.state = {
       currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      // // this.setState({ currentUser: user })
      // createUserProfileDocument(user);
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          // console.log(snapShot.data());
          this.setState(
            {
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            }
          })
          // console.log(this.state);
        })
      } else {
          this.setState({ currentUser: userAuth })
        }
      
      
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  render() {
    return (
      <div className='App'>
        <Header currentUser={this.state.currentUser} />
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
