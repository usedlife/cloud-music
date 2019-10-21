import styled from 'styled-components';
import style from '../../assets/global-style'

export const SliderContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  margin: auto;
  background: white;
  .before{
    position: absolute;
    top: -400px;
    height: 480px;
    width: 100%;
    background-color: ${style["theme-color"]};
  }
  .swiper-container{
    position: relative;
    width: 98%;
    height: 160px;
    overflow: hidden;
    margin: auto;
    border-radius: 6px;
    .swiper-nav{
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
    }
    .swiper-pagination-bullet-active{
      background: ${style["theme-color"]};
    }
  }
`
export const MyImg = styled.img`
  width: 100%;  
  height: 100%;  
`