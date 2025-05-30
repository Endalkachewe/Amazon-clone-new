import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel'
import { img } from './img/data.js'
import classes from './Carouse.module.css'

function CarouselEffect() {
  return (
    <div>
        <Carousel autoPlay={true} infiniteLoop={true} showIndicator={true} showThumbs={false}>
              {img.map((imageItemLink) => {
                  return <img src={imageItemLink}/>
            })}
      </Carousel>
      <div className={classes.hero_img}></div>
    </div>
  )
}

export default CarouselEffect
