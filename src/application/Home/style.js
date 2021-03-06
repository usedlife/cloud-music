import styled from 'styled-components';
import style from '../../assets/global-style';

export const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${style["theme-color"]};
  color: #f1f1f1;
  padding: 5px 5px;
  >span{
    line-height: 40px;
  }
  font-size: 18px;
`

export const Tab = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${style["theme-color"]};
  height: 40px;
  >a{
    flex: 1;
    line-height: 40px;
    text-align: center;
    span{
      color: #e4e4e4;
      font-size: 14px;
    }
  }
  .selected span{
    font-weight: 700;
    border-bottom: 2px solid #fff;
    color: #f1f1f1;
  }
`