import { Container } from "../../assets/container"
import { AboutWrapper} from "./styled"
import { Switcher } from "../switcher/switcher"
import { AboutGallery } from "../aboutGallery/aboutGallery"

export const About = () => {
    return (
        <AboutWrapper>
            <Container
                style={{justifyContent: 'space-between' }}
            >
                <Switcher/>
                <AboutGallery/>
            </Container>
        </AboutWrapper>
    )
}