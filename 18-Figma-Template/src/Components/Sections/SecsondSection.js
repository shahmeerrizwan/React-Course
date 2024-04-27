import React from 'react';
import './SecondSection.css';
import img from '../../Assets/bg-3.png'


export default function SecsondSection() {
    return (
        <div className='m-s-1'>
            <div className='m-i'>
                <img src={img} alt='' />
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
