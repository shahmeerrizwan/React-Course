import './Card.css';
import React from 'react'

export default function index({ images, title, description, price, brand }) {
    return (

        <>
            <div>
                <div className="containerr ">
                    <div className="cardd">
                        <div className="card-headerr">
                            <img src={images[0]} alt="404 Error" />
                        </div>
                        <div className="card-bodyy">
                            <span className="tagg tag-teall">Brand : {brand}</span>
                            <h4>
                                {title}
                            </h4>
                            <p>
                                {description}
                                <br />
                                <br />
                                <span className='love'> ORDER NOW </span><span className='loveu'> LIMITED STOCK </span>
                            </p>
                            <p> RS : {price} Pkr </p>
                        </div>
                    </div>
                    <div className="cardd">
                        <div className="card-headerr">
                            <img src={images[1]} alt="404 Error" />
                        </div>
                        <div className="card-bodyy">
                            <span className="tagg tag-teall">Brand : {brand}</span>
                            <h4>
                                {title}-use
                            </h4>
                            <p>
                                {description}
                                <br />
                                <br />
                                <span className='love'> ORDER NOW </span><span className='loveu'> LIMITED STOCK </span>
                            </p>
                            <p> RS : {price} Pkr </p>
                        </div>
                    </div>
                    <div className="cardd">
                        <div className="card-headerr">
                            <img src={images[2]} alt="404 Error" />
                        </div>
                        <div className="card-bodyy">
                            <span className="tagg tag-teall">Brand : {brand}</span>
                            <h4>
                                {title}-new
                            </h4>
                            <p>
                                {description}
                                <br />
                                <br />
                                <span className='love'> ORDER NOW </span><span className='loveu'> LIMITED STOCK </span>
                            </p>
                            <p> RS : {price} Pkr </p>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
