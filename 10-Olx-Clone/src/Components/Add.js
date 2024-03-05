import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";


export default function Add() {
    return (
        <div className='add'>
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="2000">
                        <img src="https://images.olx.com.pk/thumbnails/434332564-800x600.webp" className="d-block w-sm" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="https://images.olx.com.pk/thumbnails/434332564-800x600.webp" className="d-block w-sm" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.olx.com.pk/thumbnails/434332564-800x600.webp" className="d-block w-sm" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <br />
            <div>
                <img src="https://images.olx.com.pk/thumbnails/434332564-800x600.webp" className="smimg" alt="..." />
            </div>
        </div >
    )
}
