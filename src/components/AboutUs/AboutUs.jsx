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
                                        I embrace new technologies to ensure I remain at the forefront of the industry. I’m adept at problem-solving and thrive in fast-paced environments, ensuring timely and efficient project completion. My collaborative nature allows me to work seamlessly with teams, bringing diverse ideas together to create exceptional outcomes. My experience extends to UX/UI design, ensuring that every project is not only visually appealing but also highly functional and user-friendly. My dedication to continuous learning.
                                    </p>
                                    <p className="paragraph-subheading">
                                        Additionally, I specialize in creating dynamic and captivating 3D animations for both brand and product promotion, utilizing Blender to develop immersive visual experiences that highlight the unique features and values of each project. I am currently available for freelance work and am eager to be hired for exciting projects that challenge my skills and ignite my passion. My goal is to always exceed client expectations and bring their visions to life. When I'm not coding, designing, or animating, you can find me exploring the latest tech trends and honing my craft. Let's work together to create something truly remarkable.
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
