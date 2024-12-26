import React from 'react'
import Hero from './Hero/Hero'
import AboutUs from './AboutUs/AboutUs'
import MainService from './Services/MainService/MainService'
import Testimonials from './Testimonials/Testimonials'

function Main() {
    return (
        <div className="App">
            <Hero />
            <AboutUs />
            <MainService />
            <Testimonials/>

        </div>
    )
}

export default Main