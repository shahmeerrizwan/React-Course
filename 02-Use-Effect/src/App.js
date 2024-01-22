import './App.css';
import {useEffect, useState } from 'react';
import User from './User';

function App() {
  // const [data,setData] = useState(10);
  // const [count,setCount] = useState(100);
  
  const [count, setCounter] = useState(0)
  const [data, setData] = useState("shahmeer")
  
  // useEffect( ()=>{
  //   console.log("Hello World");
  // },[updateData])
  
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

