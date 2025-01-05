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
                                        Ank Square Pvt. Ltd. is a team of experts is dedicated to deliver tailored solutions designed to enhance your online presence, streamline operations, and boost customer engagement. Whether you are looking to optimize your eCommerce platform, increase visibility through strategic digital marketing campaigns, or develop a seamless and responsive website or app, we have the experience to help your business succeed.
                                    </p>
                                    <p className="paragraph-subheading">
                                        We are committed to empowering businesses with top-notch solutions that drive growth and maximize potential in the digital world. With years of experience in the industry, we specialize in providing comprehensive eCommerce account management services, digital marketing strategies, website development, and app development.


                                        We understand that each business is unique, which is why we take a personalized approach to every project. From the initial consultation to the final implementation, we work closely with you to ensure your goals are met and exceeded.

                                        Partner with us today, and let’s build a strong, sustainable digital future together.

                                    </p>
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
