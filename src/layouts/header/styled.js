import styled from "styled-components";
import { colors, vars } from "../../assets/theme";

export const HeaderWrapper = styled.header`

`;

export const HoursWrapper = styled.div`
height: 60px;
align-items: center;
display: flex;  
background: ${colors.primaryGray};
`;

export const Text = styled.p`
color: ${colors.primaryWhite};
font-size: 14px;
margin-left: 185px;
`;

export const TriColorLine = styled.hr`
height: 5px; 
border: none;
margin: 0;
margin-bottom:20px;
background: ${vars.TriLineGradient}; 
`;

export const ContactsWrapper = styled.div`
background: ${colors.primaryWhite};
display: flex;
justify-content: space-between;
align-items: center;
`;
