import styled from "styled-components";
import Scrollbars from 'simplebar-react';
import { colors } from "../../assets/theme";


export const ScrollBar = styled(Scrollbars)`
margin-left: auto;
width:60%;
cursor: default;
background: ${colors.primaryWhite};
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
width: 100%;

&:last-child {
    margin-bottom: 80px; 
  }
`;


export const ItemTetxWrapper = styled.div`
align-items: center;
justify-content: center;
display: flex;
width: 100%;
gap: 20px;

&:before{
  content: '';
  background-image: url(${props => props.icon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 23%;
  height: 134px;
}
`;

export const ItemTitle = styled.p`
font-size: 22px;
width: 20%; 
`;

export const ItemText = styled.p`
font-size: 18px;
width: 100%;
`;