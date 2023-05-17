import styled from "styled-components";
import { colors, breackPoints } from "../../assets/theme";

export const GalleryWrapper = styled.div`
padding-bottom: 120px;
padding-top: 120px;
position: relative;
`;

export const GalleryList = styled.ul`
display: flex;
flex-wrap: wrap;
`;

export const ListItem = styled.li`
margin-bottom: -4px;
width: 33.3%;
position: relative;
overflow: hidden;
transition: all 0.8s ease-in-out;
margin-bottom: 2px;

&::before {
    content: '';
    position: absolute;
    top: 44%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 101%;
    height: 101%;
    background: ${colors.orange};
    transition: all 0.8s ease-in-out;
    opacity: 0;
}

    &:hover::before {
        opacity: 0.8;
    }

@media screen and (min-width: ${breackPoints.sm}) {    
    &::before {
        top: 47%;
    }

@media screen and (min-width: ${breackPoints.xl}) {
    &::before {
        top: 49%;
    }
}

`;

export const ItemImg = styled.img`
width: 100%;
transition: transform 0.3s ease-in-out;
`;

export const HoverWrapper = styled.div`
    opacity: 0;
    display:none;
    text-align: center;
    transition: all 0.8s ease-in-out;

    ${ListItem}:hover & {
        top: 0%;
        left: 30%;
        position: absolute;
        opacity: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        opacity:1;

        @media screen and (min-width: ${breackPoints.sm}) {
            top: 30%;
            left: 42%;
        }
        
        @media screen and (min-width: ${breackPoints.md}) {
            top: -5px;
            left: 30%;
        }

        @media screen and (min-width: ${breackPoints.xl}){
            top: 20%;
            left: 35%;
            width: 35%;
        }
  }
`;


export const HoverTitle = styled.p`
font-size: 20px;
margin-bottom: 10px;
color: ${colors.primaryWhite};
opacity: inherit;

@media screen and (min-width: ${breackPoints.md}) {
    font-size: 50px;
    margin-bottom: 30px;
}

@media screen and (min-width: ${breackPoints.xl}) {
    font-size: 60px;
}
`;

export const HoverBtn = styled.button`
cursor: pointer;
background: transparent;
fill: ${colors.primaryBlack};
border:none;
opacity: inherit;
transition: all 0.5s ease;

&:hover{
    fill: ${colors.primaryWhite};
    transform: scale(1.1);
}
`;

export const HoverBtnSvg = styled.svg`
width: 35px;
height: 30px;
@media screen and (min-width: ${breackPoints.md}) {
    width: 80px;
    height: 80px;
}

@media screen and (min-width: ${breackPoints.xl}) {
    width: 100px;
    height: 100px;
}
`;

export const Img = styled.img`
position: fixed;
top: ${({ isOpen }) => (isOpen ? '50%' : '-100%')};
left: 0;
width: 70%;
height: 65%;
opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
transform: translateY(${({ isOpen }) => (isOpen ? '-50%' : '-100%')});
transition: top 0.5s ease-in-out, opacity 0.5s ease-in-out, visibility 0.5s ease-in-out, transform 0.5s ease-in-out;
justify-content: center;
display: flex;
`;