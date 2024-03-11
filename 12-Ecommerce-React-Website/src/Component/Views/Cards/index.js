


import React from 'react'

export default function index({ images, title, description, price, brand }) {
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-3 g-4 container-fluid">
        <div className="col">
          <div className="card h-100">
            <img src={images[0]} className="card-img-top" alt="..." />
            <div className="card-body">
              <h2 className="card-title">{title}</h2>
              <p className="card-text">{description}</p>
              <h5 className='card-text brand'> Brand : {brand} </h5> <br />
              <button className='btn btn-primary '> Price : {price} pkr </button>  <button className='btn m-4 btn-primary '> Add to Cart </button>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100">
            <img src={images[2]} className="card-img-top" alt="..." />
            <div className="card-body">
              <h2 className="card-title">{title}</h2>
              <p className="card-text">{description}</p>
              <h5 className='card-text brand'> Brand : {brand} </h5> <br />
              <button className='btn btn-primary '> Price : {price} pkr </button> <button className='btn m-4 btn-primary '> Add to Cart </button>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100">
            <img src={images[3]} className="card-img-top" alt="..." />
            <div className="card-body">
              <h2 className="card-title">{title}</h2>
              <p className="card-text">{description}</p>
              <h5 className='card-text brand'> Brand : {brand} </h5> <br />
              <div className='shahmeer'><button className='btn btn-primary btn1 '> Price : {price} pkr </button> <button className='btn m-4 btn-primary '> Add to Cart </button></div>


            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
