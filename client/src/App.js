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
import Register from './pages/Register';
import Login from './pages/Login';
import Paymenet from './pages/Paymenet';
import Transfer from './pages/Transfer';
import Claim from './pages/Claim';
import Payment from './pages/Payment';
import Success from './pages/Success';

export function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/signup" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/transfer" element={<Transfer/>} />
          <Route path="/claim" element={<Claim/>} />
          <Route path="/payment/:paymentid" element={<Paymenet/>} />
          <Route path="/product/:id" element={<Payment/>} />
          <Route path="/success/:id" element={<Success/>} />
          <Route path="/verify" element = {<Verify/>}/>
        </Routes>
      </div >
    </BrowserRouter >
  );
}
