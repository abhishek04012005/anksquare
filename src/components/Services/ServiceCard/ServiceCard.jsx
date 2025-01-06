import React from 'react'
import Grid from '@mui/material/Grid2';
import './ServiceCard.css'
import AnimationFromBottom from '../../../Animation/AnimationFromBottom/AnimationFromBottom';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';



const ServiceCard = ({ cardData }) => {


    return (
        <>


            <div className="sevice-cards">

                <Grid container spacing={5} mt={10}

                >

                    {cardData.map((card) => (
                        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                            <AnimationFromBottom>
                                <div className="service-grid-img-svg">
                                    <div className='grid-img-logo'>
                                        {card.isComponent ? <div className="servicecard-svgImage">
                                            {card.svgImage}
                                        </div> :
                                            <img className='logo-container' src={card.imageLogo} alt="" />}

                                    </div>
                                    <div><h3>{card.title}</h3></div>

                                    <div className="service-card-list">
                                        <ul>

                                            {card.lists && card.lists.map((list, index) => (<li key={index}>{list}</li>))}

                                        </ul>





                                    </div>

                                    <div className="service-card-btn btn">

                                        {card.serviceCardUrl === '#' ? <Button variant="contained" fullWidth>Know More</Button> :
                                            <Link to={card.serviceCardUrl}>
                                                <Button variant="contained" fullWidth>Know More</Button>
                                            </Link>
                                        }

                                    </div>
                                </div>
                            </AnimationFromBottom>
                        </Grid>
                    ))}

                </Grid>

            </div>

        </>
    )
}

export default ServiceCard;