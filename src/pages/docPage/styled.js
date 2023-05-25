import styled from "styled-components";
import { breakpoints, colors, vars } from "../../assets/theme";
import doc from '../../images/doc.webp'; 

export const DocPageWrapper = styled.main`
padding-top: 120px;
padding-bottom: 120px;
background-image: url(${doc});
background-repeat: no-repeat;
background-size: cover;
`;

export const PageTitle = styled.h1`
color: ${colors.primaryWhite};
font-size: 35px;
text-align: center;
margin-bottom: 35px;

@media screen and (min-width: ${breakpoints.md}){
font-size: 50px;
}
`;

export const PageSubTitle = styled.p`
color: ${colors.primaryWhite};
font-size: 16px;
margin-bottom: 50px;

@media screen and (min-width: ${breakpoints.md}) {
font-size: 25px;
margin-bottom: 200px;
}

`;

export const ImgLink = styled.a`

`;

export const Img = styled.img`
transition: all 0.5s ease-in-out;
border-radius: 16px;
width: 100%;
border: 5px solid transparent;

&:hover,
&:focus
{
    transform: scale(1.01);
    border: 5px solid ${colors.orange};
    border-radius: 16px;
}
`;

export const GovLink = styled.a`
bottom: 15px;
text-align: center;
color: ${colors.primaryWhite};
font-size: 35px;
margin-bottom: 20px;
transition: ${vars.ColorTransition};

&:hover,
&:focus
{
    color: ${colors.orange}
}
`;

export const Text = styled.p`
color: ${colors.primaryWhite};
text-align: center;
font-size: 16px;
margin-top: 50px;

@media screen and (min-width: ${breakpoints.md}) {
font-size: 20px;
}
`;