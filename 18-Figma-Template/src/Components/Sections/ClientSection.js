import React from 'react'
import './ClientSection.css';
import logo1 from '../../Assets/Logo (1).png'
import logo2 from '../../Assets/Logo (2).png'
import logo3 from '../../Assets/Logo (3).png'
import logo4 from '../../Assets/Logo (4).png'
import logo5 from '../../Assets/Logo (5).png'
import logo6 from '../../Assets/Logo (6).png'



export default function ClientSection() {
    return (
        <div className='client-sec'>
            <div className='f-sec'>
                <h1>Our Clients</h1>
                <p>We have been working with some Fortune 500+ clients</p>
            </div>
            <div className='client-img'>
                <img src={logo1} alt='...' />
                <img src={logo2} alt='...' />
                <img src={logo3} alt='...' />
                <img src={logo4} alt='...' />
                <img src={logo5} alt='...' />
                <img src={logo6} alt='...' />
            </div>
        </div>
    )
}
