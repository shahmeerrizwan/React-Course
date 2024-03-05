import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Slider.css';


export default function Add() {
    return (
        <div>
            <div id="carouselExampleSlidesOnly autoplay" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://tpc.googlesyndication.com/daca_images/simgad/10940989095589854667" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://tpc.googlesyndication.com/daca_images/simgad/10940989095589854667" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://tpc.googlesyndication.com/daca_images/simgad/10940989095589854667" className="d-block w-100" alt="..." />
                    </div>
                </div>
            </div>
        </div>
    )
}
