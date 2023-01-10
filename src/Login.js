import { Button } from '@mui/material';
import React from 'react';
import "./Login.css";


function Login() {
  const signIn = () => {
    // sign in ...
  };

  return (
    <div className='login'>
      <div className="login__logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg" alt="" />
        <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt="" />
      </div>
      <Button type="submit" onClick={signIn}>Sign In</Button>
    </div>
  )
}

export default Login