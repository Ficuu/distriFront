import React from 'react'
import portada from '../../assets/logo/PORTADA-01.jpg'

const Header = () => {
    
    return (
    <>
        <div className="carousel-inner">
            <img src={portada} class="w-100 h-100" alt="Wild Landscape"/>
        </div>    
    </>
  )
}

export default Header