import React from 'react';

function Slider() {
    return (
        <div id="demo" className="carousel slide" data-ride="carousel" >

            <ul className="carousel-indicators">
                <li data-target="#demo" data-slide-to="0" className="active"></li>
                <li data-target="#demo" data-slide-to="1"></li>
                <li data-target="#demo" data-slide-to="2"></li>
                <li data-target="#demo" data-slide-to="3"></li>
            </ul>
            <div className="carousel-inner">
                <div className="carousel-item active one">
                    <div className="carousel-caption">
                        <h1>About</h1>
                        <p>We are in the category of seven star hotel!</p>
                    </div>
                </div>

                <div className="carousel-item two">
                    <div className="carousel-caption">
                        <h1>Services</h1>
                        <p>We provide you many services!</p>
                    </div>
                </div>

                <div className="carousel-item three">
                    <div className="carousel-caption">
                        <h1>Menu</h1>
                        <p>We have alot of items in the menu!</p>
                    </div>
                </div>

                <div className="carousel-item four">
                    <div className="carousel-caption">
                        <h1>Team</h1>
                        <p>We have a team of expert chefs cooking food for you and your family!</p>
                    </div>
                </div>
            </div>

            <a className="carousel-control-prev" href="#demo" data-slide="prev">
                <span className="carousel-control-prev-icon"></span>
            </a>

            <a className="carousel-control-next" href="#demo" data-slide="next">
                <span className="carousel-control-next-icon"></span>
            </a>

        </div>
    );
}
export default Slider; 