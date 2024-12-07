import React from "react";
import './styles/Footer.css'

const Footer =()=>{
    return(
        <footer class="footer">
        <div class="footer-container">
          <div class="footer-section">
            <h3>Academy</h3>
            <p>Grow yourself by learning languages ​​from anywhere in the world.</p>
          </div>
          <div class="footer-section">
            <h4>Navigation</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About us</a></li>
              <li><a href="#courses">Courses</a></li>
              <li><a href="#contact">Contacts</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>Contacts</h4>
            <p>Email: support@academy.com</p>
            <p>Phone number: +123 456 7890</p>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2024 Academy. All rights reserved.</p>
        </div>
      </footer>
    )
}

export default Footer;