import styled from "styled-components";
import { colors, vars, breackPoints } from "../../assets/theme";

export const HeaderWrapper = styled.header`
display: none;
@media screen and (min-width: ${breackPoints.md}) {
    display: inline;
}
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
text-align: start;
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
