import React from 'react'
import './FirstSection.css';
import img from '../../Assets/pic-1.png'



export default function FirstSection() {
    return (
        <div className='main-div'>
            <div className='text-sec'>
                <h1>Lessons and insights </h1>
                <h2>from 8 years</h2>
                <p>Where to grow your business as a photographer: site or social media?</p>
                <button className='re-btn'>Register</button>
            </div>
            <div className='img-sec'>
                <img src={img} alt='' />
            </div>

        </div>
    )
}
