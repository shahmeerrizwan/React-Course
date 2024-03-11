import { BrowserRouter } from 'react-router-dom';
import Router from './Config';


function App() {
  return (
    <div className="App">

      <div className='Dashboard'>

        <BrowserRouter>
          <Router />
        </BrowserRouter>

      </div>
    </div>
  );
}

export default App;