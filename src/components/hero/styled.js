import styled from "styled-components";
import { colors } from "../../assets/theme";
import { vars } from "../../assets/theme";

export const Background = styled.section`
background-image: ${vars.HomePageBG};
display: flex;
padding-top: 80px;
padding-bottom: 170px;
position: relative;
`;

export const HeroWrapper = styled.div`
margin-left: 110px;
`;

export const HeroTitle = styled.h1`
margin-bottom: 80px;    
font-size: 50px;
color: ${colors.primaryWhite};
`;

export const HeroSlider = styled.div`

`;

export const SliderImg = styled.img`

`;

export const SliderBtn = styled.button`
width: 50px;
height: 50px;
position: absolute;
top: 40%;
background: white;
border: none;
border-radius: 50%;
`;