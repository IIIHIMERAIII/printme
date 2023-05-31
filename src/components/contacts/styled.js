import styled from "styled-components";

import { colors, breakpoints } from "../../assets/theme";

export const ContactsWrapper = styled.div`

`;

export const ContactsList = styled.ul`
display: flex;
justify-content: flex-start;
position: relative;
flex-wrap: wrap;
align-items: center;
margin-left: 50px;
gap: 40px;


  @media screen and (min-width: ${breakpoints.xl}){
      justify-content: center;
      margin-left: 0;
  }
`;

export const ContactsItem = styled.li`
font-size: 25px;
color: ${colors.primaryBlack};
height: 40px;
font-family: 'Play',sans-serif;

  @media screen and (min-width: ${breakpoints.xl}) {
      &:first-child::after {
      content: "";
      position: absolute;
      top: 4px;
      width: 1.5px;
      height: 144%;
      margin-right: 60px;
      background-color: ${colors.primaryGray};
      right:180px;
    }
  }
`;
