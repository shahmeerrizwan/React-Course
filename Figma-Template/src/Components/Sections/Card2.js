import React from 'react'
import img1 from '../../Assets/image 18.png'
import img2 from '../../Assets/image 19.png'
import img3 from '../../Assets/image 20.png'

import './Card2.css'

export default function Card2() {
    return (
        <div>
            <div id="header">
                <h1>Caring is the new marketing</h1>
                <p>The Nexcent blog is the best place to read about the latest membership insights,
                    trends and more. See who s joining the community, read about how our community
                    are increasing their membership income and lot s more.</p>
            </div>
            <div className="container">
                <div className="cardy n-4">
                    <div className="cardy-image">
                        <img alt='...' src={img1} />
                    </div>
                    <div className="cardy-text n-5">

                        <h2 className="cardy-title">Creating Streamlined
                            Safeguarding Processes with
                            OneRen</h2>
                        <p className="cardy-body">Readmore &#x2192;</p>
                    </div>
                </div>
                <div className="cardy n-3">
                    <div className="cardy-image">
                        <img alt='...' src={img2} />
                    </div>
                    <div className="cardy-text">

                        <h2 className="cardy-title">What are your safeguarding
                            responsibilities and how can
                            you manage them?</h2>
                        <p className="cardy-body">Readmore &#x2192;</p>
                    </div>
                </div>
                <div className="cardy lc-300">
                    <div className="cardy-image">
                        <img alt='...' src={img3} />
                    </div>
                    <div className="cardy-text ">
                        <h2 className="cardy-title">Revamping the Membership
                            Model with Triathlon
                            Australia
                            Model .</h2>
                        <p className="cardy-body">Readmore &#x2192;</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
