import React, { useState } from 'react';
import { Link } from 'react-scroll';
import Button from '@mui/material/Button';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import whatsAppIcon from '../../assets/tech/whatsapp.svg'
import './Navbar.css';
import Logo from '../../logo.svg';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('#hero');
    const [isMobile, setIsMobile] = useState(false);

    const handleClickWhatsapp = () => {
        window.open('https://wa.me/919939337638?text=Hello,%20*Ank Square Pvt. Ltd.*%0AI%20wish%20to%20connect%20with%20you.', '_blank');
    };

    const handleLinkClick = (link) => {
        setActiveLink(link);
        setIsMobile(false); // Close mobile menu on link click
    };

    const handleToggle = () => {
        setIsMobile(!isMobile);
    };

    return (
        <div className="navbar-root">
            <div className="navbar-top">
                <div className="navbar-top-element">
                    <a href="tel:+919939337638" rel="noreferrer" target="_blank">
                        <LocalPhoneIcon /> +91 9939337638
                    </a>
                    <a href="mailto:info@anksquare.com" rel="noreferrer" target="_blank">
                        <EmailIcon /> info@anksquare.com
                    </a>
                </div>
            </div>

            <div className="navbar">
                <div className="navbar-item">
                    <div className="navbar-logo">
                        <img src={Logo} alt="Logo" />
                    </div>

                    <nav className="nav-item-desktop">
                        <ul className='nav-links'>
                            <li>
                                <Link
                                    // className='nav-link'
                                    to="hero"
                                    onClick={() => handleLinkClick('#hero')}
                                    smooth={true}
                                    duration={800}
                                    className={activeLink === '#hero' ? 'active' : 'nav-link'}
                                >

                                    HOME
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="about"
                                    onClick={() => handleLinkClick('#about')}
                                    smooth={true}
                                    duration={800}
                                    className={activeLink === '#about' ? 'active' : 'nav-link'}
                                >
                                    ABOUT US
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="account-management"
                                    onClick={() => handleLinkClick('#account-management')}
                                    smooth={true}
                                    duration={800}
                                    className={activeLink === '#account-management' ? 'active' : 'nav-link'}
                                >
                                    ACCOUNT MANAGEMENT
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="digital-marketing"
                                    onClick={() => handleLinkClick('#digital-marketing')}
                                    smooth={true}
                                    duration={800}
                                    className={activeLink === '#digital-marketing' ? 'active' : 'nav-link'}
                                >
                                    SERVICES
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <div className="navbar-button-desktop btn">
                        <Button variant="contained" onClick={handleClickWhatsapp}>
                            CONTACT US
                        </Button>
                    </div>

                    <div className="hamburger-icon">
                        <button className="mobile-menu-icon" onClick={handleToggle}>
                            {isMobile ? '✖' : '☰'}
                        </button>
                    </div>

                    {isMobile && (
                        <nav className="nav-item-mobile">
                            <ul className="mobile-menu">
                                <li>
                                    <Link className='nav-link' to="hero" smooth={true} duration={800} onClick={() => handleLinkClick('#hero')}>
                                        HOME
                                    </Link>
                                </li>
                                <li>
                                    <Link to="about" className='nav-link' smooth={true} duration={800} onClick={() => handleLinkClick('#about')}>
                                        ABOUT US
                                    </Link>
                                </li>
                                <li>
                                    <Link to="account-management" className='nav-link' smooth={true} duration={800}  onClick={() => handleLinkClick('#account-management')}>
                                        ACCOUNT MANAGEMENT
                                    </Link>
                                </li>
                                <li>
                                    <Link to="digital-marketing" className='nav-link' smooth={true}  duration={800}  onClick={() => handleLinkClick('#digital-marketing')}>
                                        SERVICES
                                    </Link>
                                </li>
                                <li>
                                    <div className="navbar-button-mobile">
                                        <Button variant="contained" onClick={handleClickWhatsapp}>
                                        CONTACT US
                                        </Button>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    )}
                </div>
            </div>
            <a
                href="https://wa.me/919939337638?text=Hello,%20*Ank Square Pvt. Ltd.*%0AI%20wish%20to%20connect%20with%20you." // Replace 'your-number' with the actual number in international format without "+" sign
                className="whatsapp-button"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={whatsAppIcon} alt="WhatsApp" />

            </a>
        </div>



    );
};

export default Navbar;
