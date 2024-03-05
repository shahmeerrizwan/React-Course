import './SportsCard.css';
import React from 'react'

export default function SportsCard() {
    return (
        <div>
            <div>
                <h1 className='latest'>Food</h1>
                <div className='flex' >
                    <div className='left-container flex-col'>
                        <div className='flex left-child'>
                            <div className='img-cont flex-col'>
                                <img alt='..' src='https://t4.ftcdn.net/jpg/02/84/46/89/360_F_284468940_1bg6BwgOfjCnE3W0wkMVMVqddJgtMynE.jpg' />
                                <h3>mutton recipees to try this Eid for an added delciousness</h3>
                            </div>
                            <div className='keyponts flex-col'>
                                <li>Brooklyn Backhams sandwich costed profucers..</li>
                                <li>Jardin-A tasteful karachi eatery experience!</li>
                                <li>Prwan paper fry Recipee:How to make this temptin..</li>
                                <li>3 tempting restaurant-style soup recipes that you..</li>
                            </div>
                        </div>
                        <div className=' flex left-child-2 ' >
                            <div className=' images '>
                                <div className='overflow'>
                                    <img alt='..' src='https://media.istockphoto.com/id/1457433817/photo/group-of-healthy-food-for-flexitarian-diet.jpg?b=1&s=612x612&w=0&k=20&c=V8oaDpP3mx6rUpRfrt2L9mZCD0_ySlnI7cd4nkgGAb8=' />
                                </div>
                                <h4 className='absolute'>Ever tried plum shikanji? here is the recipee</h4>
                            </div>
                            <div className='flex-col images '>
                                <div className='overflow'>
                                    <img alt='..' src='https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
                                </div>
                                <h4 className='absolute'>Bakra Eid special recipee: mutton Leg Roast with.. </h4>
                            </div>

                            <div className='flex-col images '>
                                <div className='overflow'>
                                    <img alt='..' src='https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
                                </div>

                                <h4 className='absolute'>monsoon resipee: Move over regular.. </h4>
                            </div>

                            <div className='flex-col images '>
                                <div className='overflow'>
                                    <img alt='..' src='https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
                                </div>
                                <h4 className='absolute'>Try this lavish peshawari Beef kabab.. </h4>
                            </div>
                        </div>
                    </div>

                    <div className='right-container flex-col ' >
                        <div className='flex  right-child'>
                            <img alt='..' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStwAor7czz7cKPLNNbBlF92eCBO8WJRNPPRA&usqp=CAU' />
                            <p>Drunkin Noodles Follow this super simple recipee to enjoy the famous Thai Dish</p>

                        </div>
                        <div className='flex  right-child'>
                            <img alt='..' src='https://i.ytimg.com/vi/izY0z109APc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCYvJMzt1BmF6u9pprIEYYhItRFxw' />
                            <p>Easy to Make Mouthwatering veggie Muffins Recpee</p>

                        </div>
                        <div className='flex  right-child'>
                            <img alt='..' src='https://www.bolnews.com/wp-content/uploads/2021/07/FotoJet-7-4.jpg' />
                            <p>Recipee welcome the weekend with crispy, crunchy Fajita Iceberg chicken Wraps</p>

                        </div>
                        <div className='flex  right-child'>
                            <img alt='..' src='https://www.shelovesbiscotti.com/wp-content/uploads/2023/04/Cocoa-biscotti-3.jpg' />
                            <p>Recipee: including in sweet nutty delight with a Wainuts and CoCoa Biscotti</p>

                        </div>
                        <div className='flex  right-child'>
                            <img alt='..' src='https://www.bolnews.com/wp-content/uploads/2021/07/FotoJet-27.jpg' />
                            <p>Recipee: Beat the summer heat with a frozen mango desert</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


