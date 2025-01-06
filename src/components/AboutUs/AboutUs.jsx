import React from 'react';
import './AboutUs.css';
import AboutSVG from '../../assets/SVG/AboutSVG/AboutSVG';
import ServiceBox from '../Services/ServiceBox/ServiceBox';

const AboutUs = () => {
    return (
        <>




            <div className="about" id="about">
                <ServiceBox
                    serviceTitle={"About us"}
                    photo={  <AboutSVG />}
                    para1={"Ank Square Pvt. Ltd. is a team of experts, dedicated to deliver tailored solutions designed to enhance your online presence, streamline operations, and boost customer engagement. Whether you are looking to optimize your eCommerce platform, increase visibility through strategic digital marketing campaigns, or develop a seamless and responsive website or app, we have the experience to help your business succeed."}
                    para2={"We are committed to empowering businesses with top-notch solutions that drive growth and maximize potential in the digital world. With years of experience in the industry, we specialize in providing comprehensive eCommerce account management services, digital marketing strategies, website development, and app development. We understand that each business is unique, which is why we take a personalized approach to every project. From the initial consultation to the final implementation, we work closely with you to ensure your goals are met and exceeded. Partner with us today, and let’s build a strong, sustainable digital future together."}
                />

            </div>

        </>
    );
};

export default AboutUs;
