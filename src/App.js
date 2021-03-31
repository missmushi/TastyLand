import React, { Fragment, useEffect, useRef, useState } from 'react';  
import './App.css';
import TopBar from './layout/top-bar';
import Header from './layout/header';
import Hero from './layout/hero';
import About from './layout/about';
import WhyUs from './layout/whyUs';
import Menu from './layout/menu';
import Specials from './layout/specials';
import Events from './layout/events';
import Book from './layout/book';

import Testimonials from './layout/testimonials';
import Gallery from './layout/gallery';
import Chefs from './layout/chefs';
import Footer from './layout/footer';
import LoginForm from './layout/loginForm'; 
import Admin from './layout/admin';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import fire from "./fire" ;
import Staff from './layout/staff';
import Member from './layout/member';


function App() {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  };

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  };


  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email,password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-emall":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password" :
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleSignup = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email,password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-emall":
            setEmailError(err.message);
            break;
          case "auth/weak-password" :
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    })
  };

  useEffect(() => {
    authListener();
  },[])

  return (
    
    <Router>
      <Switch>
        <Route path="/LoginForm">
        {user ? (
          <Fragment>
          <Admin/>  
          <Staff />
          <Member handleLogout={handleLogout} />
          </Fragment>
        ) : (
          <LoginForm 
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
          handleSignup={handleSignup}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          emailError={emailError}
          passwordError={passwordError}
          />
      

        )} 
        </Route>
        <Route path="/">
          <Fragment>
            <TopBar />
            <Header />
            <Hero />
            <About />
            <WhyUs />
            <Menu />
            <Specials />
            <Events />
            <Book />
        
            <Testimonials />
            <Gallery />
            <Chefs />
            <Footer />
          </Fragment>
        </Route>
    </Switch>
    </Router>
    
  );
}


export default App;
