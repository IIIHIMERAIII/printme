import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../assets/theme";

export const FooterWrapper = styled.footer`
background: ${colors.primaryGray};
`;

export const VisitUsWrapper = styled.div`

`;

export const VisitUsTitle = styled.h5`
font-size: 20px;
color: ${colors.primaryWhite};
padding-bottom: 15px;
border-bottom: 2px solid ${colors.pink};
`;

export const InfoList = styled.ul`

`;

export const InfoListItem = styled.li`
margin-top: 14px;
`;

export const InfoText = styled.p`
font-size: 15px;
color: ${colors.primaryWhite};
`;

export const NavWrapper = styled.div`

`;

export const ListsWrapper = styled.div`
display: flex;
gap: 50px;
`;

export const NavTitle = styled.h5`
font-size: 20px;
color: ${colors.primaryWhite};
padding-bottom: 15px;
border-bottom: 2px solid ${colors.orange};
`

export const NavList = styled.ul`
margin-top: 14px;
display: flex;
flex-direction: column;
gap: 5px;
`;

export const NavListItem = styled.li`

`;

export const NavLink = styled(Link)`
color: ${colors.primaryWhite};
`;

export const ContactsWrapper = styled.div`

`;

export const ContactsTitle = styled.h5`
font-size: 20px;
color: ${colors.primaryWhite};
padding-bottom: 15px;
border-bottom: 2px solid ${colors.blue};
`;

export const ContactsList = styled.ul`
margin-top: 14px;
display: flex;
flex-direction: column;
gap: 5px;
`

export const ContactsListItem = styled.li`

`;

export const ContactsLink = styled(Link)`
color: ${colors.primaryWhite};
`;


export const SubFooter = styled.div`
height: 126px;
background: ${colors.subGray};
`;