import React from 'react';
import one from '../image/party1.svg';
import two from '../image/restaurant1.svg';
import three from '../image/restaurant4.svg';

function Services() {
    return (
        <div id="services">
            <br />
            <hr />
            <br /><br />
            <span className="firstheading"><h1 >Services</h1></span>
            <span className="secondheading"><h1>MSR Restaurant</h1></span>
            <br />
            <div className="card">
                <br />
                <img src={one} alt="pic" className="card-img-top" />
                <div className="card-body">
                    <h2 className="card-title">Birthday</h2> <h2 className="card-title">Party</h2>
                    <p className="text para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum reiciendis iusto qui laboriosam natus excepturi quaerat deleniti necessitatibus corrupti sit, voluptatem accusamus suscipit quasi eius provident at saepe minus a?</p>
                </div>
            </div>

            <div className="card">
                <br />
                <img src={two} alt="pic" className="card-img-top" />
                <div className="card-body">
                    <h2 className="card-title">Business</h2><h2 className="card-title">Meeting</h2>
                    <p className="text para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum reiciendis iusto qui laboriosam natus excepturi quaerat deleniti necessitatibus corrupti sit, voluptatem accusamus suscipit quasi eius provident at saepe minus a?</p>
                </div>
            </div>

            <div className="card">
                <br />
                <img src={three} alt="pic" className="card-img-top" />
                <div className="card-body">
                    <h2 className="card-title">Small</h2><h2 className="card-title">Function</h2>
                    <p className="text para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum reiciendis iusto qui laboriosam natus excepturi quaerat deleniti necessitatibus corrupti sit, voluptatem accusamus suscipit quasi eius provident at saepe minus a?</p>
                </div>
            </div>
        </div>
    );
}

export default Services;