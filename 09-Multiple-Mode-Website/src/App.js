import './App.css';
import Card from './Components/Card';
import Navbar from './Components/Navbar';
import { createContext } from 'react';
import { useState } from 'react';




export const ThemeContext = createContext("null");


function App() {

// Dark Blue Theme :

  const [text, setText] = useState("Enable Dark Blue Mode");
  

  function updateText(){
      setText((curr) => (curr === "Enable Light Mode" ? "Enable Dark Blue Mode" : "Enable Light Mode"));
  }
  
  const [theme, setTheme] = useState("light");
  
  const toggleTheme = () => {
      setTheme((curr) => (curr === "light" ? "dark" : "light"));
  }
  
  const twoFunc = () => {
      toggleTheme()
      updateText()
      
  }



// Yellow Theme :

const [yellow, setYellow] = useState("Enable Yellow Mode");


function updateYellow(){
  setYellow((curr) => (curr === "Enable Light Mode" ? "Enable Yellow Mode" : "Enable Light Mode"));
}

const [yellowTheme, setYellowTheme] = useState("light");


const toggleYellowTheme = () => {
  setYellowTheme((curr) => (curr === "light" ? "yellow" : "light"));
}

const yellowFunc = () => {
  toggleYellowTheme()
  updateYellow()
  
}


// Enable Red Mode

const [red, setRed] = useState("Enable Red Mode");


function updateRed(){
  setRed((curr) => (curr === "Enable Light Mode" ? "Enable Red Mode" : "Enable Light Mode"));
}

const [redTheme, setRedTheme] = useState("light");

const toggleRedTheme = () => {
  setRedTheme((curr) => (curr === "light" ? "red" : "light"));
}

const redFunc = () => {
updateRed()
  
  toggleRedTheme()
}

// Enable Black Mode :


const [black, setBlack] = useState("Enable Black Mode");

function updateBlack (){
  setBlack((curr) => (curr === "Enable Light Mode" ? "Enable Black Mode" : "Enable Light Mode"));
}

const [blackTheme, setBlackTheme] = useState("light");


const toggleBlackTheme = () => {
  setBlackTheme((curr) => (curr === "light" ? "black" : "light"));
}

const blackFunc = () => {
  toggleBlackTheme()
  updateBlack()
}








  return (
    <ThemeContext.Provider value={{ theme, setTheme}}>

    <div className={`${theme} ${yellowTheme} ${redTheme} ${blackTheme}`}   >
     
<Navbar/>
<br />
<Card/>
<div className='top'>
  <button className="btn down btn-outline-light" onClick={yellowFunc}>{yellow}</button>
<br />
<br />
<button className="btn down btn-outline-light" onClick={blackFunc}>{black}</button>
<br />
<br />


<button className="btn upp btn-outline-light" onClick={twoFunc}>{text}</button>
<br />
<br />
<button className="btn upp btn-outline-light" onClick={redFunc}>{red}</button>
    </div> 
    </div>
  </ThemeContext.Provider>

  );
}

export default App;