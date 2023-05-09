import styled from "styled-components";

import { colors } from "../../assets/theme";

export const ContactsWrapper = styled.div`

`;

export const ContactsList = styled.ul`
display: flex;
position: relative;
flex-wrap: wrap;
align-items: center;
justify-content: center;
gap: 40px;
`;

export const ContactsItem = styled.li`
font-size: 20px;
color: ${colors.primartBlack};
height: 40px;

  &:first-child::after {
    content: "";
    position: absolute;
    top: 4px;
    width: 1.5px;
    height: 100%;
    margin-right: 16px;
    background-color: ${colors.primaryGray};
    right:180px;
  }
`;
