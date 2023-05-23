import {
    DocPageWrapper,
    PageTitle,
    PageSubTitle,
    ImgLink,
    Img,
    GovLink,
    Text,
} from "./styled";
import { Container } from "../../assets/container";
import { text } from "../../assets/text";
import gov from '../../images/gov.webp';

export const DocPage = () => {
    return (
        <DocPageWrapper>
            <Container style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <PageTitle>Доможемо у виготовленні документів</PageTitle>
                <PageSubTitle>{text.doc}</PageSubTitle>
                    <GovLink href='https://zakon.rada.gov.ua/laws/show/2067-2003-%D0%BF#Text' target='_blank' rel="noreferrer">
                            Читати на офіційному порталі
                    </GovLink>
                <ImgLink href='https://zakon.rada.gov.ua/laws/show/2067-2003-%D0%BF#Text' target='_blank' rel="noreferrer">
                    <Img
                    src={gov}
                    />
                </ImgLink>
                <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet voluptas animi, sunt nobis, modi, illo aliquam suscipit minima provident ipsum ex dolores natus! Nesciunt, quam! Magnam, beatae recusandae, laboriosam culpa impedit voluptatibus blanditiis id enim quo amet quia qui pariatur reiciendis ad, temporibus veniam distinctio vel? Similique necessitatibus numquam accusamus!</Text>
            </Container>
        </DocPageWrapper>
    )
}