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
            list2: 'Amazon A+ Design',
            list3: 'Amazon',
        },
        {
            id: 2,
            title: 'Flipkart',
            imageLogo: FlipkartSVG,
            list1: 'Flipkart Account Management',
            list2: 'Flipkart FBF Registration',
            list3: 'Amazon',
        },
        {
            id: 3,
            title: 'Meesho',
            imageLogo: MeeshoIcon,
            list1: 'Meesho Account Management',
            list2: 'Meesho Product Promotions',
            list3: 'Amazon',
        },
        {
            id: 4,
            title: 'JioMart',
            imageLogo: JioMartSVG,
            list1: 'JioMart Account Management',
            list2: 'JioMart Product Promotions',
            list3: 'Amazon',
        },
        {
            id: 5,
            title: 'Ajio',
            imageLogo: AjioSVG,
            list1: 'Ajio Account Management',
            list2: 'Amazon',
            list3: 'Amazon',
        },
        {
            id: 6,
            title: 'Myntra',
            imageLogo: MyntraSVG,
            list1: 'Myntra Account Management',
            list2: 'Myntra Product SEO',
            list3: 'Amazon',
        },
        {
            id: 7,
            title: 'Nykaa',
            imageLogo: NykaaSVG,
            list1: 'Nykaa Account Management',
            list2: 'Amazon',
            list3: 'Amazon',
        },
        {
            id: 8,
            title: 'Blinkit',
            imageLogo: BlinkItSVG,
            list1: 'Blinkit Account Management',
            list2: 'Amazon',
            list3: 'Amazon',
        },


    ];
    return (
        <>
            <div className="account-management" id='account-management'>

                <ServiceBox
                    serviceTitle="account mangement"
                    photo={<AccountManagerSVG />}
                    para1="E-commerce account management plays a crucial role in the success of online businesses. Our services focus on streamlining and optimizing every aspect of your e-commerce operations to ensure a seamless shopping experience for your customers. This includes managing product listings to enhance their visibility and appeal, ensuring that product descriptions, images, and prices are accurate and competitive. We also handle inventory management, keeping track of stock levels and reordering products when necessary to prevent stockouts."
                    para2="In addition, we monitor and analyze sales performance, identifying trends and opportunities for growth. Our team is adept at managing customer service, addressing inquiries and resolving issues promptly to maintain high customer satisfaction levels. We also implement promotional strategies and discounts to drive sales and attract new customers. Through careful analysis of customer behavior and feedback, we continuously improve the shopping experience, making it more intuitive and engaging."
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