import styled from "styled-components";
import { colors, breackPoints} from "../../assets/theme";

export const AboutWrapper = styled.section`
background: ${colors.primaryWhite};
padding-top: 80px;
padding-bottom: 120px;
`;

export const ContentWrapper = styled.div`
@media screen and (min-width: ${breackPoints.xl}) {
    display: flex;
}
`;
