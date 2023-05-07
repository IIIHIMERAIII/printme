import styled from "styled-components";
import Scrollbars from 'simplebar-react';

export const ScrollBar = styled(Scrollbars)`
margin-left: auto;
margin-right: 20px;
width:610px;
cursor: default;
`;

export const ScrollBarList = styled.ul`
padding: 5px 45px 5px 5px;
gap: 35px;
display: flex;
flex-direction: column;
`;

export const ListItem = styled.li`
padding: 5px;
display: flex;
align-items: center;
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
width: 420px;
height: 150px;
`;