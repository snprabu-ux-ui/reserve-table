import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Heeader";
import Footer from "./components/Footer";
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Order from './pages/Order';
import Reservations from './pages/Reservations';
import Login from './pages/Login';

import "./App.css";

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/order" element={<Order />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
