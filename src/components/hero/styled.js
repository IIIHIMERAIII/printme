import styled from "styled-components";
import { colors, vars, breakpoints } from "../../assets/theme";

export const Background = styled.section`
justify-content: center;
align-items: center;
text-align: center;
display: flex;
background-image: ${vars.HomePageBG};
height: 580px;
position: relative;
@media screen and (min-width: ${breakpoints.md}) {
  padding-top: 180px;
  padding-bottom: 180px;
  position: relative;
}
`;

export const HeroWrapper = styled.div`
width: 80%;
justify-content: center;
align-items: center;
display: flex;
flex-direction: column;

@media screen and (min-width: ${breakpoints.md}) {
width: 60%;
display: flex;
flex-direction: column;
}

@media screen and (min-width: ${breakpoints.xl}) {
  margin-left: 40px;
  margin-left: 50px;
  margin-right: auto;
  height: 300px;
  width: 45%;
}

@media screen and (min-width: ${breakpoints.xxl}) {
  width: 35%;
  height: 360px;
}

@media screen and (min-width: ${breakpoints.xxxl}) {
   margin-left: 100px;
   
}
`;

export const HeroTitle = styled.h1`
  font-size: 35px;
  color: ${colors.primaryWhite};
  margin-bottom: 50px;
  height: 220px;

@media screen and (min-width: ${breakpoints.md}) {
  font-size: 45px;
  margin-bottom: auto;
}

@media screen and (min-width: ${breakpoints.xl}) {
  height: 150px;
}

@media screen and (min-width: ${breakpoints.xxl}) {
  height: auto;
}

@media screen and (min-width: ${breakpoints.xxxl}){
  font-size: 55px;
}
`;

export const HeroSlider = styled.div`
 display: none;

  @media screen and (min-width: ${breakpoints.md}) {
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

  @media screen and (min-width: ${breakpoints.xxl}) {
    width: 700px;
  }

  @media screen and (min-width: ${breakpoints.xxxl}) {
    width: 900px;
  }
`;

export const SliderImg = styled.img`
display: none;

@media screen and (min-width: ${breakpoints.xl}) {
  display: inline;
  width: 600px;
  position: relative;
  right: 0;
  top: 0;
  transition: opacity 1.2s ease-in-out;
}

@media screen and (min-width: ${breakpoints.xxl}) {
  width: 700px;
}

@media screen and (min-width: ${breakpoints.xxxl}) {
  width: 900px;
}
`;
