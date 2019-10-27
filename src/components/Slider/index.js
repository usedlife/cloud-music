import React, { useEffect, useState } from 'react';
import "swiper/css/swiper.min.css";
import Swiper from 'swiper';

import { SliderContainer, MyImg } from './style';

const Slider = (props) => {
  const { bannerList } = props;
  
  const [slider, setSlider] = useState(null);

  useEffect(() => {
    if (!slider && bannerList.size) {
      setSlider(new Swiper('.swiper-container', {
        loop: true,
        autoplay: true,
        autoplayDisableOnInteraction: false,
        pagination: {el:'.swiper-pagination'},
      }))
    }
  }, [bannerList.size])

  return (
    <SliderContainer>
      <div className='before'></div>
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {bannerList.toJS().map((item, index) => {
            return (
              <div className="swiper-slide" key={index}>
                <div className="swiper-nav">
                  <MyImg src={item.imageUrl}></MyImg>
                </div>
              </div>
            )
          })}
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </SliderContainer>
  )
}

export default React.memo(Slider)