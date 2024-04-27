import React from 'react'
import './Section9.css'
import img from '../../Assets/text.png'
import map from '../../Assets/map.png'


export default function Section9() {
    return (
        <>
            <div className='s-l-9'>
                <div className='l-s-t'>
                    <img className='f-i-t' src={img} alt='...' />
                    <img className='f-i-t-2' src={map} alt='' width={"315px"} height={"320px"} />
                    <h2>Family Office Adresse <br />
                        <span>
                            Tölzerstraße 1, 82031 Grünwald bei München<br /><br />

                            info@kueffner-group.com</span></h2>
                </div>
                <div className='s-l-9-2'>
                    <div className="bg_img"></div>
                    <div className="form_wrapper">
                        <div className="form_container">
                            <div className="title_container s-l-9-2">
                                <h3>Du hast Fragen, Anregungen oder möchtest geschäftlich <br />
                                    mit der Küffner Group in Kontakt treten?</h3>
                                <span className='t-5-l'>Küffner Group in Kontakt treten?</span>
                            </div>
                            <form>
                                <div className="row clearfix">
                                    <div className="col_half">
                                        <label>Dein Name</label>
                                        <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user"></i></span>
                                            <input type="text" name="first_name" placeholder="Dein Name" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="row clearfix">
                                    <div className="col_half">
                                        <label>Deine E-Mail</label>
                                        <div className="input_field"> <span><i aria-hidden="true" className="fa fa-envelope"></i></span>
                                            <input type="email" name="email" placeholder="abc@gmail.com" required />
                                        </div>
                                    </div>
                                    <div className="col_half">
                                        <label>Deine Handynummer</label>
                                        <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user"></i></span>
                                            <input type="text" name="last_name" placeholder="Deine Handynummer" />
                                        </div>
                                    </div>
                                    <div className="col_half">
                                        <label>Phone</label>
                                        <div className="input_field"> <span><i aria-hidden="true" className="fa fa-phone"></i></span>
                                            <input type="tel" name="phone" placeholder="Phone no" pattern="[0-9]{10}" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row clearfix">
                                    <div>
                                        <label>Deine Nachricht</label>
                                        <div className="textarea_field"> <span><i aria-hidden="true" className="fa fa-comment"></i></span>
                                            <textarea cols="46" rows="3" name="comments"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <button type='submit'>Abschicken</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div >

            <div className='f-l-t-2'>
                <h2>Family Office Adresse <br />
                    <span>
                        Tölzerstraße 1, 82031 Grünwald bei München<br /><br />

                        info@kueffner-group.com</span></h2>
            </div>
            <div className='f-l-t'>
                <h2>© 2023 Copyright. <br />
                    All rights reserved</h2>
                <h2>Impressum & AGB <br />
                    Datenschutz</h2>
            </div>

        </>
    )
}
