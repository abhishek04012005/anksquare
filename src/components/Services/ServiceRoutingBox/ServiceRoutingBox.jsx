import React from 'react'
import Container from '../../../Container/Container'
import MainHeading from '../../Headings/MainHeading/MainHeading'
import AnimationFromBottom from '../../../Animation/AnimationFromBottom/AnimationFromBottom'
import Grid from '@mui/material/Grid2';
import './ServiceRoutingBox.css'


const ServiceRoutingBox = ({ photo, para1, para2, serviceTitle }) => {
    return (
        <>
            <div className="service-router-box">
                <Container>
                    <MainHeading title={serviceTitle} />
                    <AnimationFromBottom>

                        <div className="service-router-box-inner">



                            <Grid container spacing={{ xs: 5, md: 3, lg: 20 }}>


                                <Grid
                                    size={{ xs: 12, md: 5 }}

                                >


                                    <div className="service-router-grid-img-svg">
                                        {photo}
                                    </div>

                                </Grid>


                                <Grid
                                    size={{ xs: 12, md: 7 }}

                                >
                                    <div className="service-router-text">
                                        <p>{para1}</p>
                                        <p>{para2}</p>
                                    </div>


                                </Grid>
                            </Grid>
                        </div>
                    </AnimationFromBottom >
                </Container >
            </div >
        </>
    )
}

export default ServiceRoutingBox