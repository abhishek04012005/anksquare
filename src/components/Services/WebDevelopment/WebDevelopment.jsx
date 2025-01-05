import React from 'react'
import ServiceBox from '../ServiceBox/ServiceBox'
import Container from '../../../Container/Container';
import ServiceCard from '../ServiceCard/ServiceCard';
import WebDevelopmentSVG from '../../../assets/SVG/WebDevelopmentSVG/WebDevelopmentSVG';
import BusinessWebsiteSVG from '../../../assets/SVG/BusinessWebsiteSVG/BusinessWebsiteSVG';
import RealEstateSVG from '../../../assets/SVG/RealEstateSVG/RealEstateSVG';
import EcommerceSVG from '../../../assets/SVG/EcommerceSVG/EcommerceSVG';
import EducationSVG from '../../../assets/SVG/EducationSVG/EducationSVG';

const WebDevelopment = () => {
    const WebDevelopmentCardData = [
        {
            id: 1,
            title: 'Business Website',
            isComponent: true,
            svgImage: <BusinessWebsiteSVG />,
            list1: 'SEO Optimized',
            list2: 'Responsive',
            list3: 'User Friendly',
            serviceCardUrl: '#',
        },
        {
            id: 2,
            title: 'Ecommerce Website',
            isComponent: true,
            svgImage: <EcommerceSVG />,
            list1: 'SEO Optimized',
            list2: 'Product Listing',
            list3: 'Integration With Other Application',
            serviceCardUrl: '#',
        },
        {
            id: 3,
            title: 'Real Estate Website',
            isComponent: true,
            svgImage: <RealEstateSVG />,
            list1: 'SEO Optimized',
            list2: 'Lead Generation',
            list3: 'Digital Promotion',
            serviceCardUrl: '#',
        },
        {
            id: 4,
            title: 'Education Website',
            isComponent: true,
            svgImage: <EducationSVG />,
            list1: 'SEO Optimized',
            list2: 'Online Payment',
            list3: 'Student, Employee and Other Modules',
            serviceCardUrl: '#',
        },
    ];
    return (
        <>
            <div id='web-development'>
                <ServiceBox
                    serviceTitle="website development"
                    photo={<WebDevelopmentSVG />}
                    para1="We specialize in crafting functional, user-friendly, and visually captivating digital experiences through our expert web development services. Recognizing that a well-designed website is pivotal to your online presence, our team is committed to bringing your vision to life with innovative solutions aligned with your business objectives. From responsive web design to seamless functionality, we ensure your website not only looks fantastic but also provides an intuitive user experience."
                    para2="Whether you're aiming to build a new website or optimize an existing one, our tailored solutions are both technically advanced and user-centric, ensuring the best possible experience for your visitors. With our web development expertise, expect a website that meets the demands of today’s digital world and sets the stage for long-term growth and success. Our innovative strategies and cutting-edge technologies guarantee a robust, secure, and responsive site. We're dedicated to helping your brand thrive online, offering ongoing support and updates to keep your digital presence at the forefront. "
                />

                <Container>
                    <ServiceCard cardData={WebDevelopmentCardData} />
                </Container>
            </div>
        </>
    )
}

export default WebDevelopment;