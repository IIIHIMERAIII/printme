import styled from "styled-components";
import { colors, breakpoints} from "../../assets/theme";

export const AboutWrapper = styled.section`
background: ${colors.primaryWhite};
padding-bottom: 120px;
`;

export const ContentWrapper = styled.div`
@media screen and (min-width: ${breakpoints.xl}) {
    display: flex;
    margin-top: 50px;
}
`;
