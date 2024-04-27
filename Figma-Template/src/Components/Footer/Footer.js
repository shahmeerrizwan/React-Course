import React from 'react'
import './Footer.css'
import logo from '../../Assets/logof.png'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-left col-md-4 col-sm-6">
                <p className="about">
                    <span> MSR company</span> Ut congue augue non tellus bibendum, in varius tellus condimentum. In scelerisque nibh tortor, sed rhoncus odio condimentum in. Sed sed est ut sapien ultrices eleifend. Integer tellus est, vehicula eu lectus tincidunt,
                    ultricies feugiat leo. Suspendisse tellus elit, pharetra in hendrerit ut, aliquam quis augue. Nam ut nibh mollis, tristique ante sed, viverra massa.
                </p>
                <div className="icons">
                    <a href="/"><i className="fa fa-facebook"></i></a>
                    <a href="/"><i className="fa fa-twitter"></i></a>
                    <a href="/"><i className="fa fa-linkedin"></i></a>
                    <a href="/"><i className="fa fa-google-plus"></i></a>
                    <a href="/"><i className="fa fa-instagram"></i></a>
                </div>
            </div>
            <div className="footer-center col-md-4 col-sm-6">
                <div>
                    <i className="fa fa-map-marker"></i>
                    <p><span> Street name and number</span> Karachi, Pakistan</p>
                </div>
                <div>
                    <i className="fa fa-phone"></i>
                    <p> (+92) 3243217819</p>
                </div>
                <div>
                    <i className="fa fa-envelope"></i>
                    <p><a href="/"> shahmeerrizwan921@gmail.com</a></p>
                </div>
            </div>
            <div className="footer-right col-md-4 col-sm-6">
                <img src={logo} alt='...' />
                <p className="menu">
                    <a href="/"> Home</a> |
                    <a href="/"> About</a> |
                    <a href="/"> Services</a> |
                    <a href="/"> Portfolio</a> |
                    <a href="/"> News</a> |
                    <a href="/"> Contact</a>
                </p>
                <p className="name"> MSR &copy; 2024</p>
            </div>
        </footer>
    )
}
