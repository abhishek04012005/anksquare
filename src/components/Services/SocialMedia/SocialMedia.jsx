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
            list1: 'Nykaa Account Management',
            list2: 'Amazon',
            list3: 'Amazon',
        },
        {
            id: 2,
            title: 'Instagram Ads',
            imageLogo: InstagramAdsSVG,
            list1: 'Nykaa Account Management',
            list2: 'Amazon',
            list3: 'Amazon',
        },
        {
            id: 3,
            title: 'Facebook Ads',
            imageLogo: FacebookAdsSVG,
            list1: 'Nykaa Account Management',
            list2: 'Amazon',
            list3: 'Amazon',
        },
        {
            id: 4,
            title: 'Youtube Ads',
            imageLogo: YoutubeAdsSVG,
            list1: 'Nykaa Account Management',
            list2: 'Amazon',
            list3: 'Amazon',
        },
    ];
    return (
        <>
            <ServiceBox
                serviceTitle="digital marketing"
                photo={<SocialMediaSVG />} //Change to digital marketing ads
                para1="Digital marketing, especially through advertisements, is pivotal in shaping the success of your business online. Our comprehensive digital marketing services are designed to place your brand in front of your target audience effectively. By leveraging various platforms such as Google Ads, social media, and display networks, we ensure your ads reach the right people at the right time. Our team crafts compelling ad copies that resonate with your audience, driving clicks and conversions."
                para2="We perform in-depth keyword research to identify the terms your potential customers are searching for, allowing us to tailor your ads for maximum visibility and relevance. Additionally, our services include designing eye-catching visuals and engaging content that capture attention and encourage interaction. We continuously monitor and optimize your ad campaigns, adjusting bids, keywords, and targeting to improve performance and ROI."
            // reverse="true"
            // para={SocialMediaCardData[0].title}
            />

            <Container>
                <ServiceCard cardData={SocialMediaCardData} />
            </Container>

        </>
    )
}

export default SocialMedia;