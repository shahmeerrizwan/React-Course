import './App.css';
import { useState } from 'react';




function App() {
  const [text, setText] = useState("Enter Text Here")
  
const upClick = ()=>{
  // console.log("clicked");
  let newText = text.toUpperCase();
  setText(newText)
}
const lowerCase = ()=>{
  // console.log("clicked");
  let newText = text.toLowerCase();
  setText(newText)
}
const onClick = (event)=>{
  // console.log("clicked");
  setText(event.target.value)
}
  
  return (
 
     
<>
<div >
       <h1 className='text-center mt-5 mb-5'> Enter Any Text You Want To Uppercase Or Lowercase :</h1>

    
<div className="mb-3 container">
 
  <textarea className="form-control  " value={text} onChange={onClick} id="same" rows="6"></textarea>

<button type="button" className="btn btn-success m-2 mt-4 "  onClick={upClick}>Convert To Upercase</button>
     <button type="button" className="btn btn-success m-2 mt-4" onClick={lowerCase}> Convert To Lower Case</button>
     </div>
</div>
</>
     
  );
}

export default App;
