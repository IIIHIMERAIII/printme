import { Container } from "../../assets/container"
import { AboutWrapper, ContentWrapper} from "./styled"
import { Switcher } from "../switcher/switcher"
import { AboutGallery } from "../aboutGallery/aboutGallery"

export const About = () => {
    return (
        <AboutWrapper>
            <Container>
                <ContentWrapper>
                    <Switcher/>
                    <AboutGallery />
                </ContentWrapper>
            </Container>
        </AboutWrapper>
    )
}