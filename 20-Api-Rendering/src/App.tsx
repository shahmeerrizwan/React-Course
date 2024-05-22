import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

const [dataList, setDataList]=useState<any>([])

const callApi = ()=>{
  axios.get("https://jsonplaceholder.typicode.com/users")
  .then((res)=>{
    console.log(res.data);
    setDataList([...res.data])
   }) 
   .catch((err)=>{
      console.log(err);
  })
}

const postData = () => {
  axios.post('https://jsonplaceholder.typicode.com/posts', {
      userId: 1,
      title: "Something Important",
      body: "ajsdk jas lkdjak la la lkdalk dlsa lkdsaj"
  }).then(res => {
      console.log(res)
  }).catch((err) => {
      console.log(err)
  })
}


const editDat=()=>{
  axios.put("https://jsonplaceholder.typicode.com/posts/3",{
    userId:1,
    tittle:"shahmeer",
    body:"something"
  }).then(res=>{
console.log(res);
}).catch((err)=>{
  console.log(err);
})
}



  return (
    <>
      <button onClick={callApi}>Get Api Call</button>
      <button onClick={postData}>Post Api Call</button>
      <button onClick={editDat}>Edit Api Call</button>


<table>
<tbody>
  <tr>
    <th>ID </th>
    <th>NAME </th>
    <th>USERNAME </th>
    <th>WEBSITE</th>
  </tr>
{
dataList.map((x:any,i:number)=><tr  key={i}>
  <td>{x.id}</td>
  <td>{x.name}</td>
  <td>{x.username}</td>
  <td>{x.website}</td>
</tr>
)}
</tbody>
</table>
</>
  );
}

export default App;