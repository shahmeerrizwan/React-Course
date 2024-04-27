import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../Assets/logo.png';
import linkedin from '../../Assets/in-logo.png';
import linke from '../../Assets/9.png';
import insta1 from '../../Assets/11.png'
import insta from '../../Assets/ig-logo.png';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';




const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuItemClick = () => {
        setMenuOpen(false);
    };


    const [modal, setModal] = useState(false);
    if (modal) {
        document.body.classList.add("active-modal")
    } else {
        document.body.classList.remove("active-modal")

    }
    const toggleModal = () => {
        setModal(!modal);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const emailInput = event.target.querySelector('input[type="email"]');
        const emailValue = emailInput.value.trim();


        if (!emailValue) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please enter your email address!',
            });
            return;
        }

        Swal.fire({
            title: 'Are you sure?',
            text: 'Once submitted, you will not be able to change your details!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, submit it!',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Successfully Subscribed!',
                    'Enjoy Your Subscription',
                    'success'
                );
                toggleModal();
            }
        });
    };


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuOpen && !event.target.closest('nav')) {
                setMenuOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [menuOpen]);

    return (
        <>
            <nav >
                <input type="checkbox" id="click" checked={menuOpen} onChange={() => setMenuOpen(!menuOpen)} />
                <label htmlFor="click" className="menu-btn">
                    <i className="fa fa-align-left"></i>
                    <Link to='/'><img className='logoo' src={logo} alt="" /></Link>
                </label>
                <div className={`${menuOpen ? 'openfirst' : 'openscnd'}`}>
                    <span className='line'>/</span>
                    <span className='grp'>GROUP</span>
                </div>
                <div className={`${menuOpen ? 'openone' : 'opentwo'}`}>
                    <div className='link-i-e'>
                        <a href='https://www.instagram.com/_i_am_shahmeer/' target='_blank' rel="noreferrer"> <img src={insta} alt='...' /></a>
                        <a href='https://www.linkedin.com/in/muhammadshahmeerrizwan/' target='_blank' rel="noreferrer"> <img className='img-2' src={linkedin} alt='...' /></a>
                    </div>
                    <span onClick={toggleModal} className='hide-s'> <i>Subscribe</i></span>
                    <span className='hide-s'><i>|</i></span>
                    <span className='blu-2'><Link onClick={handleMenuItemClick} to="/"><i>Home</i></Link> </span>
                </div>
                <ul>
                    <li ><Link className='hiding' onClick={toggleModal} to="/">Subscribe</Link> </li>
                    <li><Link onClick={handleMenuItemClick} to="/uberuns">Über uns</Link> </li>
                    <li><Link onClick={handleMenuItemClick} to="/captial">Captial</Link></li>
                    <li><Link onClick={handleMenuItemClick} to="/consulting">Consulting</Link></li>
                    <li><Link onClick={handleMenuItemClick} to="/studios">Studios</Link></li>
                    <li><Link onClick={handleMenuItemClick} to="/network">Network</Link></li>
                    <li><Link onClick={handleMenuItemClick} to="/sports">Sports</Link></li>
                    <li><Link onClick={handleMenuItemClick} to="/contact">Contact</Link></li>
                    <span className='s-p-l'> <li className='last-1'>© 2023 COPYRIGHT. <br />
                        <span className='l-n'>IMPRESSUM </span>
                        <span className='l-n'> DATENSCHUTZ</span>  </li>
                        <li className='last-2'>KÜFFNER Group <br />
                            Tölzerstraße 1, 82031 Grünwald <br />
                            info@kueffner-group.com</li>
                        <li><div className='l-n-87'>
                            <a href='https://www.instagram.com/_i_am_shahmeer/' target='_blank' rel="noreferrer">   <img src={insta1} width={"25px"} height={"25px"} alt='...' /></a>
                            <a href='https://www.linkedin.com/in/muhammadshahmeerrizwan/' target='_blank' rel="noreferrer">    <img className='img-2' src={linke} alt='...' /></a>
                        </div></li></span>
                </ul>


            </nav>


            {/* MODAL CONTENT */}

            {modal && (
                <div className='modal'>
                    <div className='overlay'></div>
                    <div className='modal-content'>
                        <h2 className='h1-1'>KÜFFNER.</h2>
                        <p className='p-l-1'>INSIGHTS</p>
                        <h2>Business News & Updates</h2>
                        <p>
                            Trage dich jetzt kostenfrei ein und sei immer auf dem
                            Laufenden!
                        </p>
                        <form onSubmit={handleFormSubmit}>
                            <input
                                className='inp'
                                type='email'
                                required
                                placeholder='Gebe hier deine E-Mail Adresse ein'
                            />

                            <span>
                                <p > <input id='same' type='checkbox' required className='in' />
                                    <label htmlFor='same'>  Ich bin damit einverstanden, von der Küffner Group
                                        regelmäßig aktuelle Informationen per Mail zugesandt
                                        zu bekommen. Ich kann die Einwilligung jederzeit
                                        widerrufen. Details sind der Datenschutzerklärung zu
                                        entnehmen</label>
                                </p>
                            </span>
                            <button className='btn-pr' type='submit'>Eintragen</button>
                        </form>
                        <button className='close-modal' onClick={toggleModal}>
                            &times;
                        </button>
                    </div>
                </div>
            )}


        </>
    );
};

export default Navbar;