import styled, {keyframes} from "styled-components";
import { colors, vars } from "../../assets/theme";

const glowingAnimation = keyframes`
  0% { background-position: 0 0; }
  50% { background-position: 640% 0; }
  100% { background-position: 0 0; }
`;


export const GalleryWrapper = styled.section`
padding-top: 80px;
padding-bottom: 80px;
`;

export const GalleryTitle = styled.h3`
font-size: 50px;
text-align: center;
margin-bottom: 50px;
`;

export const CategoryWrapper = styled.div`
display: flex;
`;

export const CategoryList = styled.ul`
display: flex;
gap: 30px;
flex-wrap: wrap;
justify-content: space-between;
`;

export const ListItem = styled.li`
position: relative;
width: 22%;
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

`

export const ItemImg = styled.img`
border-radius: 16px 16px 0px 0px;
display:inline-block;
height: 100%;
width: 100%;
`;

export const ItemTitle = styled.p`
padding: 21px;
font-size: 20px;
background: ${colors.primaryGray};
color: ${colors.primaryWhite};
border-bottom-right-radius: 16px;
border-bottom-left-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(3.4px);
text-align: center;
-webkit-backdrop-filter: blur(3.4px);
transition: color ${vars.ColorTransition};

${ListItem}:hover & {
    color: orange;
  }
`;