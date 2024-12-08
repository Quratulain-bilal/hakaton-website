import React from 'react'
import GalleryImages from "./Landingpage/GalleryImages"
import Cards from './Landingpage/Cards'
import Product from './Landingpage/Product'
import Instra from './Landingpage/Instra'


const About = () => {
  return (
    <div id="about">
        <GalleryImages/>
        <Product/>
        
        <Cards/>
        <Instra/>
    </div>
  )
}

export default About