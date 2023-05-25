import styled, { css, keyframes} from "styled-components";
import {colors, breakpoints} from '../../assets/theme'

export const GalleryWrapper = styled.div`
margin-top: 50px;

@media screen and (min-width: ${breakpoints.md}) {
  margin-top: 20;
}
`;

// items animations

const itemGrowUp = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
`;


export const MainImg = styled.img`
height: 220px;
width: 100%;
margin-bottom: 20px;
transition: opacity ${(props) => props.transitionDuration}ms ease-in-out;

  ${(props) =>
    props.isTransitioning &&
    css`
      opacity: 0;
    `}

@media screen and (min-width: ${breakpoints.sm}) {
  height: 330px;
}


@media screen and (min-width: ${breakpoints.md}){
  height: 400px;
  width: 100%;
  margin-bottom: 20px;
}
`;

export const GalleryList = styled.ul`
gap: 10px;
display: flex;
`;



export const ListItem = styled.li`

`;

export const ItemImg = styled.img`
width: 100%;
height: 80px;
cursor:pointer;

border: 2px solid transparent; 

  ${(props) =>
    props.isSelected &&
    css`
      border-color: ${colors.orange}; 
    `}


&:hover {
    animation: ${itemGrowUp} 0.2s ease-in-out;
    transform: scale(1.1);
}

@media screen and (min-width: ${breakpoints.sm}) {
  height: 120px;
}

@media screen and (min-width: ${breakpoints.md}) {
  height: 150px;
}
`;