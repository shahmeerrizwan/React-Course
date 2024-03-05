import React, { useState } from 'react';
import OlxLogo from '../Assets/OlxLogo';
import Search from '../Assets/Search';
import Arrow from '../Assets/Arrow';
import SellButton from '../Assets/SellButton';
import SellButtonPlus from '../Assets/SellButtonPlus';
import { Link } from 'react-router-dom';


export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuItemClick = () => {
        setMenuOpen(false); // Close the hamburger menu
    };
    return (
        <>
            <div className='back'>
                <div className='main'>
                    <div className='olxlogo'>
                        <img src="https://1000logos.net/wp-content/uploads/2023/01/OLX-logo.png" alt="" />
                    </div>
                    <div className='carlogo'>
                        <img src="https://static.vecteezy.com/system/resources/previews/001/193/785/non_2x/car-png.png" alt="" />
                        <span>MOTORS</span>
                    </div>
                    <div className='buildinglogo'>
                        <img src="https://freepngimg.com/save/148529-building-vector-png-download-free/512x512" alt="" />
                        <span>PROPERTY</span>
                    </div>
                </div>
                <div className='up'>
                    <div className='headerParentDiv'>
                        <div className="headerChildDiv">
                            <div className="brandName">
                                <OlxLogo />
                            </div>
                            <div className="placeSearch">
                                <Search />
                                <input type="text" id="browser" name="browser" className='ali' placeholder='Pakistan' autoComplete="off" list="browsers" />
                                <datalist id="browsers">
                                    <option value="Karachi" />
                                    <option value="Lahore" />
                                    <option value="Islamabad" />
                                    <option value="Peshawar" />
                                    <option value="Quetta" />
                                    <option value="KPK" />
                                </datalist>
                                <Arrow />
                            </div>
                            <div className="productSearch">
                                <div className="input">
                                    <input
                                        type="text"
                                        placeholder="Find car,mobile phone and more..."
                                    />
                                </div>
                                <div className="searchAction">
                                    <Search />
                                </div>
                            </div>
                            <div className="language">
                                <span> ENGLISH </span>
                                <Arrow />
                            </div>


                            <div className="sellMenu">
                                <SellButton />
                                <div className="sellMenuContent">
                                    <SellButtonPlus />
                                    <span>SELL</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <header className="header">
                <input className="menu-btn" type="checkbox" id="menu-btn" checked={menuOpen} onChange={() => setMenuOpen(!menuOpen)} />
                <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
                <ul className="menu">
                    <li><Link to="/" onClick={handleMenuItemClick}> Home </Link></li>
                    <li><Link to="/products" onClick={handleMenuItemClick}> Products </Link></li>
                    <li><Link to="/delivery" onClick={handleMenuItemClick}> Delivery </Link></li>
                    <li><Link to="/contact" onClick={handleMenuItemClick}> Contact </Link></li>
                    <li><Link to="/reviews" onClick={handleMenuItemClick}> Reviews</Link></li>
                </ul>
            </header>










        </>
    )
}
