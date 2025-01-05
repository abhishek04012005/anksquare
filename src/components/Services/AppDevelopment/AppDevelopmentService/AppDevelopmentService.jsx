import React from 'react'
import AmazonEcommerceSVG from '../../../../assets/SVG/AmazonEcommerceSVG/AmazonEcommerceSVG';
import { useParams } from 'react-router-dom';
import ServiceRoutingBox from '../../ServiceRoutingBox/ServiceRoutingBox';

const servicesData = {
    'android': {
        serviceTitle: "android TRAINED E-COMMERCE SPECIALIST",
        photo: <AmazonEcommerceSVG />,
        para1: "We are a team of Amazon-trained eCommerce specialists, dedicated to helping businesses thrive on one of the world's largest online marketplaces. With extensive expertise in Amazon’s complex systems, we provide comprehensive services that cover every aspect of selling on Amazon, from product listings to advertising strategies. Our mission is to empower sellers to reach their full potential by enhancing product visibility, improving customer experiences, and increasing sales through personalized strategies. Whether you are just beginning your journey or aiming to elevate your Amazon store, we provide the essential knowledge and tools for your success.",
        para2: "Our services are designed to help you navigate the complexities of Amazon's marketplace. We understand the challenges sellers face and are here to provide support and guidance every step of the way. From optimizing your listings to managing your advertising campaigns, we offer solutions tailored to your needs."
    },
    'ios': {
        serviceTitle: "ios  TRAINED E-COMMERCE SPECIALIST",
        photo: <AmazonEcommerceSVG />,
        para1: "We are a team of Flipkart-trained eCommerce specialists, dedicated to helping businesses thrive on one of India's largest online marketplaces. With extensive expertise in Flipkart’s systems, we provide comprehensive services that cover every aspect of selling on Flipkart, from product listings to advertising strategies. Our mission is to empower sellers to reach their full potential by enhancing product visibility, improving customer experiences, and increasing sales through personalized strategies. Whether you are just beginning your journey or aiming to elevate your Flipkart store, we provide the essential knowledge and tools for your success.",
        para2: "Our services are designed to help you navigate the complexities of Flipkart's marketplace. We understand the challenges sellers face and are here to provide support and guidance every step of the way. From optimizing your listings to managing your advertising campaigns, we offer solutions tailored to your needs."
    },
    'native': {
        serviceTitle: "native  TRAINED E-COMMERCE SPECIALIST",
        photo: <AmazonEcommerceSVG />,
        para1: "We are a team of Flipkart-trained eCommerce specialists, dedicated to helping businesses thrive on one of India's largest online marketplaces. With extensive expertise in Flipkart’s systems, we provide comprehensive services that cover every aspect of selling on Flipkart, from product listings to advertising strategies. Our mission is to empower sellers to reach their full potential by enhancing product visibility, improving customer experiences, and increasing sales through personalized strategies. Whether you are just beginning your journey or aiming to elevate your Flipkart store, we provide the essential knowledge and tools for your success.",
        para2: "Our services are designed to help you navigate the complexities of Flipkart's marketplace. We understand the challenges sellers face and are here to provide support and guidance every step of the way. From optimizing your listings to managing your advertising campaigns, we offer solutions tailored to your needs."
    },
    'hybrid': {
        serviceTitle: "hybrid  TRAINED E-COMMERCE SPECIALIST",
        photo: <AmazonEcommerceSVG />,
        para1: "We are a team of Flipkart-trained eCommerce specialists, dedicated to helping businesses thrive on one of India's largest online marketplaces. With extensive expertise in Flipkart’s systems, we provide comprehensive services that cover every aspect of selling on Flipkart, from product listings to advertising strategies. Our mission is to empower sellers to reach their full potential by enhancing product visibility, improving customer experiences, and increasing sales through personalized strategies. Whether you are just beginning your journey or aiming to elevate your Flipkart store, we provide the essential knowledge and tools for your success.",
        para2: "Our services are designed to help you navigate the complexities of Flipkart's marketplace. We understand the challenges sellers face and are here to provide support and guidance every step of the way. From optimizing your listings to managing your advertising campaigns, we offer solutions tailored to your needs."
    },
}

const AppDevelopmentService = () => {
    const { serviceType } = useParams();
    const service = servicesData[serviceType] || servicesData['android']; // default to amazon-account-management if serviceType is not found
    return (
        <>
            <div className="social-media">
                <ServiceRoutingBox
                    serviceTitle={service.serviceTitle}
                    photo={service.photo}
                    para1={service.para1}
                    para2={service.para2}
                />
            </div>
        </>
    )
}


export default AppDevelopmentService