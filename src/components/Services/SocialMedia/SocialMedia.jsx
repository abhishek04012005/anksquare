import React from 'react'
import ServiceBox from '../ServiceBox/ServiceBox'
import Container from '../../../Container/Container';
import ServiceCard from '../ServiceCard/ServiceCard';
import SocialMediaSVG from '../../../assets/SVG/SocialMediaSVG/SocialMediaSVG';




import GoogleAdsSVG from '../../../assets/tech/google-ads.svg'
import InstagramAdsSVG from '../../../assets/tech/instagramads-logo.svg'
import FacebookAdsSVG from '../../../assets/tech/facebookads-logo.svg'
import YoutubeAdsSVG from '../../../assets/tech/youtubeads-logo.svg'

const SocialMedia = () => {
    const SocialMediaCardData = [
        {
            id: 1,
            title: 'Google Ads',
            imageLogo: GoogleAdsSVG,
            serviceCardUrl: '#',
            lists: ["Create Google Ads", "Optimize Google Ads", "Run Campaign"],
        },
        {
            id: 2,
            title: 'Instagram Ads',
            imageLogo: InstagramAdsSVG,
            serviceCardUrl: '#',
            lists: ["Create Instagram Ads", "Optimize Instagram Ads", "Product & Service Promotion"],
        },
        {
            id: 3,
            title: 'Facebook Ads',
            imageLogo: FacebookAdsSVG,
            serviceCardUrl: '#',
            lists: ["Create Facebook Ads", "Optimize Facebook Ads", "Product & Service Promotion"],
        },
        {
            id: 4,
            title: 'Youtube Ads',
            imageLogo: YoutubeAdsSVG,
            serviceCardUrl: '#',
            lists: ["Create Youtube Ads", "Optimize Youtube Ads", "Product & Service Promotion"],
        },
    ];
    return (
        <>
            <div id='digital-marketing'>
                <ServiceBox
                    serviceTitle="digital marketing"
                    photo={<SocialMediaSVG />}
                    para1="We specialize in helping businesses elevate their online presence and engage their audience through expert social media marketing services. In today's fast-paced digital world, building a strong social media presence is crucial to staying competitive, and our team is dedicated to crafting strategies that drive meaningful engagement and brand awareness. We take a personalized approach to each campaign, carefully analyzing your target audience, brand goals, and market trends."
                    para2="Our strategies are designed to increase visibility, foster customer relationships, and ultimately boost your bottom line. Whether you’re looking to grow your followers, enhance your brand’s voice, or run high-impact ad campaigns, we have the expertise to deliver exceptional results. Let us help you connect with your audience in a more authentic way, turning your social media platforms into powerful tools for business growth."
                />

                <Container>
                    <ServiceCard cardData={SocialMediaCardData} />
                </Container>
            </div>
        </>
    )
}

export default SocialMedia;