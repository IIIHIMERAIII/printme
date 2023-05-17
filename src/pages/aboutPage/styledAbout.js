import styled from "styled-components";
import { colors, breackPoints } from "../../assets/theme";

export const AboutWrapper = styled.div`
padding-top:160px;
padding-bottom: 160px;
`;

export const PageTitle = styled.h1`
font-size: 40px;
text-align: center;
margin-bottom: 35px;
`;

export const PageDescr = styled.p`
text-align: center;
margin-bottom: 50px;
`;

export const ContactsWrapper = styled.div`
width: 100%;
`;

export const ContactsList = styled.ul`
width: 100%;
gap: 50px;
margin-bottom: 120px;
justify-content: center;
align-items: center;
display: flex;
flex-direction: column;

margin-bottom: 120px;

@media screen and (min-width: ${breackPoints.sm}) {
    flex-direction: row;
    align-items: baseline;
}

@media screen and (min-width: ${breackPoints.md}) {
    justify-content: space-between;
}
`;

export const ContactsListItem = styled.li`

`;

export const TitleWrapper = styled.div`
display: flex;
margin-bottom: 20px;
display: flex;
align-items: center;
justify-content: flex-start;
`;

export const ContactsTitle = styled.p`
margin-left: 10px;
font-size: 22px;
font-weight: 600;
`;

export const ContactSubTitle = styled.p`
font-size: 18px;
`;

export const ContactsIcon = styled.svg`
width: 40px;
height: 50px;
fill:${colors.orange};
`;

export const PageSubTitle = styled.p`
margin-top: 70px;
text-align: center;
font-size: 50px;
font-weight: 600;
`;