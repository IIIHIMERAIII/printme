import styled from "styled-components";
import { breackPoints } from "../../assets/theme";

export const SwitcherWrapper = styled.div`
// width: 500px;
`;

export const SwitcherTitle = styled.h3`
font-size: 35px;

@media screen and (min-width: ${breackPoints.md}) {
font-size: 50px;
}
`;

export const BtnWrapper = styled.div`
    margin-top:10px;
    display: flex;
    flex-direction: column;
    gap: 12px;

@media screen and (min-width: ${breackPoints.md} {
    justify-content: space-between;
    align-items: center;
    display: flex;
    height: 40px;
    margin-top:20px;
}
`;

export const ContentWrapper = styled.div`
margin-top: 30px;
margin-bottom: 40px;

@media screen and (min-width: ${breackPoints.md} {
    margin-top: 70px;
    margin-bottom: 80px;
}
`;