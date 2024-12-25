import React from 'react'
import AccountMangement from '../AccountMangement/AccountMangement'
import EcommerceSpecialist from '../EcommerceSpecialist/EcommerceSpecialist'
import SocialMedia from '../SocialMedia/SocialMedia'
import WebDevelopment from '../WebDevelopment/WebDevelopment'
import AppDevelopment from '../AppDevelopment/AppDevelopment'
import FlipkartAccountManagement from '../FlipkartAccountManagement/FlipkartAccountManagement'
import EtsyAccountMangement from '../EtsyAccountMangement/EtsyAccountMangement'

function MainService () {
    return (
        <>
            <div >
                <AccountMangement />
                {/* <EcommerceSpecialist /> */}
                {/* <FlipkartAccountManagement/> */}
                {/* <EtsyAccountMangement/> */}
                <SocialMedia />
                <WebDevelopment />
                <AppDevelopment />
            </div>
        </>
    )
}

export default MainService