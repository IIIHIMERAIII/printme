import styled, {keyframes} from "styled-components";


const pulseAnimation = keyframes`
    0% {
    transform: scale(1);
  }
    10% {
    transform: scale(1.01);
  }
    20% {
    transform: scale(1.02);
  }
    30% {
    transform: scale(1.03);
  }
    40% {
    transform: scale(1.04);
  }
    50% {
    transform: scale(1.05);
  }
    60% {
    transform: scale(1.04);
  }
    70% {
    transform: scale(1.03);
  }
    80% {
    transform: scale(1.02);
  }
    90% {
    transform: scale(1.01);
  }
    100% {
    transform: scale(1);
  }
`;

export const GalleryWrapper = styled.div`
padding-bottom: 300px;
padding-top: 120px;
position: relative;
`;

export const GalleryButton = styled.button`
align-items: center;
justify-content: center;
display: flex;
width: 65px;
height: 65px;
padding: 0;
border: none;
border-radius: 50%;
cursor: pointer;
border-radius: 10px;
animation: ${pulseAnimation} 1.8s infinite;
transition: background 0.5s;


&:hover{
    animation-play-state: paused;
    transform: scale(1.05);
}
`;
