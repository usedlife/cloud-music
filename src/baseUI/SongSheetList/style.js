import styled from 'styled-components';

export const ListWrapper = styled.div`
  

`

export const List = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export const ListItem = styled.div`
  flex: 0 1 33.33%;
  padding: 2px;
  .img_wrapper{
    position: relative;
    img{
      width: 100%;
      height: 100%;
      border-radius: 2px;
    }
    .count{
      position: absolute;
      color: #f1f1f1;
      right: 4px;
      top: 4px;
      font-size: 10px;
    }
    .decorate{
      position: absolute;
      top: 0;
      width: 100%;
      height: 35px;
      border-radius: 3px;
      background: linear-gradient(hsla(0,0%,43%,.4),hsla(0,0%,100%,0));
    }
  }
  .desc{
    margin-top: 2px;
    font-size: 12px;
    color: rgb(46, 48, 48);
    line-height: 1.3;
  }
`