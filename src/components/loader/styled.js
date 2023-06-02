import styled, {keyframes} from "styled-components";
import { colors } from "../../assets/theme";

const ldsDualRing = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LouderWrapper = styled.div`
padding-top: 400px;
padding-bottom: 400px;
background: white;
`;

export const Spiner = styled.div`
  display: inline-block;
  width: 100px;
  height: 100px;

  &:after {
    content: ' ';
    display: block;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 15px solid ${colors.orange};
    border-color: ${colors.orange} transparent ${colors.orange} transparent;
    animation: ${ldsDualRing} 1.2s linear infinite;
  }
`;

