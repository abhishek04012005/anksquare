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
            list1: 'Amazon Account Management',
            list2: 'Amazon A+ Listing',
            list3: 'Amazon Store',
            serviceCardUrl: '#',
        },
        {
            id: 2,
            title: 'Flipkart',
            imageLogo: FlipkartSVG,
            list1: 'Flipkart Account Management',
            list2: 'Flipkart FBF Registration',
            list3: 'Flipkart Ads Management',
            serviceCardUrl: '#',
        },
        {
            id: 3,
            title: 'Meesho',
            imageLogo: MeeshoIcon,
            list1: 'Meesho Account Management',
            list2: 'Meesho Catalogue Service',
            list3: 'Meesho Ads Management',
            serviceCardUrl: '#',
        },
        {
            id: 4,
            title: 'JioMart',
            imageLogo: JioMartSVG,
            list1: 'JioMart Account Management',
            list2: 'JioMart Catalogue Service',
            list3: 'JioMart Product Promotion',
            serviceCardUrl: '#',
        },
        {
            id: 5,
            title: 'Ajio',
            imageLogo: AjioSVG,
            list1: 'Ajio Account Management',
            list2: 'Ajio Catalogue Service',
            list3: 'Ajio Onboarding Service',
            serviceCardUrl: '#',
        },
        {
            id: 6,
            title: 'Myntra',
            imageLogo: MyntraSVG,
            list1: 'Myntra Account Management',
            list2: 'Myntra Product Promotion',
            list3: 'Myntra Onboarding Service',
            serviceCardUrl: '#',
        },
        {
            id: 7,
            title: 'Nykaa',
            imageLogo: NykaaSVG,
            list1: 'Nykaa Account Management',
            list2: 'Nykaa Product Promotion',
            list3: 'Nykaa Onboarding Service',
            serviceCardUrl: '#',
        },
        {
            id: 8,
            title: 'Blinkit',
            imageLogo: BlinkItSVG,
            list1: 'Blinkit Account Management',
            list2: 'Blinkit Product Promotion',
            list3: 'Blinkit Onboarding Service',
            serviceCardUrl: '#',
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