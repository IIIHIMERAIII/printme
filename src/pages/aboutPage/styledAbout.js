import styled from "styled-components";
import { colors, breakpoints, vars } from "../../assets/theme";

export const AboutWrapper = styled.div`
padding-top:160px;
padding-bottom: 160px;
`;

export const PageTitle = styled.h1`
font-size: 26px;
text-align: center;
margin-bottom: 35px;

@media screen and (min-width: ${breakpoints.md}) {
font-size: 40px;
}



`;

export const PageDescr = styled.p`
font-size: 20px;
text-align: justify;
margin-bottom: 50px;

@media screen and (min-width: ${breakpoints.xl})  {
    font-size: 30px;
}
`;

export const ContactsWrapper = styled.div`
align-items: center;
display: flex;
flex-direction: column;

@media screen and (min-width: ${breakpoints.md}) {
    width: 100%;
}
`;

export const ContactsList = styled.ul`
gap: 50px;
margin-bottom: 120px;
align-items: self-start;
display: flex;
flex-direction: column;

margin-bottom: 120px;

@media screen and (min-width: ${breakpoints.md}) {
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;
    width: 100%;
    justify-content: space-evenly;
}
`;

export const ContactsListItem = styled.li`
font-weight: 700;
display: flex;
flex-direction: column;
gap: 10px;
`;

export const TitleWrapper = styled.div`
display: flex;
display: flex;
align-items: center;
justify-content: flex-start;
`;

export const ContactsTitle = styled.p`
margin-left: 10px;
font-size: 22px;
font-weight: 600;
`;

export const ContactSubTitle = styled.a`
font-size: 18px;
cursor: pointer;
color: ${colors.primaryBlack};
transition: ${vars.ColorTransition};

&:hover,
&:focus
{
    color: ${colors.orange}
}
`;

export const ContactsIcon = styled.svg`
width: 40px;
height: 50px;
fill:${colors.orange};
`;

export const PageSubTitle = styled.p`
text-align: center;
font-size: 50px;
font-weight: 600;
margin-top: 40px;
`;