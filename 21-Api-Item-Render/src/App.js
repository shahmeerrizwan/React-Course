import { useState } from 'react';
import Data from "./Data"

function App() {
  const [data, setData] = useState(Data)
  return (
    <div className="App">
      <table>
        <tr>
          <th>ID.</th>
          <th>TITLE</th>
          <th>BODY</th>
        </tr>
        {data.map(d => {
          return <tr key={data.id}>
            <td>{d.id}</td>
            <td>{d.title}</td>
            <td>{d.body}</td>
          </tr>
        })}
      </table>
    </div>
  );
}

export default App;
