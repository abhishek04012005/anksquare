import React from 'react'
import ServiceBox from '../ServiceBox/ServiceBox'
import Container from '../../../Container/Container';
import ServiceCard from '../ServiceCard/ServiceCard';
import AppDevelopmentSVG from '../../../assets/SVG/AppDevelopmentSVG/AppDevelopmentSVG';


import AndroidSVG from '../../../assets/app_development/android-logo.svg'
import IosSVG from '../../../assets/app_development/ios-logo.svg'
import NativeSVG from '../../../assets/app_development/native.svg'
import HybridSVG from '../../../assets/app_development/hybrid.svg'


const AppDevelopment = () => {
    const AppDevelopmentCardData = [
        {
            id: 1,
            title: 'Android App Development',
            imageLogo: AndroidSVG,
            list1: 'User Friendly',
            list2: 'Secure & Fast',
            list3: 'High Performance',
            serviceCardUrl: '#',

        },
        {
            id: 2,
            title: 'IOS App Development',
            imageLogo: IosSVG,
            list1: 'Secure & Fast',
            list2: 'Compatiable',
            list3: 'Seamless Experience',
            serviceCardUrl: '#',

        },
        {
            id: 3,
            title: 'Native App Development',
            imageLogo: NativeSVG,
            list1: 'Highly Customizable',
            list2: 'User Friendly',
            list3: 'Secure & Fast',
            serviceCardUrl: '#',

        },
        {
            id: 4,
            title: 'Hybrid App Development',
            imageLogo: HybridSVG,
            list1: 'Support Multiple Platform',
            list2: 'Build Once Run Forever',
            list3: 'Customizable',
            serviceCardUrl: '#',

        },
    ];
    return (
        <>
            <div id='app-development'>
                <ServiceBox
                    serviceTitle="app development"
                    photo={<AppDevelopmentSVG />}
                    para1="We provide end-to-end mobile app development services that turn your ideas into high-performance, user-friendly applications. From initial ideation and concept design to seamless integration, delivery, and ongoing support, we lead the entire app development process with expertise and precision. Whether you’re looking to create a consumer-oriented app or a transformative enterprise-class solution, our team has the skills and experience to bring your vision to life."
                    para2="We specialize in designing intuitive interfaces and developing robust features that meet your business goals and deliver exceptional user experiences. Our commitment doesn’t end at launch. We provide continuous support to ensure your app remains functional, scalable, and up-to-date, adapting to evolving market trends and user needs. Partner with us to create mobile apps that drive engagement, enhance productivity, and provide lasting value to your users. By leveraging the latest technologies and industry best practices, we ensure that your app stands out in a competitive market. Let us help you transform your vision into a reality that delights and engages your users."
                    reverse="true"
                />

                <Container>
                    <ServiceCard cardData={AppDevelopmentCardData} />
                </Container>
            </div>
        </>
    )
}

export default AppDevelopment;