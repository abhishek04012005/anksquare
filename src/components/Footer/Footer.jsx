import React, { useEffect } from "react";
import Grid from '@mui/material/Grid';
import { Link, useLocation } from 'react-router-dom';
import { EmailOutlined, Facebook, Instagram, LinkedIn, WhatsApp, X, YouTube } from '@mui/icons-material';
import Container from "../../Container/Container";
import { Link as ScrollLink } from 'react-scroll';
import './Footer.css'
import Logo from '../../logo.svg';

const Footer = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <div className="footer">
            <Container>
                <div className="footer-item">
                    <Grid container spacing={{ xs: 0, md: 2, lg: 2 }}>
                        <Grid item xs={12} md={3}>
                            <div className="footer-links">
                                <Link className="router-link" to='/'>Home</Link>
                                <Link className="router-link" to='/admin'>Admin</Link>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <div className="footer-links">
                                <ScrollLink
                                    className='footer-link-heading'
                                    to="account-management"
                                    smooth={true}
                                    duration={800}
                                >
                                    Account Management
                                </ScrollLink>
                                <div className="footer-link-items">
                                    <p className='footer-link-item'>Amazon</p>
                                    <p className='footer-link-item'>Flipkart</p>
                                    <p className='footer-link-item'>Meesho</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <div className="footer-links">
                                <ScrollLink
                                    className='footer-link-heading-active'
                                    to="digital-marketing"
                                    smooth={true}
                                    duration={800}
                                >
                                    Services
                                </ScrollLink>
                                <div className="footer-link-items-active">
                                    <ScrollLink
                                        className='footer-link-item-active'
                                        to="digital-marketing"
                                        smooth={true}
                                        duration={800}
                                    >
                                        Digital Marketing
                                    </ScrollLink>
                                    <ScrollLink
                                        className='footer-link-item-active'
                                        to="web-development"
                                        smooth={true}
                                        duration={800}
                                    >
                                        Website Development
                                    </ScrollLink>
                                    <ScrollLink
                                        className='footer-link-item-active'
                                        to="app-development"
                                        smooth={true}
                                        duration={800}
                                    >
                                        App Development
                                    </ScrollLink>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <div className="footer-links">
                                <a href="/"><img src={Logo} alt="AnkSquare Logo" /></a>
                                <p style={{ textAlign: 'center', color: 'white', marginTop: -10 }}>
                                    <a href="https://www.anksquare.com" target="_blank" rel="noreferrer" style={{ color: 'white' }}>
                                        www.AnkSquare.com
                                    </a>
                                </p>
                            </div>
                        </Grid>
                    </Grid>
                    <div className="footer-social-links">
                        <a
                            href="https://wa.me/919263767441?text=Hello,%20*Abhishek*%0AI%20wish%20to%20connect%20with%20you."
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <WhatsApp />
                        </a>
                        <a href="mailto:info@anksquare.com" target="_blank" rel="noopener noreferrer">
                            <EmailOutlined />
                        </a>
                        <a href="https://www.instagram.com/anksquare?igsh=MTMwZG9ybnQzOW44aQ==" target="_blank" rel="noopener noreferrer">
                            <Instagram />
                        </a>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <Facebook />
                        </a>
                        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                            <YouTube />
                        </a>
                        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                            <LinkedIn />
                        </a>
                        <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
                            <X />
                        </a>
                    </div>
                    <p style={{ textAlign: 'center', color: 'white' }}>
                        Copyright © {new Date().getFullYear()} Ank Square Pvt. Ltd.
                    </p>
                    <p style={{ textAlign: 'center', color: 'white' }}>
                        Powered by:- <a href="https://www.abhishekchoudhary.co.in" target="_blank" rel="noreferrer" style={{ color: 'white' }}>
                            www.AbhishekChoudhary.co.in
                        </a>
                    </p>
                </div>
            </Container>
        </div>
    );
};

export default Footer;
