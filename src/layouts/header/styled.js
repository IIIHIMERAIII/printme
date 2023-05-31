import styled from "styled-components";
import { colors, breakpoints } from "../../assets/theme";


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
border-bottom: 3px solid ${colors.orange};
`;

export const Text = styled.p`
color: ${colors.primaryWhite};
font-family: 'Play',sans-serif;
text-align: center;
font-size: 24px;
`;


export const ContactsWrapper = styled.div`
background: ${colors.primaryWhite};
padding-top: 20px;
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
