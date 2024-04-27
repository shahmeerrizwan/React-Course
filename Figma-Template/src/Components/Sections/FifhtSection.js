import React from 'react'
import './FifhtSection.css'
import image from '../../Assets/c-1.png'
import logo1 from '../../Assets/Logo (1).png'
import logo2 from '../../Assets/Logo (2).png'
import logo3 from '../../Assets/Logo (3).png'
import logo4 from '../../Assets/Logo (4).png'
import logo5 from '../../Assets/Logo (5).png'
import logo6 from '../../Assets/Logo (6).png'



export default function FifhtSection() {
    return (
        <div className='m-s-2'>
            <div className='m-i-9'>
                <img src={image} alt='' />
            </div>
            <div className='m-t-1'>
                <p>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus
                    tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida
                    enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie
                    mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
                    eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien,
                    vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum
                    id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                <h3>Tim Smith</h3>
                <p className='b-p'>British Dragon Boat Racing Association</p>
                <div className='im-23'>
                    <img src={logo1} alt='...' />
                    <img src={logo2} alt='...' />
                    <img src={logo3} alt='...' />
                    <img src={logo4} alt='...' />
                    <img src={logo5} alt='...' />
                    <img src={logo6} alt='...' />
                    <span className='ipl'>Meet all customers &#x2192;</span>
                </div>
                <span className='pk-i'>Meet all customers &#x2192;</span>
            </div>
        </div>
    )
}
