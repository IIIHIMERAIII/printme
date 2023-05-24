import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors, breakpoints } from "../../assets/theme";

export const GalleryWrapper = styled.div`
margin-bottom: 50px;
`;

export const GalleryList = styled.ul`
display: flex;
flex-wrap: wrap;
justify-content: center;
`;

export const ListItem = styled.li`
width: 33.3%;
position: relative;
overflow: hidden;
transition: all 0.8s ease-in-out;

&::before {
    content: '';
    position: absolute;
    top: 44%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 101%;
    height: 103%;
    background: ${colors.orange};
    transition: all 0.8s ease-in-out;
    opacity: 0;
}

    &:hover::before {
        opacity: 0.9;
    }

@media screen and (min-width: ${breakpoints.sm}) {    
    &::before {
        top: 47%;
    }

@media screen and (min-width: ${breakpoints.xl}) {
    &::before {
        top: 49%;
    }
}

`;

export const ItemImg = styled.img`
width: 100%;
height: 100%;
transition: transform 0.3s ease-in-out;
`;


export const HoverTitle = styled.p`
font-size: 10px;
margin-bottom: 10px;
color: ${colors.primaryWhite};
opacity: inherit;

@media screen and (min-width: ${breakpoints.sm}) {
    font-size: 12px;
    margin-bottom: 30px;
}

@media screen and (min-width: ${breakpoints.md}) {
    font-size: 20px;
    margin-bottom: 30px;
}

@media screen and (min-width: ${breakpoints.xl}) {
    font-size: 35px;
}
`;

export const HoverBtn = styled(Link)`
    
    opacity: 0;
    display:none;
    text-align: center;
    transition: all 0.8s ease-in-out;
    width: 100%;
    height: 100%;
    fill: ${colors.primaryBlack};

    ${ListItem}:hover & {
        top: 0;
        position: absolute;
        opacity: 1;
        align-items: center;
        flex-direction: column;
        opacity:1;
        display: flex;
        justify-content: space-evenly;
    }
`;

export const HoverBtnSvg = styled.svg`
width: 35px;
height: 30px;
fill: inherit;

&:hover{
    fill: ${colors.primaryWhite};
    transform: scale(1.1);
}

@media screen and (min-width: ${breakpoints.md}) {
    width: 50px;
    height: 50px;
}

@media screen and (min-width: ${breakpoints.xl}) {
    width: 100px;
    height: 100px;
}
`;