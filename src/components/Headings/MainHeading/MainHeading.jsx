import React from 'react'
import './MainHeading.css'
import FadeInOnScroll from '../../../Animation/FadeInOnScroll/FadeInOnScroll'

const MainHeading = (props) => {
  return (
    <>
      <FadeInOnScroll>


        <div className="heading" ><h1>{props.title}</h1></div>


      </FadeInOnScroll>


    </>
  )
}

export default MainHeading