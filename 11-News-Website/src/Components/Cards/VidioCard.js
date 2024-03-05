import React from 'react'
import './Vidio.css';



export default function VidioCard() {
    return (
        <div className='black'>
            <section className="first">
                <div>
                </div>
                <div className="secImg">
                    <a href='https://www.youtube.com/embed/7z4D0NdfPIs?si=nHf0P54LXBBbn4lU' target='blank'>
                        <img
                            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                            alt=""
                        />
                    </a>
                    <iframe className="responsive-video" src='https://www.youtube.com/embed/7z4D0NdfPIs?si=nHf0P54LXBBbn4lU' title='news'
                        allowFullScreen ></iframe>
                </div>
                <div className="secImg">
                    <a href='https://www.youtube.com/embed/6YstvRZCARc?si=ZH1Mp2IhdbDRwko7' target='blank'>
                        <img
                            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                            alt=""
                        /></a>
                    <iframe className="responsive-video" src='https://www.youtube.com/embed/6YstvRZCARc?si=ZH1Mp2IhdbDRwko7' title='news'
                        allowFullScreen ></iframe>
                </div>
            </section>
        </div>
    )
}
