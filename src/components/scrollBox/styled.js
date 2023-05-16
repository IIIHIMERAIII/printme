import styled from "styled-components";
import Scrollbars from 'simplebar-react';
import { colors, breackPoints } from "../../assets/theme";


export const ScrollBar = styled(Scrollbars)`
width: 100%;
cursor: default;
background: ${colors.primaryWhite};
border-radius: 8px;

@media screen and (min-width: ${breackPoints.md}){
  margin-left: auto;
  width:60%;
  cursor: default;
  border-radius: 0;
  background: ${colors.primaryWhite};
}
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
font-size: 16px;

@media screen and (min-width: ${breackPoints.md}) {
  width: 20%; 
  font-size: 22px;
}
`;

export const ItemText = styled.p`
font-size: 11px;

@media screen and (min-width: ${breackPoints.md}) {
  font-size: 22px;
  font-size: 18px;
  width: 100%;
}
`;