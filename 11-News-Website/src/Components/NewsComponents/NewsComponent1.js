import React from 'react'
import './NewsComponent1.css';

export default function News() {
    return (
        <div>
            <div className='flex cont'>
                <div className='left'>
                    <h2 className='grad' style={{ fontSize: '2rem' }}>VIDEOS</h2>

                    <img src='https://i.ytimg.com/vi/VK67FIBK4HI/maxresdefault.jpg' alt='error' />
                    <h3 className='heading'>Process of govt formation remains unclear 12 days after election </h3>
                </div>
                <div className='mid'>

                    <div className=' mid-1 flex margin border'>
                        <img src='https://www.geo.tv/assets/uploads/updates/2024-02-20/video_thumb_image_1193897886.jpg' alt='error' width={'50%'} />
                        <p className='cl'>is ppp going to join cabinet?</p>
                    </div>
                    <div className=' mid-1 flex margin  border'>
                        <img src='https://i.ytimg.com/vi/UyouR7IMVFc/maxresdefault.jpg' alt='error' width={"50%"} />
                        <p className='cl'>Deadlock situation between ppp,PML-N</p>
                    </div>
                    <div className=' mid-1 flex margin border'>
                        <img src='https://www.geo.tv/assets/uploads/updates/2024-02-20/video_thumb_image_666315532.jpg' alt='error' width={'50%'} />
                        <p className='cl'>Emerging player jahandad khans outstanding performance</p>
                    </div>
                    <div className=' mid-1 flex margin border'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfHLknKh0_tAex4J9vSA-d6zgHCDkvXPS2jw&usqp=CAU' alt='error' width={"50%"} />
                        <p className='cl'>why is pitch condition is change in stadium?</p>
                    </div>
                </div>

                <div className='right'>
                    <h2 className='grad hidden' style={{ fontSize: '2rem' }}>NEWS HEADLINES</h2>
                    <div className=' mid-1 flex margin border'>
                        <img src='https://i.ytimg.com/vi/6ar8UNkMfu8/maxresdefault.jpg' alt='error' width={'50%'} />
                        <p className='cl'>Geo News Headlines 9pm </p>
                    </div>
                    <div className=' mid-1 flex margin  border'>
                        <img src='https://www.geo.tv/assets/uploads/updates/2024-02-21/video_thumb_image_76660092.jpg' alt='error' width={'50%'} />
                        <p className='cl'>Geo News Headlines 6 pm | 20 Feb 20024 </p>
                    </div>
                    <div className=' mid-1 flex margin border'>
                        <img src='https://www.geo.tv/assets/uploads/updates/2021-05-30/l_352633_62282_updates.jpg' alt='error' width={"50%"} />
                        <p className='cl'>Geo Headlines 3pm  </p>
                    </div>
                    <div className=' mid-1 flex margin border'>
                        <img src='https://www.geo.tv/assets/uploads/updates/2021-08-31/l_368085_8718227_updates.jpg' alt='error' width={"50%"} />
                        <p className='cl'>Geo Headlines 5pm </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
