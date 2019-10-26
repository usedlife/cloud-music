import styled, { keyframes } from 'styled-components';
import styles from '../../assets/global-style';

const animation = keyframes`
  0%, 100%{
    transform: scale(0.0);
  }
  50% {
    transform: scale(1.0);
  }
`

export const LoadingWrapper = styled.div`
  >div {
    z-index: 1;
    position: absolute;
    top: 0; left: 0; bottom: 0; right: 0;
    width: 60px;
    height: 60px;
    margin: auto;
    border-radius: 50%;
    opacity: .6;
    background-color: ${styles['theme-color']};
    animation: ${animation} 1.4s infinite ease-in;
    &:nth-of-type(2){
      animation-delay: -0.7s;
    }
  }
`