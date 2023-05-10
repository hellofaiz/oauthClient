import RestorePhoto from './components/restorePhoto/RestorePhoto';
import LandingPage from "./components/landingPage/LandingPage";
import Navbar from "./components/navbar/Navbar";
import DiologueBox from "./components/diologueBox/DiologueBox.js";
import * as React from 'react';
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import LoginPage from './components/loginPage/LoginPage';
import MobileLandingPage from './components/mobileView/MobileLandingPage';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import CreditPlanCard from './components/creditPlanCard/CreditPlanCard';
import MotionBlur from './components/motionBlur/MotionBlur'
import Cookies from 'js-cookie';
import jwt_decode from "jwt-decode";
import axios from 'axios';


function App() {
  const [user, setUser] = useState(null);
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const [loginGoogle, setLogginGoogle] = useState()
  // const theme = useTheme();
  // const matches = useMediaQuery(theme.breakpoints.up('md'));
  // Cookies.get('x-auth-cookie');
  // console.log(Cookies.get('x-auth-cookie'));

  const getUser = async () => {
    try {
      const url = `${process.env.REACT_APP_API_URL}/auth/login/success`;

      const response = await axios(url, {
        headers: {'X-Requested-With': 'XMLHttpRequest'},
        withCredentials: true,
      });
      // console.log(response);
      // const data = await response.json();
      console.log(response);
      setUser(response.data.user);
      // const token = Cookies.get('x-auth-cookie');
      // console.log(token);
      // const decodedToken = jwt_decode(token);
      // console.log(decodedToken);
      // setUser(decodedToken);
      // setUser(data.user);
      // setIsAuthenticated(true);
    } catch (err) {
      // setIsAuthenticated(false);
      console.log(err);
    }
  };
  useEffect(() => { 
    getUser();
  }, []);
  // getUser();

  // useEffect(() => {
  //   if (!loginGoogle) getUser();
  // }, [loginGoogle]);



  const googleAuth = () => {
    window.open(`${process.env.REACT_APP_API_URL}/auth/google/callback`, '_self');
    // setLoginGoogle(true)
  }



  // const [open, setOpen] = React.useState(false);
  console.log(user);
  return (
    <>
      {/* <div className="App">
        <Navbar open={open} setOpen={setOpen} user={user} setUser={setUser} setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated} />
        <DiologueBox open={open} setOpen={setOpen} user={user} setUser={setUser} setIsAuthenticated={setIsAuthenticated} />
        <Routes>
          <Route
            exact
            path="/"
            element={matches ? <LandingPage open={open} setOpen={setOpen} /> : <MobileLandingPage user={user} />}
          />
          {
            isAuthenticated ? (<Route
              exact
              path="/restore"
              element={< RestorePhoto />}
            />) : (<Route
              exact
              path="/"
              element={matches ? <LandingPage open={open} setOpen={setOpen} /> : <MobileLandingPage user={user} />}
            />)
          }
          {
            isAuthenticated ? (<Route
              exact
              path="/motionblur"
              element={< MotionBlur />}
            />) : (<Route
              exact
              path="/"
              element={matches ? <LandingPage open={open} setOpen={setOpen} /> : <MobileLandingPage user={user} />}
            />)
          }
          {
            !user && <Route
              exact
              path="/login"
              element={<LoginPage loginGoogle={loginGoogle} setLogginGoogle={setLogginGoogle} />}
            />
          }
          {
            user && <Route
              exact
              path="/creditPlanCard"
              element={<CreditPlanCard />}
            />
          }
        </Routes>
      </div> */}
      <div className="demo">



        {
          user ? <h1>Welcome to the app</h1> :
            <button onClick={googleAuth}>
              {/* <img src={googleLogo} style={{ marginLeft: '-40px', width: '5rem', height: '4rem' }} alt="Google Logo" /> */}
              <span><p> Sign in With Google</p></span>
            </button>

        }

      </div>
    </>
  );
}
export default App;