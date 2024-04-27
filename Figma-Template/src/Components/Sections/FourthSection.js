import React from 'react'
import './FourthSection.css';
import image from '../../Assets/bg-2.png'


export default function FourthSection() {
    return (
        <div className='m-s'>
            <div className='m-i'>
                <img src={image} alt='' />
            </div>
            <div className='m-t'>
                <h1>The unseen of spending three
                    years at Pixelgrade</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed
                    accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed
                    porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam
                    quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                <button>Learn More</button>
            </div>
        </div>
    )
}
