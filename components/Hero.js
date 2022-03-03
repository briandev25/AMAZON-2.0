import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Hero() {
  return (
       <div className='relative'>
           <div className='absolute bottom-0 w-full h-32 bg-gradient-to-t from-gray-100 to-transparent z-20' />
           <Carousel autoPlay={true} infiniteLoop={true} showStatus={false} showIndicators={false} showThumbs={false} interval={5000}>
              <div>
                  <img src='https://links.papareact.com/gi1'loading='lazy' />
              </div>
              <div>
                  <img src='https://links.papareact.com/6ff' loading='lazy' />
              </div>
              <div>
                  <img src='https://links.papareact.com/7ma' loading='lazy' />
              </div>
           </Carousel>
       </div>
  )
}

export default Hero;

// ["https://links.papareact.com/gi1","https://links.papareact.com/6ff","https://links.papareact.com/7ma"]