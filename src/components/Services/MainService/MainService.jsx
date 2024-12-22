import React from 'react'
import AccountMangement from '../AccountMangement/AccountMangement'
import EcommerceSpecialist from '../EcommerceSpecialist/EcommerceSpecialist'
import SocialMedia from '../SocialMedia/SocialMedia'
import WebDevelopment from '../WebDevelopment/WebDevelopment'
import AppDevelopment from '../AppDevelopment/AppDevelopment'

const MainService = () => {
    return (
        <>
            <div >
                <AccountMangement />
                <EcommerceSpecialist />
                <SocialMedia />
                <WebDevelopment />
                <AppDevelopment />
            </div>
        </>
    )
}

export default MainService