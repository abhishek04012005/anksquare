import React from 'react'
import ServiceBox from '../ServiceBox/ServiceBox'
import Container from '../../../Container/Container';
import ServiceCard from '../ServiceCard/ServiceCard';
import AppDevelopmentSVG from '../../../assets/SVG/AppDevelopmentSVG/AppDevelopmentSVG';


import FlipkartSVG from '../../../assets/tech/flipkart-logo.svg'

const AppDevelopment = () => {
    const AppDevelopmentCardData = [
        { id: 1, title: 'Account Manger', imageLogo: FlipkartSVG },
        { id: 2, title: 'Social Media', imageLogo: FlipkartSVG },
        { id: 3, title: 'Web Development', imageLogo: FlipkartSVG },
        { id: 4, title: 'App Development', imageLogo: FlipkartSVG },
    ];
    return (
        <>
            <ServiceBox
                serviceTitle="app development"
                photo={<AppDevelopmentSVG />}
                para="I embrace new technologies to ensure I remain at the forefront of the industry. I’m adept at problem-solving and thrive in fast-paced environments, ensuring timely and efficient project completion. My collaborative nature allows me to work seamlessly with teams, bringing diverse ideas together to create exceptional outcomes. My experience extends to UX/UI design, ensuring that every project is not only visually appealing but also highly functional and user-friendly. My dedication to continuous learning.

Additionally, I specialize in creating dynamic and captivating 3D animations for both brand and product promotion, utilizing Blender to develop immersive visual experiences that highlight the unique features and values of each project. I am currently available for freelance work and am eager to be hired for exciting projects that challenge my skills and ignite my passion."
                reverse="true"
            />

            <Container>
                <ServiceCard cardData={AppDevelopmentCardData} />
            </Container>

        </>
    )
}

export default AppDevelopment;