import styled from "styled-components";
import { breakpoints, colors } from "../../assets/theme";
import print from '../../images/print.webp'

export const AdvantagesWrapper = styled.section`
padding-top: 30px;
padding-bottom: 80px;
background-image: url(${print});
background-repeat: no-repeat;
background-size: cover;

@media screen and (min-width: ${breakpoints.md}){ 
padding-top: 30px;
}

@media screen and (min-width: ${breakpoints.xl}) {
padding-top: 190px;
padding-bottom: 190px;
}
`;

export const ContentWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
}
`;

export const AdvantagesTitle = styled.h2`
font-size: 35px;
text-align: center;
margin-bottom: 35px;
color: ${colors.primaryWhite};

@media screen and (min-width: ${breakpoints.md}){
font-size: 50px;
text-align: end;
}
`;

export const AdvantagesSubTitle = styled.p`
color: ${colors.primaryWhite};
font-size: 25px;
text-align: justify;

@media screen and (min-width: ${breakpoints.md}) {
    margin-left: auto;
}

@media screen and (min-width: ${breakpoints.xl}) {
    text-align: center;
}
`;
