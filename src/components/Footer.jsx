import React from "react";
import {Link} from 'react-router-dom'
import './styles/Footer.css'

const Footer =()=>{
    return(
        <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h3>Academy</h3>
            <p>Grow yourself by learning languages ​​from anywhere in the world.</p>
          </div>
          <div className="footer-section">
            <h4>Navigation</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About us</Link></li>
              <li><Link to="/coursespage">Courses</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contacts</h4>
            <p>Email: support@academy.com</p>
            <p>Phone number: +123 456 7890</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Academy. All rights reserved.</p>
        </div>
      </footer>
    )
}

export default Footer;