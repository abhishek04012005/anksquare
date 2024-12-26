import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Grid from '@mui/material/Grid';
import MainHeading from '../Headings/MainHeading/MainHeading';
import Container from '../../Container/Container';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './Testimonials.css'; // Import the external CSS


import Client1 from '../../assets/testimonialImage/client1.png'
import Client2 from '../../assets/testimonialImage/client2.png'
import Client3 from '../../assets/testimonialImage/client3.png'
import Client4 from '../../assets/testimonialImage/client4.jpg'
import Client5 from '../../assets/testimonialImage/client5.png'
import Client6 from '../../assets/testimonialImage/client6.png'
import Client7 from '../../assets/testimonialImage/client7.png'

import AnimationFromBottom from '../../Animation/AnimationFromBottom/AnimationFromBottom';

const testimonialsDetails = [
    {
        id: 1, testimonial: 'This product has changed my life for the better!',
        name: 'Ajay K.',
        designation: 'Software Developer',
        company: '',
        image: Client1,
    },
    {
        id: 2,
        testimonial: 'Excellent service and friendly staff.',
        name: 'Anuradha K.',
        designation: 'Founder of',
        company: 'Ditvi Foundation',
        image: Client2,
    },
    {
        id: 3,
        testimonial: 'A must-have for any professional.', 
        name: 'Hemlata K.',
        designation: 'Web Designer',
        company: '',
        image: Client3,
    },
    {
        id: 4,
        testimonial: 'A must-have for any professional.',
        name: 'Abhishek',
        designation: 'Web Developer',
        company: '',
        image: Client4,
    },
    {
        id: 5,
        testimonial: 'Top-notch quality, support and amazing skills.',
        name: 'Kanchan K.',
        designation: '',
        company: 'Ditbi Foundation',
        image: Client5,
    },
    {
        id: 6,
        testimonial: 'Great experience from start to finish.',
        name: 'Indu K.',
        designation: '',
        company: 'Ditbi Foundation',
        image: Client6,
    },
    {
        id: 7,
        testimonial: 'Great experience from start to finish.',
        name: 'Vishwas',
        designation: 'Video Editor',
        company: '',
        image: Client7,
    },
];




const NextArrow = (props) => {
    const { className, onClick } = props;
    return (

        <ArrowForwardIcon className={`${className} custom-arrow`} onClick={onClick} />
    );
};

const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (

        <ArrowBackIcon className={`${className} custom-arrow`} onClick={onClick} />

    );
};





const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            { breakpoint: 1225, settings: { slidesToShow: 3, slidesToScroll: 1, }, },
            { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1, }, },
            { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1, }, },
        ],
    };

    return (
        <div className="testimonial">
            <Container>
                    <MainHeading title="What others say" />
                <AnimationFromBottom>
                    <Slider {...settings}>
                        {testimonialsDetails.map((testimonial) => (
                            <Grid
                                item
                                key={testimonial.id}
                                className="testimonial-card" // Apply external CSS class
                            >
                                <div className="testimonial-content">
                                    <p className="quote">“</p>
                                    <p className="testimonial-text">
                                        {testimonial.testimonial}
                                    </p>

                                    <div className="testimonial-info">
                                        <div className="testimonial-name">
                                            <p className="name">
                                                <span className="highlight">@</span>{testimonial.name}
                                            </p>
                                            <p className="designation">
                                                {testimonial.designation} {testimonial.company}
                                            </p>
                                        </div>
                                        <img
                                            src={testimonial.image}
                                            alt={`feedback_by-${testimonial.name}`}
                                            className="testimonial-image"
                                        />
                                    </div>
                                </div>
                            </Grid>
                        ))}
                    </Slider>
                </AnimationFromBottom>
            </Container>
        </div>
    );
};

export default Testimonials;
