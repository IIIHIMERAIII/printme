import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors, vars } from "../../assets/theme";

export const FooterWrapper = styled.footer`
background: ${colors.primaryGray};
`;

export const SectionWrapper = styled.div`

`;

export const SectionTitle = styled.h5`
font-size: 20px;
color: ${colors.primaryWhite};
padding-bottom: 15px;
margin-bottom: 10px;
border-bottom: 2px solid ${colors.pink};
`;

export const SectionList = styled.ul`
display: flex;
gap: 5px;
flex-direction: column;
`;

export const SectionListItem = styled.li`

`;

export const SectionText = styled.p`
font-size: 15px;
color: ${colors.primaryWhite};
`;


export const SectionLink = styled(Link)`
color: ${colors.primaryWhite};
transition: ${vars.ColorTransition};

&:hover,
&:focus
{
    color: ${colors.orange}
}
`;


export const ContactsList = styled.ul`

`;

export const ContactsListItem = styled.li`

`;

export const ContactsLink = styled(Link)`
color: ${colors.primaryWhite};
`;


export const SubFooter = styled.div`
align-items: center;
display: flex;
height: 120px;
background: ${colors.subGray};
`;

export const SocialWrapper = styled.div`
width: 1200px;
display: flex;
justify-content: space-between;
align-items: center;
`;

export const SocialList = styled.div`
gap: 35px;
display: flex;
`;

export const SocialSvg = styled.svg`
width: 80px;
height: 80px;
cursor: pointer;
fill: ${colors.primaryWhite};
transition: fill ${vars.ColorTransition};

&:hover,
&:focus
{
    fill: ${colors.orange};
}
`;

export const RightsWrapper = styled.div`
gap: 12px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const Logo = styled.img`
width: 50px;
height: 35px;
`;

export const RightsTitle = styled.p`
font-size: 12px;
color: ${colors.primaryWhite};
`;