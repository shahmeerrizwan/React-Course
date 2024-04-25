import React, { useState } from 'react'

function App() {

  const [input, setInput] = useState("")

  return (
    <>
      <input type='text' onChange={(e) => setInput(e.target.value)} />
      <p> The Text You Enter Is : {input}</p>
    </>
  );
}

export default App;
