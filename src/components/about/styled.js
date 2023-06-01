import styled from "styled-components";
import { colors, breakpoints} from "../../assets/theme";

export const AboutWrapper = styled.section`
background: ${colors.primaryWhite};
padding-top: 80px;
padding-bottom: 120px;
margin-top: 50px;
`;

export const ContentWrapper = styled.div`
@media screen and (min-width: ${breakpoints.xl}) {
    display: flex;
    margin-top: 50px;
}
`;
