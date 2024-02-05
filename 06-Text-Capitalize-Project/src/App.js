import './App.css';
import { useState } from 'react';




function App() {
  const [text, setText] = useState("")
  
  // FOR UPPERCASE 
const upClick = ()=>{
  let newText = text.toUpperCase();
  setText(newText)
}

 // FOR LOWERCASE 
const lowerCase = ()=>{
  let newText = text.toLowerCase();
  setText(newText)
}

 // FOR CLEARTEXT 
const clearText = ()=>{
  let newText = (" ");
  setText(newText)
}
 // FOR REVERSE TEXT
const reverseText = ()=>{
  let newText = text.split('').reverse().join('');
  setText(newText)
}
 // FOR WHITE TEXT
const whiteSpace = ()=>{
  let newText = text.replace(/\s+/g, ' ');
  newText = newText.trim();
  setText(newText)
}
 // FOR FIRST LETTER CAPITAL
 const firstletter = ()=>{
  let newText = text.toLowerCase()
  .split(' ')
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(' ');;

  setText(newText)
}

 // FOR TEXTAREA
const onClick = (event)=>{
  setText(event.target.value)
}
  
const wordCount = (text)=>{
  let regex = /\s+\S+/;
  let numOfWords = text.split(regex);
  return numOfWords.length;
}



  return (
 

<>
<div >
       <h1 className='text-center mt-5 mb-5'> Enter Any Text You Want To Uppercase Or Lowercase :</h1>

    
<div className="mb-3 container">
 
  <textarea className="form-control " name="comment" form="usrform" placeholder='Enter Any Text You Want To Uppercase Or Lowercase' value={text} onChange={onClick} id="same" rows="2" cols="50"></textarea>

<button type="button" className="btn btn-success m-2 mt-4 "  onClick={upClick}>Convert To Upercase</button>
     <button type="button" className="btn btn-success m-2 mt-4" onClick={lowerCase}> Convert To Lower Case</button>
     <button type="button" className="btn btn-success m-2 mt-4" onClick={clearText}> Clear All</button>
     <button type="button" className="btn btn-success m-2 mt-4" onClick={reverseText}> Reverse Text</button>
     <button type="button" className="btn btn-success m-2 mt-4" onClick={whiteSpace}> Remove White Space</button>
     <button type="button" className="btn btn-success m-2 mt-4" onClick={firstletter}> First Letter Capital For All Words</button>
     </div>
</div>

<div className="container my-3">
  <h1>Your Text Summary :</h1>
  <p className='bold'> {text===""? 0 : wordCount(text)} Words And {text.length} Character </p>
  <p className='bold'>{ text===""? 0 * 0.008 : wordCount(text) * 0.008} Minutes Read </p>
  <h1>Preview :</h1>
  <textarea className="form-control " name="comment" form="usrform" placeholder='Preview' value={text} onChange={onClick} id="same" rows="12" cols="50"> {text} </textarea>

</div>


</>
     
  );
}

export default App;
