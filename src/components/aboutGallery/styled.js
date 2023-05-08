import styled, { css, keyframes} from "styled-components";
import {colors} from '../../assets/theme'

export const GalleryWrapper = styled.div`

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
height: 330px;
width: 630px;
margin-bottom: 20px;
transition: opacity ${(props) => props.transitionDuration}ms ease-in-out;

  ${(props) =>
    props.isTransitioning &&
    css`
      opacity: 0;
    `}
`;

export const GalleryList = styled.ul`
gap: 10px;
display: flex;
`;



export const ListItem = styled.li`

`;

export const ItemImg = styled.img`
width: 150px;
height: 120px;
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
`;