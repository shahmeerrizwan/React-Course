import React from 'react'
import './Footer.css';


export default function Footer() {
    return (
        <div>
            <footer className="mainfooter" role="contentinfo">
                <div className="footer-middle">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-6">
                                <div className="footer-pad">
                                    <h4>MSR NEWS</h4>
                                    <ul className="list-unstyled">
                                        <li><a href="/">MSR</a></li>
                                        <li><a href="/">Payment Center</a></li>
                                        <li><a href="/">Contact Directory</a></li>
                                        <li><a href="/">Forms</a></li>
                                        <li><a href="/">News and Updates</a></li>
                                        <li><a href="/">FAQs</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="footer-pad">
                                    <h4>Bano Qabil</h4>
                                    <ul className="list-unstyled">
                                        <li><a href="/">Website Tutorial</a></li>
                                        <li><a href="/">Accessibility</a></li>
                                        <li><a href="/">Disclaimer</a></li>
                                        <li><a href="/">Privacy Policy</a></li>
                                        <li><a href="/">FAQs</a></li>
                                        <li><a href="/">Webmaster</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="footer-pad">
                                    <h4>Final Project</h4>
                                    <ul className="list-unstyled">
                                        <li><a href="/">Parks and Recreation</a></li>
                                        <li><a href="/">Public Works</a></li>
                                        <li><a href="/">Police Department</a></li>
                                        <li><a href="/">Fire</a></li>
                                        <li><a href="/">Mayor and City Council</a></li>
                                        <li>
                                            <a href="/">MSR</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <h4>Follow Us</h4>
                                <ul className="social-network social-circle">
                                    <li><a href="https://www.facebook.com/people/Shahmeer-Rizwan/100087591455419/" target='blank' className="icoFacebook" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="https://www.linkedin.com/muhammadshahmeerrizwan" className="icoLinkedin" target='blank' title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 copy">
                                <p className="text-center">&copy; Copyright 2024 - Company Name.  All rights reserved.
                                    <br />
                                    Made  by ❤️ by Shahmeer Rizwan
                                </p>
                            </div>
                        </div>


                    </div>
                </div>
            </footer>

        </div>
    )
}
