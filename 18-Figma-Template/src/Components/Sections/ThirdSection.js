import React from 'react'
import './ThirdSection.css'
import group2 from '../../Assets/t-s-3.png'
import group3 from '../../Assets/t-s-1.png'
import group4 from '../../Assets/t-s-2.png'


export default function ThirdSection() {
    return (
        <div className='t-s'>
            <div className='t-t'>
                <h1>Helping a local </h1>
                <h2>business reinvent itself </h2>
                <p>We reached here with our hard work and dedication</p>
            </div>
            <div className='m-i-1'>
                <div className='f-c'>
                    <img src={group3} alt='' />
                    <div className='m-l-r'>
                        <span className='count'>2,245,341</span>
                        <span className='para'>Members</span>
                    </div>
                </div>
                <div className='f-c'>
                    <img src={group2} alt='' />
                    <div className='m-l-r'>
                        <span className='count'>46,328</span>
                        <span className='para'>Clubs</span>
                    </div>
                </div>
                <div className='f-c'>
                    <img src={group4} alt='' />
                    <div className='m-l-r'>
                        <span className='count ting'>828,867</span>
                        <span className='para'>Event Bookings</span>
                    </div>
                </div>
                <div className='f-c'>
                    <img src={group3} alt='' />
                    <div className='m-l-r'>
                        <span className='count'>1,926,436</span>
                        <span className='para'>Payments</span>
                    </div>
                </div>
            </div>



        </div>
    )
}
