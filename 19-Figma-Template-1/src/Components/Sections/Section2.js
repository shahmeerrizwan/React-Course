import React from 'react'
import './Section2.css'
import img1 from '../../Assets/sec-2-i-1.jpg'
import img2 from '../../Assets/s-2-i-2.png'
import linkedin from '../../Assets/9.png'
import www from '../../Assets/www.png'
import './Section3.css'
import img90 from '../../Assets/Ellipse 33.png'
import img20 from '../../Assets/Ellipse 34.png'
import img3 from '../../Assets/Ellipse 35.png'
import img4 from '../../Assets/Ellipse 36.png'
import img5 from '../../Assets/Ellipse 37.png'
import img6 from '../../Assets/Ellipse 38.png'
import img7 from '../../Assets/Ellipse 39.png'
import img8 from '../../Assets/Ellipse 40.png'
import img9 from '../../Assets/Ellipse 41.png'



export default function Section2() {
    return (
        <>
            <div className='sec-2'>
                <div className='s-2-c'>
                    <h2>Über uns.</h2>
                    <h3>“People first. Creating value.”</h3>

                    <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla rerum adipisci sint sequi, numquam sunt atque ipsam culpa facilis inventore, porro repudiandae? Nam ullam numquam ipsam et facere eum dolores commodi unde necessitatibus, harum quos consequatur rem provident quidem minus quis laborum laudantium quia culpa reprehenderit fuga quisquam ea consectetur deleniti. Nam eum ullam omnis, rerum iusto ipsa consequatur aliquam veniam perspiciatis, molestiae dolore dolorem, architecto suscipit ea cumque ratione iste quam dolores quia autem sunt quidem deleniti! Et sint ullam soluta.
                    </p>
                    <button><i className="fa fa-play-circle"></i> Play Video</button>
                    <button className='btn-1'>Kontakt</button>

                </div>
                <div className='s-2-i'>
                    <div className='m-9-11' >
                        <img className='im-1' src={img1} alt='' />
                        <div className='f-i-d'>
                            <h2>Andreas Küffner</h2>
                            <p>Founder</p>
                            <span className='img-s'>
                                <img src={www} alt='...' />
                                <img src={linkedin} alt='...' /></span>
                        </div>
                    </div>
                    <div className='s-i-d'>

                        <img className='im-1' src={img2} alt='' />
                        <div className='f-i-d'>
                            <h2>Manuel Grund</h2>
                            <p>Geschäftsführer</p>
                            <span className='img-s'>
                                <img src={www} alt='...' />
                                <img src={linkedin} alt='...' /></span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='t-s-l'>
                <div className='text-1'>
                    <div className='t-l-r-p'>
                        <p>14 <span className='span-1'>Unternehmens-<br />
                            beteiligungen</span></p>
                        <p>22<span className='span-1'>laufende<br />
                            Projekte</span></p>
                    </div>
                    <div className='t-l-r-p-1' >
                        <p>34<span className='span-1'>Experten/Talente<br />
                            behind the brand</span></p>

                        <p>90<span className='span-1'>+Jahre gebündelte<br />
                            Erfahrung</span></p>
                    </div>
                </div>
                <div className='s-c-p'>
                    <h1>Behind the brand</h1>
                    <p>Hinter jeder großen Unternehmung trägt ein noch viel stärkeres Team von
                        Talenten und passionierten Menschen zum Erfolg bei.</p>
                    <div className='img-all'>
                        <img src={img90} alt='..' />
                        <img src={img20} alt='..' />
                        <img src={img3} alt='..' />
                        <img src={img4} alt='..' />
                        <img src={img5} alt='..' />
                        <img src={img6} alt='..' />
                        <img src={img7} alt='..' />
                        <img src={img8} alt='..' />
                        <img src={img9} alt='..' />
                        <span> ...</span>
                    </div>
                </div>
            </div>
        </>
    )
}
