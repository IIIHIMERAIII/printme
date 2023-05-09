import styled, { keyframes} from "styled-components";
import { colors } from "../../assets/theme";
import { vars } from "../../assets/theme";

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


export const Background = styled.section`
background-image: ${vars.HomePageBG};
display: flex;
padding-top: 80px;
padding-bottom: 170px;
position: relative;
height: 580px;
`;

export const HeroWrapper = styled.div`
margin-left: 174px;
width: 500px;
`;

export const HeroTitle = styled.h1`
margin-bottom: 80px;    
font-size: 50px;
color: ${colors.primaryWhite};
`;

export const HeroSlider = styled.div`
position: absolute;
right: 0;
width: 800px;

 transition: transform 1.2s ease-in-out;
  
  & .image-enter {
    opacity: 0;
    transform: translateX(50%);
    width: 0;
    height: 0;
  }
  
  & .image-enter-active {
    opacity: 1;
    transform: translateX(0);
  }
  
  & .image-exit {
    opacity: 1;
    transform: translateX(0);
  }
  
  & .image-exit-active {
    opacity: 0;
    transform: translateX(-50%);
  }
`;

export const SliderImg = styled.img`
position: relative;
right: 0;
top: 0;
width: 800px;
transition: opacity 1.2s ease-in-out;
`;

export const SliderBtn = styled.button`
align-items: center;
justify-content: center;
display: flex;
width: 65px;
height: 65px;
padding: 0;
position: absolute;
top: 40%;
background: transparent;
border: none;
border-radius: 50%;
cursor: pointer;
background: rgba( 255, 255, 255, 0.15 );
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