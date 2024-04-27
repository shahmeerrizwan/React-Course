import React from 'react'
import Home from './Components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Section2 from './Components/Sections/Section2';
import Navbar from './Components/Navbar/Navbar';
import Section9 from './Components/Sections/Section9';
import Section4 from './Components/Sections/Section4';
import Section6 from './Components/Sections/Section6';
import Section5 from './Components/Sections/Section5';
import Section7 from './Components/Sections/Section7';
import Section8 from './Components/Sections/Section8';



function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/uberuns' element={<Section2 />} />
          <Route path='/Captial' element={<Section4 />} />
          <Route path='/consulting' element={<Section6 />} />
          <Route path='/studios' element={<Section5 />} />
          <Route path='/network' element={<Section7 />} />
          <Route path='/sports' element={<Section8 />} />
          <Route path='/contact' element={<Section9 />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
