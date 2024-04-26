import { useState } from 'react';
import './App.css';

function App() {

  const [toggle, setToggle] = useState(false);


  const handleToggle = () => {
    setToggle(!toggle);
  }

  return (
    <>
      <label>
        <input type='checkbox' onChange={handleToggle} />
      </label>
      <p>{toggle ? "On" : "Off"}</p>
    </>
  );
}

export default App;
