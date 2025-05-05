// Footer.js
import React from "react";
import "./footer.css"; // optional if you have styles
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'; // import icons

const Footer = () => {
  return (
    <footer>
      <div className="container-fluid">
        <div className="d-grid">
          <div className="copyright">
            <p>
              <span className="copyrightPara">
                Copyright @2023 Downhole & Design International Corporation
              </span>{" "}
              <span>|</span>{" "}
              <a href="./privacy-policy.html">Privacy</a> <span>|</span>{" "}
              <a href="#">T&C</a>
            </p>
            <p>
              Designed and Developed by{" "}
              <a
                href="https://www.hgsinteractive.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                HGS Interactive
              </a>
            </p>
          </div>
          <div className="social-icons">
            <ul>
              <li>
                <a href="https://www.facebook.com" target="_blank" className="text-white" rel="noopener noreferrer">
                  <FaFacebook size={30} />
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com" target="_blank" className="text-white" rel="noopener noreferrer">
                  <FaTwitter size={30} />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com" target="_blank" className="text-white"  rel="noopener noreferrer">
                  <FaLinkedin size={30} />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com" target="_blank" className="text-white" rel="noopener noreferrer">
                  <FaInstagram size={30} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
