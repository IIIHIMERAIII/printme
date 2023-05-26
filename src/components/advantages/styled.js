import styled from "styled-components";
import { breakpoints, colors } from "../../assets/theme";
import print from '../../images/print.webp';


export const AdvantagesWrapper = styled.section`
display:none;

padding-top: 100px;
padding-bottom: 570px;
background-image: url(${print});
background-size: cover;
border-bottom: 3px solid ${colors.orange};

@media screen and (min-width: ${breakpoints.md}){
    display:flex
}
`;


export const AdvantagesTitle = styled.h2`
font-size: 35px;
text-align: center;
margin-bottom: 35px;
color: ${colors.primaryWhite};

@media screen and (min-width: ${breakpoints.md}){
font-size: 50px;
}

@media screen and (min-width: ${breakpoints.xl}){
font-size: 70px;
}
`;