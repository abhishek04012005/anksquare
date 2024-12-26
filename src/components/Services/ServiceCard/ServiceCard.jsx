import React from 'react'
import Grid from '@mui/material/Grid2';
import './ServiceCard.css'
import AnimationFromBottom from '../../../Animation/AnimationFromBottom/AnimationFromBottom';


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
                                        {/* {card.svg} */}
                                        <img className='logo-container' src={card.imageLogo} alt="" />
                                    </div>
                                    <div><h3>{card.title}</h3></div>

                                    <div className="service-card-list">
                                        <ul>
                                            <li>{card.list1}</li>
                                            <li>{card.list2}</li>
                                            <li>{card.list3}</li>
                                        </ul>
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