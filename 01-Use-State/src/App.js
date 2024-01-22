import './App.css';
import {useState } from 'react';



//Problem: Jab hum click per variable update karrahe hain, to UI per wo variable
//updated nahi araha.

//Solution: State
//Kaam: Jab update hoti to UI per update value ajati hai
//1. Jab state update hoti hai to component rerender hota hai.
//2. States are directly immutable (direct change nahi hosakti)


function App() {
// const [data,setData] = useState(10);
// const [count,setCount] = useState(100);

const [count, setCounter] = useState(0)
const [data, setData] = useState ("shahmeer")


function updateCount(){
  setCounter(count + 1)
}

function updateData(){
  setData("Rizwan")
}

  return (
    <div className="App">
      <h1>Button Clicked {count} times</h1>
      <h1>{data}</h1>
<button onClick={updateCount}>Click</button>
<button onClick={updateData}>Update Data</button>










      {/* <User count={count} data={data}/>

      <button onClick={()=>setCount(count+1)}>Update Count</button>
      <button onClick={()=>setData(data+1)}>Update Data</button> */}

    </div>
  );
}


export default App;
