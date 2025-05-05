  import React from 'react';
  import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
  import Logo from '../../assets/images/logo.png';  // Replace with actual path
  import HamburgerMenu from '../../assets/images/hamburger-menu.png';  // Replace with actual path
  import Resources from '../../pages/Resources/resources';
  import JobPage from '../../pages/jobPage2'; 
<<<<<<< HEAD
  import CareerDetail from '../../pages/careerdetail';
=======
>>>>>>> 97a11ff81a807f7191e2f4bfbf2ce483c2b33dce
  import './Header.css';

  const Header = () => {
    return (
      <Router>
        <section className="header">
          <div className="top-header d-none d-sm-block">
            <div className="container-fluid">
              <ul>
                <li><Link to="/sustainability">Sustainability</Link></li>
                <li><Link to="/career">Career</Link></li>
                <li>Toll-free No. <a href="tel:+8000000000">800 000 0000</a></li>
              </ul>
            </div>
          </div>
          <nav className="navbar navbar-expand-lg d-none d-sm-block">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/"><img src={Logo} className="img-fluid" alt="Logo" /></Link>
              <div className="collapse navbar-collapse">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                  <img src={HamburgerMenu} alt="Menu" />
              </button>
                <ul className="ruby-menu">
                  <li className="ruby-active-menu-item"><Link to="/">Home</Link></li>
                  <li className="ruby-active-menu-item"><Link to="/about-us">About Us</Link></li>
                  <li className="ruby-menu-mega-blog">
                    <Link to="#">Products</Link>
                    {/* <div>
                      <ul className="ruby-menu-mega-blog-nav">
                        <li><Link to="/products/wireline">Wireline</Link></li>
                        <li><Link to="/products/wireline-pullingtools">Pulling Tools</Link></li>
                        <li><Link to="#">Tubing Set Flow Controls</Link></li>
                        <li><Link to="#">Nipple Set Flow Controls</Link></li>
                      </ul>
                    </div> */}
                  </li>
                  <li className="ruby-active-menu-item"><Link to="/services">Services</Link></li>
                  <li className="ruby-active-menu-item"><Link to="/Resources">Resources</Link></li>
                  <li className="ruby-active-menu-item"><Link to="/contact-us">Contact Us</Link></li>
                </ul>
              </div>
            </div>
          </nav>
        </section>

        {/* Routes under the Header */}
        <Routes>
    <Route path="/" element={<Navigate to="/Resources" replace />} />
    <Route path="/sustainability" element={<div>Sustainability Page</div>} />
    <Route path="/career" element={<div>Career Page</div>} />
    <Route path="/about-us" element={<div>About Us Page</div>} />
    <Route path="/products/wireline" element={<div>Wireline Page</div>} />
    <Route path="/products/wireline-pullingtools" element={<div>Pulling Tools Page</div>} />
    <Route path="/services" element={<div>Services Page</div>} />
    <Route path="/Resources" element={<Resources />} />
    <Route path="/job-openings" element={<JobPage />} />
<<<<<<< HEAD
    <Route path="/career-detail-page" element={<CareerDetail />} />
=======
>>>>>>> 97a11ff81a807f7191e2f4bfbf2ce483c2b33dce
    <Route path="/contact-us" element={<div>Contact Us Page</div>} />
  </Routes>
      </Router>
    );
  };

  export default Header;
