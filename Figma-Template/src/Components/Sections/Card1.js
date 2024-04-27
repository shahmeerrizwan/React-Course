import React from 'react'
import './Card1.css';
import icon1 from '../../Assets/Icon (1).png'
import icon2 from '../../Assets/Icon (3).png'
import icon3 from '../../Assets/Icon (4).png'

export default function Card1() {
    return (
        <>
            <div className='card-text'>
                <h1>Manage your entire community
                    in a single system</h1>
                <p>Who is Nextcent suitable for?</p>
            </div>
            <div className='main-card'>
                <div className='card'>
                    <img src={icon1} alt='...' />
                    <h1>Membership
                        Organisations</h1>
                    <p>Our membership management
                        software provides full automation of
                        membership renewals and payments</p>
                </div>
                <div className='card'>
                    <img src={icon2} alt='...' />
                    <h1>National
                        Associations</h1>
                    <p>Our membership management
                        software provides full automation of
                        membership renewals and
                        payments
                    </p>
                </div>
                <div className='card l-c'>
                    <img src={icon3} alt='...' />
                    <h1>Clubs And <br />
                        Groups</h1>
                    <p>Our membership management
                        software provides full automation of
                        membership renewals and payments</p>
                </div>
            </div>
        </>
    )
}
