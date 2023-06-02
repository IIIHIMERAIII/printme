import { Container } from "../../assets/container"
import { PageWrapper, ErrorWrapper, Title, ErrorImg } from "./styled"

import err from '../../images/notFound.webp';


export const NotFoundPage = () => {
    return (
        <PageWrapper>
            <Container>
                <ErrorWrapper>
                <Title>
                    Вибачте, але щось пішло не так, сторінку за посиланням не знайдено.
                </Title>
                <ErrorImg
                    src={err}
                />
                </ErrorWrapper>
            </Container>
        </PageWrapper>
    )
}