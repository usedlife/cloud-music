import styled from 'styled-components';

export const TopDesc = styled.div`
  height: 275px;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f1f1f1;
  padding: 0 30px 10px;
  overflow: hidden;
  .background{
    position: absolute;
    top: 0; bottom: 0;
    width: 100%;
    height: 100%;
    background: url(${({imgUrl}) => imgUrl}) 0px 0px / 100% 100% no-repeat;
    background-size: 100%;
    filter: blur(20px);
    .filter {
      height: 100%;
      width: 100%;
      background: rgba(7, 17, 27, 0.2);
    }
  }
  .img_wrapper{
    width: 120px;
    height: 120px;
    position: relative;
    .decorate{
      width: 100%;
      position: absolute;
      top:0;
      height: 35px;
      border-radius: 3px;
      background: linear-gradient(rgba(110, 110, 110, 0.4), rgba(255, 255, 255, 0));
    }
    >img{
      height: 100%;
      width: 100%;
    }
    .play_count{
      position: absolute;
      top: 2px;
      right: 2px;
      font-size: 12px;
    }
  }
  .desc_wrapper{
    height: 120px;
    position: relative;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 10px;
    .desc_name{
      font-size: 16px;
    }
    .author{
      font-size: 12px;
    }
  }
`

export const Menu = styled.ul`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-around;
  margin-top: -80px;
  height: 80px;
  li{
    font-size: 14px;
    color: #f1f1f1;
  }
`