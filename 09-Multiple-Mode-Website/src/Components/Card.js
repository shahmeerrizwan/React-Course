import React from 'react'

export default function Card() {
  return (
    <div className='container'>
      <div className="card ">
  <div className="card-header">
    Featured
  </div>
  <div className="card-body">
    <h5 className="card-title">Special title treatment</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="/" className="btn btn-primary">Go somewhere</a>
  </div>
</div>






<br />
<br />
<div className="card">
  <div className="card-header">
    Quote
  </div>
  <div className="card-body">
    <blockquote className="blockquote mb-0">
      <p>A well-known quote, contained in a blockquote element.</p>
      <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
    </blockquote>
  </div>
</div>
<br />
<br />




<div className="row row-cols-1 row-cols-md-2 g-4">
  <div className="col">
    <div className="card">
      <img src="https://cdn.shopify.com/s/files/1/0035/9877/8435/files/Giallo_Libano_Ferrari_458_Speciale_Aperta_2048x2048.jpg?v=1610898022" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://i.pinimg.com/originals/1e/1b/c0/1e1bc05fa293c7a4140baa8182b7bf16.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://static.autox.com/uploads/cars/2018/01/lamborghini-urus-11-Jan-2018.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://c4.wallpaperflare.com/wallpaper/946/114/356/lamborghini-lamborghini-huracan-evo-car-lamborghini-huracan-sport-car-hd-wallpaper-preview.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
