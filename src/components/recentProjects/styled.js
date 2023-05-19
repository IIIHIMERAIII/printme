import styled from "styled-components";
import { breakpoints } from "../../assets/theme";


export const ProjectsWrapper = styled.section`

`;

export const ProjectsTitle = styled.h4`
font-size: 35px;
text-align: center;
margin-bottom: 20px;

@media screen and (min-width: ${breakpoints.sm}){
    font-size: 50px;
    margin-bottom: 20px;
}
`;

export const ProjectsSybTitle = styled.p`
    font-size: 12px;
    margin-bottom: 20px;

@media screen and (min-width: ${breakpoints.sm}) {
    font-size: 20px;
    text-align: center;
}

@media screen and (min-width: ${breakpoints.md}) {
    font-size: 25px;
    text-align: center;
}

@media screen and (min-width: ${breakpoints.xl}) {
    font-size: 35px;
    text-align: center;
}

`;

