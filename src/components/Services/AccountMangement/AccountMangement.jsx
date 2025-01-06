import React from 'react'
import ServiceBox from '../ServiceBox/ServiceBox'
import Container from '../../../Container/Container'
import ServiceCard from '../ServiceCard/ServiceCard'
import AccountManagerSVG from '../../../assets/SVG/AccountManagerSVG/AccountManagerSVG'

// svg
import FlipkartSVG from '../../../assets/tech/flipkart-logo.svg'
import AmazonSVG from '../../../assets/tech/amazon-icon.svg'
import MeeshoIcon from '../../../assets/tech/meesho-logo.svg'
import JioMartSVG from '../../../assets/tech/jiomart-icon.svg'
import AjioSVG from '../../../assets/tech/ajio-logo.svg'
import MyntraSVG from '../../../assets/tech/myntra-logo.svg'
import BlinkItSVG from '../../../assets/tech/blinkitads-logo.svg'
import NykaaSVG from '../../../assets/tech/nykaa-logo.svg'




const AccountMangement = () => {

    const AccountMangementCardData = [
        {
            id: 1, title: 'Amazon',
            imageLogo: AmazonSVG,
            serviceCardUrl: '#',
            lists:["Amazon Account Management", "Amazon A+ Listing", "Amazon Store"],
        },
        {
            id: 2,
            title: 'Flipkart',
            imageLogo: FlipkartSVG,
            serviceCardUrl: '#',
            lists:["Flipkart Account Management", "Flipkart FBF Registration", "Flipkart Ads Management"],
        },
        {
            id: 3,
            title: 'Meesho',
            imageLogo: MeeshoIcon,
            serviceCardUrl: '#',
            lists:["Meesho Account Management", "Meesho Catalogue Service", "Meesho Ads Management"],
        },
        {
            id: 4,
            title: 'JioMart',
            imageLogo: JioMartSVG,
            serviceCardUrl: '#',
            lists:["JioMart Account Management", "JioMart Catalogue Service", "JioMart Product Promotion"],
        },
        {
            id: 5,
            title: 'Ajio',
            imageLogo: AjioSVG,
            serviceCardUrl: '#',
            lists:["Ajio Account Management", "Ajio Catalogue Service", "Ajio Onboarding Service"],
        },
        {
            id: 6,
            title: 'Myntra',
            imageLogo: MyntraSVG,
            serviceCardUrl: '#',
            lists:["Myntra Account Management", "Myntra Product Promotion", "Myntra Onboarding Service"],
        },
        {
            id: 7,
            title: 'Nykaa',
            imageLogo: NykaaSVG,
            serviceCardUrl: '#',
            lists:["Nykaa Account Management", "Nykaa Product Promotion", "Nykaa Onboarding Service"],
        },
        {
            id: 8,
            title: 'Blinkit',
            imageLogo: BlinkItSVG,
            serviceCardUrl: '#',
            lists:["Blinkit Account Management", "Blinkit Product Promotion", "Blinkit Onboarding Service"],
        },


    ];
    return (
        <>
            <div className="account-management" id='account-management'>

                <ServiceBox
                    serviceTitle="account management"
                    photo={<AccountManagerSVG />}
                    para1="We are specialists in accelerating your sales on leading eCommerce platforms such as Amazon, Flipkart, Meesho, and other major marketplaces. With a true partnership approach, we work closely with your business to help you achieve exceptional growth in product sales while ensuring you remain in complete control of your brand and pricing—ultimately driving greater profits."
                    para2="Our expert team conducts comprehensive reviews of your accounts, identifying key areas for optimization and guiding you through every step of the process. Whether you're looking to enhance your visibility, streamline operations, or improve your product listings, we are here to provide the insights and strategies that lead to tangible results. With years of experience and a proven track record, your trusted partner for navigating the complexities of online marketplaces and unlocking your full sales potential. Let us take your business to the next level with tailored solutions that deliver measurable success."
                    reverse="true"
                />
                <Container>
                    <ServiceCard cardData={AccountMangementCardData} />
                </Container>
            </div>
        </>
    )
}

export default AccountMangement