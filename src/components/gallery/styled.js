import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { colors, vars, breakpoints } from "../../assets/theme";

const glowingAnimation = keyframes`
  0% { background-position: 0 0; }
  50% { background-position: 640% 0; }
  100% { background-position: 0 0; }
`;


export const GalleryWrapper = styled.section`
padding-top: 80px;
padding-bottom: 80px;
`;

export const GalleryTitle = styled.p`
font-size: 35px;
text-align: center;
margin-bottom: 50px;

@media screen and (min-width: ${breakpoints.md}) {
  font-size: 50px;
}
`;

export const CategoryWrapper = styled.div`
display: flex;
`;

export const CategoryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 35px;
  justify-content: center;

  @media screen and (min-width: ${breakpoints.sm}) {
    gap: 30px;
  }
  
  @media screen and (min-width: ${breakpoints.md}) {
    gap: 30px;
  }

  @media screen and (min-width: ${breakpoints.xl}) {
    gap: 40px;
  }
`;

export const ListItem = styled.li`
max-height: 210px;
position: relative;
width: 40%;

@media screen and (min-width: ${breakpoints.sm}) {
  max-height: 340px;
   width: 45%;
}

@media screen and (min-width: ${breakpoints.md}) {
  width: 30%;
  max-height: 270px;
}

@media screen and (min-width: ${breakpoints.xl}) {
  width: 20%;
  max-height: 360px;
}
`;

export const ItemLink = styled(Link)`
width: 100%;
height: 100%;
display: flex;
position: relative;
`;

export const NeonWrapper = styled.div`
width: 100%;
margin-bottom: -6px;
border-radius: 16px;
display: flex;
flex-direction: column;
box-shadow: ${vars.TriLineShadow};
cursor: pointer;
transition: all 0.5s ease-in-out;

&:hover,
&:focus {
    transform: scale(1.1);
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

export const ItemImg = styled.img`
border-radius: 16px 16px 0px 0px;
display:inline-block;
height: 80%;
width: 100%;
`;

export const TitleWrapper = styled.div`
height: 20%;
padding-top: 10px;
font-size: 10px;
background: ${colors.primaryGray};
color: ${colors.primaryWhite};
border-bottom-right-radius: 16px;
border-bottom-left-radius: 16px;
text-align: center;
transition: color ${vars.ColorTransition};

${ListItem}:hover & {
    color: orange;
  }

  @media screen and (min-width: ${breakpoints.sm}) {
    font-size: 12px;
   }

  @media screen and (min-width: ${breakpoints.md}) {
    font-size: 12px;
  }

    @media screen and (min-width: ${breakpoints.xl}) {
    font-size: 18px;
  }

   @media screen and (min-width: ${breakpoints.xxxl}) {

   }
`;


export const ItemTitle = styled.p`
padding: 2px;
`;