import React from 'react'
import Grid from '@mui/material/Grid2';
import './ServiceCard.css'

const ServiceCard = ({cardData}) => {


    return (
        <>
            <div className="sevice-cards">
                <Grid container spacing={5} mt={10}

                >

                    {cardData.map((card) => (
                        <Grid  size={{ xs: 12, md: 3 }}>
                            <div className="service-grid-img-svg">
                                <div className='grid-img-logo'>
                                    {/* {card.svg} */}
                                    <img className='logo-container' src={card.imageLogo} alt="" />
                                </div>
                                <div><h3>{card.title}</h3></div>
                            </div>
                        </Grid>
                    ))}

                </Grid>
            </div>
        </>
    )
}

export default ServiceCard;