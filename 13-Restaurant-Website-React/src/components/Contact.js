import React from 'react';

function Contact() {
    return(
        
        <div id="contact">
          
            <br />
            <hr /><br />
            <br />
            <span className="firstheading"><h1 >Contact</h1></span>
            <span className="secondheading"><h1>MSR Restaurant</h1></span>
            <br />
            <form>
            <div className="contactUs">
            <br />
            <h4>Contact Us On Below</h4>
    
            <div className="form-group">
            <input type="text" placeholder="Your Name" className="form-control" required="required" />
            </div>

            <div className="form-group">
            <input type="email" placeholder="Email" className="form-control" />
            </div>

            <div className="form-group">
            <input type="number" placeholder="Mobile No" className="form-control" required="required"/>
            </div>

            <div className="form-group">
            <textarea placeholder="Give Feedback" className="form-control"></textarea>
            </div>

            <div className="form-group">
            <button className="btn" id="mysubmit">Submit or Subscribe</button>
            </div>

            <br />
            </div>
            </form>
        </div>
    );
}
export default Contact;