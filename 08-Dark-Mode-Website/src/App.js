import './App.css';
import Navbar from './Components/Navbar';
import Card from './Components/Card';
import Accordion from './Components/Accordion';
import { createContext } from 'react';
import { useState } from 'react';



export const ThemeContext = createContext("null");

function App() {
 
  const [text, setText] = useState("Enable Dark Mode");

  function updateText(){
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
    <ThemeContext.Provider value={{ theme, setTheme}}>
    <div className='App' id={theme}  >
     <Navbar  />
     <br />
     <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={twoFunc}/>
<p className='white' onClick={updateText}>{text}</p>
 
</div>

     <br />
     <Card/>
     <br />
     <Accordion/>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
