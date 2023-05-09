import styled from "styled-components";
import Scrollbars from 'simplebar-react';

export const ScrollBar = styled(Scrollbars)`
margin-left: auto;
width:720px;
cursor: default;
`;

export const ScrollBarList = styled.ul`
padding: 5px 70px 5px 5px;
display: flex;
flex-direction: column;
`;

export const ListItem = styled.li`
padding: 5px;
display: flex;
align-items: center;
margin-top: 80px;

&:last-child {
    margin-bottom: 80px; /* Add the desired margin-bottom value */
  }
`;

export const ItemIcon = styled.svg`
width: 140px;
height: 90px;
`;

export const ItemTitle = styled.p`
font-size: 20px;
`;

export const ItemText = styled.p`
font-size: 16px;
width: 400px;
`;