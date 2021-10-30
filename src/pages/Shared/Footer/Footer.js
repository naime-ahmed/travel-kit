import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="single-item">
                <h3>Location</h3>
                <p>London / England </p>
                <p>Tallinn / Estonia</p>
                <p>Paris / France</p>
                <p>Santoron / Greece</p>
                <p>Rome / italy</p>
            </div>
            <div className="single-item">
                <h3>Category</h3>
                <p>Cultural Travel</p>
                <p>Taste & Travel</p>
                <p>Travel Advice</p>
                <p>Travel Destination</p>
                <p> Uncategorized</p>
            </div>
            <div className="single-item">
                <h3>Quick Links</h3>
                <p>About Us</p>
                <p>Mobile With Tips & Guide</p>
                <p>Listing Quality Policy</p>
                <p>Submit Your Listing</p>
                <p>Terms & Conditions</p>
            </div>
        </div>
    );
};

export default Footer;