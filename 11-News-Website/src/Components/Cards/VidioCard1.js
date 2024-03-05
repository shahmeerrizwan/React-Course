import React from 'react'
import './VidioCard1.css';



export default function VidioCard1() {
    return (
        <div className='black'>
            <section className="first">
                <div className="secImg">
                    <a href='https://www.youtube.com/embed/ybqxJz0CudY?si=Z9B9zBLLR1VDrI34' target='blank'>
                        <img
                            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                            alt=""
                        />
                    </a>
                    <iframe className="responsive-video" src='https://www.youtube.com/embed/MqqZtvjay6E?si=pTr4BAq-ckqJcjQU' title='news'
                        allowFullScreen autoPlay loop ></iframe>
                </div>
                <div className="secImg">
                    <a href='https://www.youtube.com/embed/RMz-5LS8la8?si=mwLF3kkenKvzYpkF' target='blank'>
                        <img
                            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                            alt=""
                        /></a>
                    <iframe className="responsive-video" src='https://www.youtube.com/embed/RMz-5LS8la8?si=mwLF3kkenKvzYpkF' title='news'
                        autoPlay loop allowFullScreen ></iframe>
                </div>
            </section>
        </div>
    )
}



