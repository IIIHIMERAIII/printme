import styled, { keyframes } from "styled-components";
import { colors } from "../../assets/theme";

const pulseAnimation = keyframes`
    0% {
    transform: scale(1);
  }
    10% {
    transform: scale(1.01);
  }
    20% {
    transform: scale(1.02);
  }
    30% {
    transform: scale(1.03);
  }
    40% {
    transform: scale(1.04);
  }
    50% {
    transform: scale(1.05);
  }
    60% {
    transform: scale(1.04);
  }
    70% {
    transform: scale(1.03);
  }
    80% {
    transform: scale(1.02);
  }
    90% {
    transform: scale(1.01);
  }
    100% {
    transform: scale(1);
  }
`;


export const SliderBtn = styled.button`
align-items: center;
justify-content: center;
display: flex;
width: 65px;
height: 65px;
padding: 0;
border: none;
border-radius: 50%;
cursor: pointer;
background: rgba( 255, 255, 255, 0.15);
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 4.5px );
-webkit-backdrop-filter: blur( 4.5px );
border-radius: 10px;
animation: ${pulseAnimation} 1.8s infinite;
transition: background 0.5s;


&:hover{
    animation-play-state: paused;
    transform: scale(1.05);
    background: ${colors.orange};
}

`;

export const SliderBtnSvg = styled.svg`
width: 52px;
height: 52px;
fill: white;
`;