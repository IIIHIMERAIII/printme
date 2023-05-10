import styled from "styled-components";
import { colors } from "../../assets/theme";


export const ProjectsWrapper = styled.section`

`;

export const ProjectsTitle = styled.h4`
font-size: 50px;
text-align: center;
margin-bottom: 20px;
`;

export const ProjectsSybTitle = styled.p`
font-size: 20px;
text-align: center;
margin-bottom: 20px;
`;

export const GalleryWrapper = styled.div`
margin-bottom: 50px;
`;

export const GalleryList = styled.ul`
display: flex;
flex-wrap: wrap;
`;

export const ListItem = styled.li`
margin-bottom: -3px;
width: 33.3%;
position: relative;
overflow: hidden;
transition: all 0.8s ease-in-out;

&::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 101%;
    height: 101%;
    background: ${colors.primaryWhite};
    transition: all 0.8s ease-in-out;
    opacity: 0;
}

    &:hover::before {
        opacity: 1;
    }

`;

export const ItemImg = styled.img`
width: 100%;
transition: transform 0.3s ease-in-out;
`;

export const HoverWrapper = styled.div`
    z-index: 2;
    opacity: 0;
    display:none;
    text-align: center;
    transition: all 0.8s ease-in-out;

    ${ListItem}:hover & {
        width: 120px;
        height: 120px;
        top: 35%;
        left: 39%;
        position: absolute;
        opacity: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

  }
`;


export const HoverTitle = styled.p`
font-size: 50px;
margin-bottom: 30px;
font-weight: 600;
color: ${colors.orange}
`;

export const HoverBtn = styled.button`
cursor: pointer;
background: transparent;
border:none;

&:hover{
    fill: ${colors.orange};
}
`;

export const HoverBtnSvg = styled.svg`
width: 80px;
height: 80px;

`;