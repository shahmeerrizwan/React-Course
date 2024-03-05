import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import News from '../src/Components/News/News';
import LoadingBar from 'react-top-loading-bar'
import React, { useState } from 'react'
import Footer from './Footer/Footer';



function App() {
  const pageSize = 15;
  const apiKey = "db82359fc09d47dda02078e9710f0167"
  const [progress, setProgress] = useState(0)

  return (
    <div >
      <Router>
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress} />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home setProgress={setProgress} />} />
          <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business" />} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" />} />
          <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" />} />
          <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health" />} />
          <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science" />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports" />} />
          <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology" />} />
        </Routes>
        <Footer />
      </Router>
    </div >
  );
}

export default App;
