import styled from "styled-components";
import { breakpoints, colors } from "../../assets/theme";


export const AdvantagesWrapper = styled.section`
padding-top: 30px;
padding-bottom: 80px;


@media screen and (min-width: ${breakpoints.md}){ 
padding-top: 30px;
}

@media screen and (min-width: ${breakpoints.xl}) {
padding-top: 40px;
padding-bottom: 190px;
}
`;

export const ContentWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
    
@media screen and (min-width: ${breakpoints.md}){
    align-items: start;
    flex-direction: row;
}
`;

export const Img = styled.img`
display: none;

@media screen and (min-width: ${breakpoints.md}) {
    display: inline;
    height: 250px;

}
`;

export const AdvantagesTitle = styled.h2`
font-size: 35px;
text-align: center;
margin-bottom: 35px;
color: ${colors.primaryBlack};

@media screen and (min-width: ${breakpoints.md}){
font-size: 50px;
text-align: end;
}
`;

export const AdvantagesSubTitle = styled.p`
color: ${colors.primaryBlack};
font-size: 25px;
text-align: justify;

@media screen and (min-width: ${breakpoints.md}) {
    margin-left: auto;
    width: 90%;
}

`;

export const TextWrapper = styled.div`

`;
