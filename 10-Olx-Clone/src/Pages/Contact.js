import React from 'react';
import '../Components/Contact.css';


const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-content">
                <h1>Contact Us</h1>
                <p>We'd love to hear from you!</p>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Your Name</label>
                        <input type="text" className="form-control" id="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Your Email</label>
                        <input type="email" className="form-control" id="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea className="form-control" id="message" rows="5" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
