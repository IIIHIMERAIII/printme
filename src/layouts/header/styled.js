import styled from "styled-components";
import { colors, vars, breakpoints } from "../../assets/theme";


export const HeaderContainer = styled.header`

`;

export const HeaderWrapper = styled.div`
display: none;
@media screen and (min-width: ${breakpoints.md}) {
    display: inline;
}
`;

export const HoursWrapper = styled.div`
height: 60px;
justify-content: center;
align-items: center;
display: flex;  
background: ${colors.primaryGray};
`;

export const Text = styled.p`
color: ${colors.primaryWhite};
text-align: center;
font-size: 14px;
width: 1200px;
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

export const upButton = styled.button`
display: none;

&.sticky {
    position: fixed;
    width: 50px;
    height: 50px;
    position: fixed;
    left: 95%;
    bottom: 1%;
    background: red;
}
`;
