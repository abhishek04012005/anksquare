import React from 'react'
import Grid from '@mui/material/Grid2';
import './Hero.css'
import HeroSVG from '../../assets/SVG/HeroSVG/HeroSVG'
import Container from '../../Container/Container'
import { Button } from '@mui/material';
import HeroCards from '../HeroCards/HeroCards';
import SocialMediaSVG from '../../assets/SVG/SocialMediaSVG/SocialMediaSVG';
import WebDevelopmentSVG from '../../assets/SVG/WebDevelopmentSVG/WebDevelopmentSVG';
import AppDevelopmentSVG from '../../assets/SVG/AppDevelopmentSVG/AppDevelopmentSVG';
import AccountManagerSVG from '../../assets/SVG/AccountManagerSVG/AccountManagerSVG';


const Hero = () => {


    const handleClickCall = () => { window.open('tel:+919939337638', '_blank'); };

    const HeroCardData = [
        { id: 1, title: 'Account Management', svg: <AccountManagerSVG /> },
        { id: 2, title: 'Social Media', svg: <SocialMediaSVG /> },
        { id: 3, title: 'Website Development', svg: <WebDevelopmentSVG /> },
        { id: 4, title: 'App Development', svg: <AppDevelopmentSVG /> },

    ];
    return (
        <>
            <div className="hero">
                <Container>

                    <Grid
                        container
                        spacing={{ xs: 5, md: 3, lg: 10 }}
                    >

                        <Grid size={{ xs: 12, md: 6 }}>
                            <div className="hero-container">
                                <div className="hero-text">

                                
                                        <h1 className='hero-heading-text'>

                                            Empowering Your Digital Growth... 
                                            
                                            

                                        </h1>

                                        <h2>Reach More with Seamless
                                            Digital Experience.</h2>


                                    <div className="btn hero-btn">

                                        <Button
                                            variant="contained"
                                            onClick={handleClickCall}

                                        >
                                           call to our expert
                                        </Button>

                                    </div>



                                </div>

                            </div>
                        </Grid>

                        <Grid size={{ xs: 12, md: 6 }}>
                            <HeroSVG />
                        </Grid>

                    </Grid>
                    <HeroCards cardData={HeroCardData} />
                </Container>
            </div>
        </>
    )
}

export default Hero