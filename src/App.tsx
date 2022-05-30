import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'

import { Navigation } from 'swiper'

import './App.css'
import Background from '../src/images/background.jpg'

function App() {
  return (
    <body>
      <img src={Background} alt="background" />
      <div className="Main">
        <h1>GOku</h1>
        <div className="InfoBody">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>
        </div>
      </div>
      <footer>
        <p>
          Fonte:
          <a href="https://dragonball.fandom.com/wiki/Goku" target="_blank">
            {' '}
            dragonball.fandom.com
          </a>
        </p>
      </footer>
    </body>
  )
}

export default App
