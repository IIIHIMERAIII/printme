import styled from "styled-components";
import { colors, breackPoints } from "../../assets/theme";


export const ProjectsWrapper = styled.section`

`;

export const ProjectsTitle = styled.h4`
font-size: 35px;
text-align: center;
margin-bottom: 20px;

@media screen and (min-width: ${breackPoints.sm}){
    font-size: 50px;
    margin-bottom: 20px;
}
`;

export const ProjectsSybTitle = styled.p`
    font-size: 12px;
    margin-bottom: 20px;

@media screen and (min-width: ${breackPoints.sm}) {
    font-size: 20px;
    text-align: center;
}

`;

export const GalleryWrapper = styled.div`
margin-bottom: 50px;
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
                position: absolute;
                opacity: 1;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                opacity:1;
        }
  }

        //   @media screen and (min-width: ${breackPoints.md}) {
        //         width: 120px;
        //         height: 120px;
        //         top: 35%;
        //         left: 39%;
        //         position: absolute;
        //         opacity: 1;
        //         display: flex;
        //         align-items: center;
        //         justify-content: center;
        //         flex-direction: column;
        //         opacity:1;
        // }
`;


export const HoverTitle = styled.p`
font-size: 20px;
margin-bottom: 10px;
font-weight: 600;
color: ${colors.primaryWhite};
opacity: inherit;

@media screen and (min-width: ${breackPoints.md}) {
    font-size: 50px;
    margin-bottom: 30px;
    font-weight: 600;
    color: ${colors.primaryWhite};
    opacity: inherit;
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

`;