import React from 'react'
import ServiceBox from '../ServiceBox/ServiceBox'
import Container from '../../../Container/Container';
import ServiceCard from '../ServiceCard/ServiceCard';
import AppDevelopmentSVG from '../../../assets/SVG/AppDevelopmentSVG/AppDevelopmentSVG';


import FlipkartSVG from '../../../assets/tech/flipkart-logo.svg'
import AndroidSVG from '../../../assets/app_development/android-logo.svg'
import IosSVG from '../../../assets/app_development/ios-logo.svg'


const AppDevelopment = () => {
    const AppDevelopmentCardData = [
        {
            id: 1,
            title: 'Android App Development',
            imageLogo: AndroidSVG,
            list1: 'Nykaa Account Management',
            list2: 'Amazon',
            list3: 'Amazon',
        },
        {
            id: 2,
            title: 'IOS App Development',
            imageLogo: IosSVG,
            list1: 'Nykaa Account Management',
            list2: 'Amazon',
            list3: 'Amazon',
        },
        {
            id: 3,
            title: 'Native App Development',
            imageLogo: FlipkartSVG,
            list1: 'Nykaa Account Management',
            list2: 'Amazon',
            list3: 'Amazon',
        },
        {
            id: 4,
            title: 'Hybrid App Development',
            imageLogo: FlipkartSVG,
            list1: 'Nykaa Account Management',
            list2: 'Amazon',
            list3: 'Amazon',
        },
    ];
    return (
        <>
            <ServiceBox
                serviceTitle="app development"
                photo={<AppDevelopmentSVG />}
                para1="App development is essential for businesses looking to engage customers and streamline operations through custom solutions. Our app development services are tailored to create innovative and user-friendly applications that meet your specific needs. We start with a thorough understanding of your business objectives and target audience, ensuring the app’s design and functionality align perfectly with your goals."
                para2="We specialize in developing cross-platform applications that provide a consistent user experience across both iOS and Android devices. This ensures that your app reaches a broader audience and delivers a seamless experience regardless of the device used. Our focus on user-centric design means we prioritize intuitive navigation, attractive interfaces, and fast performance to enhance user engagement and satisfaction. Security is a key aspect of our development process. We implement robust security measures to protect your app and user data from potential threats
                ."
                reverse="true"
            />

            <Container>
                <ServiceCard cardData={AppDevelopmentCardData} />
            </Container>

        </>
    )
}

export default AppDevelopment;