import styled from 'styled-components';
import style from '../../assets/global-style';

export const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${style["theme-color"]};
  color: #f1f1f1;
  padding: 0 5px;
  >span{
    line-height: 40px;
  }
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
      font-size: 12px;
      padding: 2px 0;
    }
  }
  .selected span{
    font-weight: 600;
    border-bottom: 1px solid #fff;
    color: #f1f1f1;
  }
`