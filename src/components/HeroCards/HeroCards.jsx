import React from 'react'
import Grid from '@mui/material/Grid2';
import './HeroCards.css'

const HeroCards = ({cardData}) => {


    return (
        <>
            <div className="hero-cards">
                <Grid container spacing={5} mt={10}

                >

                    {cardData.map((card) => (
                        <Grid  size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                            <div className="grid-img-svg">
                                <div style={{ borderBottom: '3px solid var(--Green)' }}>
                                    {card.svg}
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

export default HeroCards