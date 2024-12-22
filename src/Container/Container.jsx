import React from 'react'
import './Container.css'

const Container = (props) => {
    return (
        <>
            

            <div className='container'>
                <div className="container-item">{props.children}</div>
            </div>
        </>
    )
}

export default Container