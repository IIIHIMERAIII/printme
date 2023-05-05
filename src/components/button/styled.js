import styled from "styled-components";
import { colors } from "../../assets/theme";

export const Btn = styled.button`
  border: 0px;
  border-radius: 3px;
  width: 220px;
  height: 90px;
  display: block;
  border-radius: 16px;

  background: linear-gradient(to right, ${colors.pink} 50%, ${colors.orange} 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all .7s ease-out;

  &:hover {
    background-position: left bottom;
    color: white;
    transform: scale(1.05);
    letter-spacing: 1px;
    cursor: pointer;
  }
`;