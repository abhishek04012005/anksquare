import React from 'react';
import './ServiceBox.css'
import Grid from '@mui/material/Grid2';
import Container from '../../../Container/Container';
import MainHeading from '../../Headings/MainHeading/MainHeading';
import AnimationFromBottom from '../../../Animation/AnimationFromBottom/AnimationFromBottom';
// import AnimationFromLeft from '../../../Animation/AnimationFromLeft/AnimationFromLeft';
// import AnimationFromRight from '../../../Animation/AnimationFromRight/AnimationFromRight';


const ServiceBox = ({ photo, para1, para2, serviceTitle, reverse = false }) => {
    return (
        <div className="service-box">
            <Container>


                <MainHeading title={serviceTitle} />

                <AnimationFromBottom>

                <div className="service-box-inner">



                    <Grid container spacing={{ xs: 5, md: 3, lg: 20 }}>


                        <Grid
                            size={{ xs: 12, md: 5 }}
                            order={{ xs: 1, md: reverse ? 2 : 1 }}
                        >
                            {/* <AnimationFromLeft> */}

                                <div className="service-grid-img-svg">
                                    {photo}
                                </div>

                            {/* </AnimationFromLeft> */}
                        </Grid>



                        <Grid
                            size={{ xs: 12, md: 7 }}
                            order={{ xs: 2, md: reverse ? 1 : 2 }}
                        >
                            {/* <AnimationFromRight> */}

                                <div className="service-text">
                                    <p>{para1}</p>
                                    <p>{para2}</p>
                                </div>

                            {/* </AnimationFromRight> */}
                        </Grid>
                    </Grid>
                </div>

                </AnimationFromBottom>
            </Container>


        </div>
    );
};

export default ServiceBox;
