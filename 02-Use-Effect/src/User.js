import { useEffect} from 'react'


function App(props) {
    useEffect(() => {
        alert("count . is " +props.count)
    },[props.count])
  return (
    <div className="App">
      <h1>Count Props : {props.count}</h1>
      <h1>Data Props : {props.data}</h1>
    </div>
  );
}


export default App;





