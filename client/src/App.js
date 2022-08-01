import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Verify from './pages/Verify';
import Paymenet from './pages/Paymenet';
import Transfer from './pages/Transfer';
import Claim from './pages/Claim';
import Payment from './pages/Payment';
import Success from './pages/Success';
import React, { useEffect } from 'react';
import { useMoralis } from "react-moralis";

export function App() {
  const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();

    useEffect(() => {
    if (isAuthenticated) {
      console.log("Logged in");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

    const login = async () => {
      if (!isAuthenticated) {

        await authenticate({signingMessage: "Log in using Moralis" })
          .then(function (user) {
            console.log("logged in user:", user);
            localStorage.setItem("walletID",user.get("ethAddress"));
            console.log(user.get("ethAddress"));
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }

    const logOut = async () => {
      await logout();
      alert("You have been logged out");
    }
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar login={login} logOut={logOut} isAuthenticated={isAuthenticated}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/transfer" element={<Transfer/>} />
          <Route path="/claim" element={<Claim/>} />
          <Route path="/payment/:paymentid" element={<Paymenet/>} />
          <Route path="/product/:id" element={<Payment isAuthenticated={isAuthenticated}/>} />
          <Route path="/success/:id" element={<Success/>} />
          <Route path="/verify" element = {<Verify/>}/>
        </Routes>
      </div >
    </BrowserRouter >
  );
}
