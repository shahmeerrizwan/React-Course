import React from 'react'
import './Section1.css'
import img from '../../Assets/sec-1.png'

export default function Section1() {
    return (
        <div className='s-1'>
            <div className='img'>
                <img src={img} alt='' />
            </div>
            <p>A modern-day company on the mission to create a better tomorrow.</p>
        </div>
    )
}
