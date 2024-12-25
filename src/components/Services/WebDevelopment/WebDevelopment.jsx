import React from 'react'
import ServiceBox from '../ServiceBox/ServiceBox'
import Container from '../../../Container/Container';
import ServiceCard from '../ServiceCard/ServiceCard';
import WebDevelopmentSVG from '../../../assets/SVG/WebDevelopmentSVG/WebDevelopmentSVG';



import FlipkartSVG from '../../../assets/tech/flipkart-logo.svg'

const WebDevelopment = () => {
    const WebDevelopmentCardData = [
        { id: 1, title: 'Business Website', imageLogo: FlipkartSVG },
        { id: 2, title: 'Ecommerce Website', imageLogo: FlipkartSVG },
        { id: 3, title: 'Real Estate Website', imageLogo: FlipkartSVG },
        { id: 4, title: 'Education Website', imageLogo: FlipkartSVG },
    ];
    return (
        <>
            <ServiceBox
                serviceTitle="website development"
                photo={<WebDevelopmentSVG />}
                para1="Website development is the cornerstone of your digital presence, providing the foundation for your online identity and customer interactions. Our website development services are designed to create visually stunning and highly functional websites that reflect your brand's unique personality. We start by understanding your business goals and target audience, ensuring the design and functionality align perfectly with your objectives."
                para2="Our team specializes in developing responsive websites that deliver a seamless user experience across all devices, from desktops to mobile phones. This ensures that your site is accessible and easy to navigate, regardless of how your visitors access it. We prioritize user-centric design, focusing on intuitive navigation, fast loading times, and engaging content to keep users on your site longer and encourage conversions."
            // reverse="true"
            />

            <Container>
                <ServiceCard cardData={WebDevelopmentCardData} />
            </Container>

        </>
    )
}

export default WebDevelopment;