import './App.css';
import { useState } from 'react';




function App() {
  const [text, setText] = useState("")
  
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
 
  <textarea className="form-control " name="comment" form="usrform" placeholder='Enter Any Text You Want To Uppercase Or Lowercase' value={text} onChange={onClick} id="same" rows="2" cols="50"></textarea>

<button type="button" className="btn btn-success m-2 mt-4 "  onClick={upClick}>Convert To Upercase</button>
     <button type="button" className="btn btn-success m-2 mt-4" onClick={lowerCase}> Convert To Lower Case</button>
     </div>
</div>

<div className="container my-3">
  <h1>Your Text Summary :</h1>
  <p className='bold'> {text.split(" ").length} Words And {text.length} Character</p>
  <p className='bold'>{0.008 * text.split(" ").length} Minutes Read</p>
  <h1>Preview :</h1>
  <textarea className="form-control " name="comment" form="usrform" placeholder='Preview' value={text} onChange={onClick} id="same" rows="12" cols="50"> {text} </textarea>

</div>


</>
     
  );
}

export default App;
