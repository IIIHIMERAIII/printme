import styled from "styled-components";
import Scrollbars from 'simplebar-react';
import { colors, breakpoints } from "../../assets/theme";


export const ScrollBar = styled(Scrollbars)`
width: 100%;
cursor: default;
background: ${colors.primaryWhite};
border-radius: 8px;

@media screen and (min-width: ${breakpoints.md}){
  margin-left: auto;
  width:60%;
  cursor: default;
  border-radius: 8;
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
width: 100%;

@media screen and (min-width: ${breakpoints.md}) {
  margin: 30px 0;
}
`;


export const ItemTetxWrapper = styled.div`
justify-content: center;
display: flex;
width: 100%;
gap: 20px;


@media screen and (min-width: ${breakpoints.sm}) {
  align-items: center;
  &:before{
  content: '';
  background-image: url(${props => props.icon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 15%;
  height: 134px;
}
}
`;

export const ItemTitle = styled.p`
font-size: 16px;
width: 30%;

@media screen and (min-width: ${breakpoints.sm}) {
  width:20%;
}

@media screen and (min-width: ${breakpoints.xl}) {
  width: 20%; 
  font-size: 30px;
}
`;

export const ItemText = styled.p`
font-size: 11px;
width:50%;


@media screen and (min-width: ${breakpoints.sm}) {
  width:50%;
}

@media screen and (min-width: ${breakpoints.xl}) {
  font-size: 18px;
  width: 80%;
}
`;