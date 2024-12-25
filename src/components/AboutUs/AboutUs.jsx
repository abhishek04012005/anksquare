import React from 'react';
import MainHeading from '../Headings/MainHeading/MainHeading';
import Container from '../../Container/Container';
import Grid from '@mui/material/Grid2';
import './AboutUs.css';
import AboutSVG from '../../assets/SVG/AboutSVG/AboutSVG';
import AnimationFromBottom from '../../Animation/AnimationFromBottom/AnimationFromBottom';

const AboutUs = () => {
    return (
        <>
            <div className="about" id="about">
                <Container>
                    <MainHeading title="about us" />
                    <AnimationFromBottom>
                    <Grid
                        container
                        spacing={{ xs: 5, md: 3, lg: 20 }}
                    >
                        {/* First Grid - Animates from Left */}
                        <Grid size={{ xs: 12, md: 5 }}>
                           
                                <div className="grid-img-svg">
                                    <AboutSVG />
                                </div>
                           
                        </Grid>

                        {/* Second Grid - Animates from Right */}
                        <Grid size={{ xs: 12, md: 7 }}>
                         
                                <div className="main-work-box">
                                    <p className="paragraph-subheading">
                                    We provide a comprehensive suite of services designed to elevate your business in the digital realm. Our expertise in e-commerce account management ensures that your online store operates smoothly, offering enhanced customer experiences and optimized product listings for increased visibility and sales. Through our digital marketing services, we craft impactful campaigns and leverage social media to expand your reach while utilizing SEO techniques to drive organic traffic to your site.                                    </p>
                                    <p className="paragraph-subheading">
                                    In the realm of website development, we create stunning, responsive websites that guarantee seamless user experiences across all devices and implement robust security measures to protect your data. Our app development services focus on designing custom applications tailored to meet your specific needs, integrating features that boost user engagement, and maintaining apps to ensure they perform optimally. By utilizing our diverse offerings, businesses can effectively manage their online presence, drive digital growth, and achieve their strategic objectives.                                    </p>
                                </div>
                            
                        </Grid>
                    </Grid>
                    </AnimationFromBottom>
                </Container>
            </div>
        </>
    );
};

export default AboutUs;
