import React from 'react'
import Product from './Pages/Product';
import Delivery from './Pages/Delivery';
import Reviews from './Pages/Reviews';
import Contact from './Pages/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { createContext } from 'react';
import { useState } from 'react';



export const ThemeContext = createContext("null");

function App() {


  const [text, setText] = useState("Enable Dark Mode");

  function updateText() {
    setText((curr) => (curr === "Enable Light Mode" ? "Enable Dark Mode" : "Enable Light Mode"));
  }

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));

  }



  const twoFunc = () => {
    toggleTheme()
    updateText()
  }


  return (
    <div id={theme}  >
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <BrowserRouter>
          <Navbar />
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault " onClick={twoFunc} />
            <p className='white' onClick={updateText}>{text}</p>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Product />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <br />
          <Footer />
        </BrowserRouter>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
