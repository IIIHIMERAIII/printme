import styled, {keyframes} from "styled-components";
import { vars, breackPoints } from "../../assets/theme";

const glowingAnimation = keyframes`
  0% { background-position: 0 0; }
  50% { background-position: 640% 0; }
  100% { background-position: 0 0; }
`;

export const ProductWrapper = styled.div`
padding-top: 160px;
padding-bottom: 120px;
`;

export const ProductCard = styled.div`
align-items: center;
display: flex;
flex-direction: column;
@media screen and (min-width: ${breackPoints.md}){
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}
`;

export const AnimationWrapper = styled.div`
position: relative;
width: 100%;
height: 100%;
`;


export const NeonWrapper = styled.div`
width: 100%;
margin-bottom: 10px;
border-radius: 16px;
display: flex;
flex-direction: column;
box-shadow: ${vars.TriLineShadow};
cursor: pointer;
transition: all 0.5s ease-in-out;

&:hover,
&:focus {
    transform: scale(1.02);
    box-shadow: none;
}

  &:hover:before {
    opacity: 1;
  }

  &:before {
    content: '';
    background: ${vars.BtnGradientAnimate};
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 640%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: ${glowingAnimation} 30s linear infinite;
    opacity: 0;
    transition: opacity 1.5s ease-in-out;
    border-radius: 10px;
  }
`;

export const TitleWrapper = styled.div`
  margin-top: 50px;
@media screen and (min-width: ${breackPoints.md}) {
  margin-left: 60px;
  width: 100%;
  margin-top: 0;
}
`;

export const ProductImg = styled.img`
height: 600px;
border-radius: 16px;
width: 100%;
`;

export const ProductTitle = styled.h1`
font-size: 50px;
margin-bottom: 20px;
`;

export const ProductDescr = styled.p`

`;

