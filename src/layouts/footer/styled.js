import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors, vars, breakpoints } from "../../assets/theme";

export const FooterWrapper = styled.footer`
background: ${colors.primaryGray};
`;

export const FooterContainer = styled.div`
display:none;
margin-right: auto;
margin-left: auto;
padding-right: 15px;
padding-left: 15px;
border-top: 3px solid ${colors.orange};

@media screen and (min-width: ${breakpoints.md}) {
    display: flex;
    max-width: ${breakpoints.md};
    justify-content: center;
    padding: 50px;
    gap: 40px;
}


@media screen and (min-width: ${breakpoints.xl}) {
    max-width: ${breakpoints.xl};
    justify-content: space-between;
}

@media screen and (min-width: ${breakpoints.xxxl}) {
    max-width: ${breakpoints.xxxl};
}
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
display: none;
flex-direction: column;
gap: 5px;

@media screen and (min-width: ${breakpoints.md}) {
    display: flex;
}
`;

export const ContactsListItem = styled.li`

`;

export const ContactsLink = styled.a`
color: ${colors.primaryWhite};

transition: ${vars.ColorTransition};

&:hover,
&:focus
{
    color: ${colors.orange}
}
`;


export const SubFooter = styled.div`
align-items: center;
display: flex;
height: 120px;
background: ${colors.subGray};
`;

export const SocialWrapper = styled.div`
width: 100%;
display: flex;
gap: 50px;
justify-content: space-around;
align-items: center;

@media screen and (min-width: ${breakpoints.md}) {
    width: ${breakpoints.md};
    gap: 0;
}


@media screen and (min-width: ${breakpoints.xl}) {
    width: 1170px;
    justify-content: space-between;
}
`;

export const SocialList = styled.div`
gap: 35px;
display: flex;
`;

export const SocialSvg = styled.svg`
width: 40px;
height: 40px;
cursor: pointer;
fill: ${colors.primaryWhite};
transition: all ${vars.ColorTransition};

&:hover,
&:focus
{
    fill: ${colors.orange};
    transform: scale(1.1);
}

@media screen and (min-width: ${breakpoints.sm}) {
    width: 80px;
    height: 80px;
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