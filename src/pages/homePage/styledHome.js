import styled from "styled-components";
import { colors, vars } from "../../assets/theme";
import print from '../../images/print.jpg'

export const Background = styled.section`
background-image: ${vars.HomePageBG};
`;

export const HeroWrapper = styled.div`
padding-top: 80px;
padding-bottom: 80px;
`;

export const HeroTitle = styled.h1`
color: ${colors.primaryWhite};
font-size: 50px;
margin-bottom: 80px;
`;

export const AdvantagesWrapper = styled.section`
padding-top: 120px;
padding-bottom: 120px;
background-image: url(${print});
background-size: cover;
background-position: center;
`;

export const AdvantagesTitle = styled.h2`
text-align: end;
font-size: 50px;
margin-bottom: 35px;
`;

export const ServicesWrapper = styled.section`
padding-top: 80px;
`;

