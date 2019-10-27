import styled from 'styled-components';

export const List = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const Item = styled.div`
  width: 100%;
  flex: 0 0 60px;
  padding: 5px 0;
  &:not(:last-child){
    border-bottom: 1px solid rgb(228, 228, 228);
  }
  display: flex;
  flex-direction: row;
  align-items: center;
  .imgWrapper{
    height: 50px;
    width: 50px;
    >img{
      width: 100%;
      height: 100%;
      border-radius: 5px;
    }
  }
  .name{
    font-size: 14px;
    font-weight: 400;
    margin-left: 16px;
  }
`