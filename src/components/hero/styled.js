import styled, { keyframes} from "styled-components";
import { colors, vars, breackPoints } from "../../assets/theme";

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
justify-content: center;
align-items: center;
text-align: center;
display: flex;
background-image: ${vars.HomePageBG};
height: 580px;
position: relative;
@media screen and (min-width: ${breackPoints.md}) {
  padding-top: 180px;
  padding-bottom: 180px;
  position: relative;
}


// background-image: ${vars.HomePageBG};
// display: flex;
// padding-top: 80px;
// padding-bottom: 170px;
// position: relative;
// height: 580px;
`;

export const HeroWrapper = styled.div`
width: 80%;
justify-content: center;
align-items: center;
display: flex;
flex-direction: column;

@media screen and (min-width: ${breackPoints.md}) {
width: 60%;
display: flex;
flex-direction: column;
}

@media screen and (min-width: ${breackPoints.xl}) {
  margin-left: 40px;
  margin-left: 50px;
  margin-right: auto;
  width: 45%;
}

@media screen and (min-width: ${breackPoints.xxl}) {
  width: 35%;
}

@media screen and (min-width: ${breackPoints.xxxl}) {
   margin-left: 100px;
   
}
`;

export const HeroTitle = styled.h1`
  font-size: 35px;
  color: ${colors.primaryWhite};
  margin-bottom: 50px;
  height: 220px;

@media screen and (min-width: ${breackPoints.md}) {
  font-size: 45px;
  margin-bottom: 40px;
}

@media screen and (min-width: ${breackPoints.xl}) {
  height: 150px;
}

@media screen and (min-width: ${breackPoints.xxl}) {
  height: auto;
}

@media screen and (min-width: ${breackPoints.xxxl}){
  font-size: 55px;
}
`;

export const HeroSlider = styled.div`
 display: none;

  @media screen and (min-width: ${breackPoints.md}) {
    display: inline;
    position: absolute;
    right: 0;
    width: 600px;
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
  }

  @media screen and (min-width: ${breackPoints.xxl}) {
    width: 700px;
  }

  @media screen and (min-width: ${breackPoints.xxxl}) {
    width: 900px;
  }
`;

export const SliderImg = styled.img`
display: none;

@media screen and (min-width: ${breackPoints.xl}) {
  display: inline;
  width: 600px;
  position: relative;
  right: 0;
  top: 0;
  transition: opacity 1.2s ease-in-out;
}

@media screen and (min-width: ${breackPoints.xxl}) {
  width: 700px;
}

@media screen and (min-width: ${breackPoints.xxxl}) {
  width: 900px;
}
`;

export const SliderBtn = styled.button`
align-items: center;
justify-content: center;
display: flex;
width: 65px;
height: 65px;
padding: 0;
position: absolute;
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