import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { connect } from 'react-redux';

import './App.css';
import Home from './pages/home/Home';
import Shop from './pages/shop/Shop';
import Header from './components/header/Header';
import Authenticate from './pages/authenticate/Authenticate';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { setCurrentUser } from './redux/user/user.actions';



class App extends React.Component {
  
  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      // // this.setState({ currentUser: user })
      // createUserProfileDocument(user);
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          // console.log(snapShot.data());
          setCurrentUser(
            {
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            }
          })
          // console.log(this.state);
        })
      } else {
          setCurrentUser(userAuth)
        }
      
      
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  render() {
    return (
      <div className='App'>
        <Header/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/shop' component={Shop} />
          <Route exact path='/auth' component={Authenticate} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps )(App);
