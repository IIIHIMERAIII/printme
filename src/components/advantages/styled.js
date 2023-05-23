import styled from "styled-components";
import { breakpoints } from "../../assets/theme";
import print from '../../images/print.jpg'

export const AdvantagesWrapper = styled.section`
padding-top: 30px;
padding-bottom: 80px;

@media screen and (min-width: ${breakpoints.md}){ 
background-image: url(${print});
background-repeat: no-repeat;
padding-top: 30px;
}

@media screen and (min-width: ${breakpoints.xl}) {
padding-top: 120px;
}
`;

export const AdvantagesTitle = styled.h2`
font-size: 35px;
text-align: center;
margin-bottom: 35px;

@media screen and (min-width: ${breakpoints.md}){
font-size: 50px;
text-align: end;
}
`;
