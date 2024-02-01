import React from 'react'
import { useState } from 'react'

export default function Navbar() {

const [myStyle, setMyStyle] = useState({
    color:'black',
    backgrounColor:'white'
})

const [btntext, setBtnText] = useState("Enable Dark Mode")

let toggleStyle = ()=> {
    if (myStyle.color === 'white'){
        setMyStyle({
            color:'black',
            backgroundColor:'white'
        })
        setBtnText("Enable Dark Mode")
    }else{
        setMyStyle({
            color:'white',
            backgroundColor:'black'
        })
        setBtnText("Enable Light Mode");
    }
}



  return (
    <div style={myStyle} >
      <nav className="navbar navbar-expand-lg bg-body-tertiary" style={myStyle}>
  <div className="container-fluid">
    <a className="navbar-brand" style={myStyle} href="/"><img width={100} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh4knHyhkYLl9BCzYlrT0PDzZ0JAtpup2e5g&usqp=CAU" alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" style={myStyle} aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" style={myStyle}></span>
    </button>
    <div className="collapse navbar-collapse" style={myStyle} id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={myStyle}>
        <li className="nav-item ">
          <a className="nav-link active mx-5" aria-current="page" style={myStyle} href="/">Home</a>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link" style={myStyle} href="/">About</a>
        </li>
        <li className="nav-item mx-4">
          <a className="nav-link" style={myStyle} href="/">Service</a>
        </li>
        <li className="nav-item mx-4">
          <a className="nav-link" style={myStyle} href="/"> Contact</a>
        </li>
        <li className="nav-item mx-4">
          <a className="nav-link" style={myStyle} href="/"> Info </a>
        </li>
       
       
      </ul>
      <button type='button' className='btn btn-success mx-4' onClick={toggleStyle} >{btntext}</button>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-success"  type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>



    </div>
  )
}
