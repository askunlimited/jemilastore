import React from "react";

import './authenticate.scss';

import SignIn from '../../components/signin/SignIn';
import Signup from "../../components/sign-up/SignUp";

const Authenticate = () => (
  <div className='authenticate'>

    <SignIn />
    <Signup />

  </div>
)

export default Authenticate