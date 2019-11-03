import styled from 'styled-components';
import { HEADER_HEIGHT } from '../../api/helper';
import styles from '../../assets/global-style';

export const AlbumWrapper = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: #f2f3f4;
  z-index: 100;
  transform-origin: right bottom;
  &.fly-enter, &.fly-appear{
    transform: rotateZ(30deg) translate3d(100%, 0, 0);
  }
  &.fly-enter-active, &.fly-appear-active{
    transition: transform .3s;
    transform: rotateZ(0deg) translate3d(0, 0, 0);
  }
  &.fly-exit{
    transform: rotateZ(0deg) translate3d(0, 0, 0);
  }
  &.fly-exit-active{
    transition: transform .3s;
    transform: rotateZ(30deg) translate3d(100%, 0, 0);
  }
`

export const Header = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  color: #f1f1f1;
  padding: 0 6px;
  height: ${HEADER_HEIGHT}px;
  background-color: ${styles["theme-color"]};
`