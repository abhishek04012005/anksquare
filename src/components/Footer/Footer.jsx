import React, { useEffect } from "react";
import Grid from '@mui/material/Grid2';
import { Link, useLocation } from 'react-router-dom';
import { EmailOutlined, Facebook, Instagram, LinkedIn, WhatsApp, X, YouTube } from '@mui/icons-material';
import Container from "../../Container/Container";
import './Footer.css'
import Logo from '../../logo.svg'

const Footer = () => {

    const location = useLocation();

    useEffect(() => {
        // Scroll to top whenever the route changes
        window.scrollTo(0, 0);
    }, [location]);
    return (
        <>
            <div className="footer">
                <Container>
                    <div className="footer-item">
                        <Grid container
                            spacing={{ xs: 0, md: 2, lg: 2 }}
                        >

                            <Grid

                                size={{ xs: 12, md: 3 }}
                            >

                                <div className="footer-links">
                                    <Link className="router-link" to='/anksquare'>Home</Link>
                                </div>

                            </Grid>

                            <Grid

                                size={{ xs: 12, md: 3 }}
                            >

                                <div className="footer-links">
                                    <Link className='footer-link-heading'> <strong>Account Management</strong></Link>
                                    <Link className="router-link" to='/'>Amazon Account Management</Link>
                                    <Link className="router-link" to='/'>Flipkart Account Management</Link>
                                    <Link className="router-link" to='/'>Etsy Account Management</Link>
                                </div>

                            </Grid>

                            <Grid

                                size={{ xs: 12, md: 3 }}
                            >

                                <div className="footer-links">
                                    <Link className='footer-link-heading'> <strong>Services</strong></Link>
                                    <Link className="router-link" to='/anksquare/social-media'>Social Media</Link>
                                    <Link className="router-link" to='/anksquare/web-development'>Web Development</Link>
                                    <Link className="router-link" to='/anksquare/app-development'>App Development</Link>
                                </div>

                            </Grid>

                            <Grid

                                size={{ xs: 12, md: 3 }}
                            >

                                <div className="footer-links">
                                    <a href="/"><img src={Logo} alt="" /></a>
                                    <Link className="router-link" to='/'>CIN:- U72900MH2021PTC363593</Link>
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

                            <a
                                href="mailto:theabhishekchoudhary0401@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            ><EmailOutlined /></a>

                            <a
                                href="https://www.instagram.com/theabhishekchoudhary0401/"
                                target="_blank"
                                rel="noopener noreferrer"
                            ><Instagram /></a>

                            <a
                                href="https://www.facebook.com/profile.php?viewas=100000686899395&id=61568533385928"
                                target="_blank"
                                rel="noopener noreferrer"
                            ><Facebook /></a>

                            <a
                                href="https://www.youtube.com/@theabhishekchoudhary0401"
                                target="_blank"
                                rel="noopener noreferrer"
                            ><YouTube /></a>

                            <a
                                href="https://www.linkedin.com/in/abhishek-choudhary-80b753232/"
                                target="_blank"
                                rel="noopener noreferrer"
                            ><LinkedIn /></a>


                            <a
                                href="https://x.com/i/flow/login?redirect_after_login=%2F02mr_abhishek"
                                target="_blank"
                                rel="noopener noreferrer"
                            ><X /></a>
                        </div>


                        <p style={{ textAlign: 'center', color: 'white' }}>Copyright © {new Date().getFullYear()} <a href="/" style={{ color: 'white' }}>Ank Square Pvt. Ltd.</a>  </p>
                        <p style={{ textAlign: 'center', color: 'white' }}>Powered by <a href="https://www.abhishekchoudhary.co.in" target="_blank" rel="noreferrer" style={{ color: 'white' }}>www.AbhishekChoudhary.co.in</a>  </p>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Footer