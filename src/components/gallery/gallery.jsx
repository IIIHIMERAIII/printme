import {
    GalleryWrapper,
    GalleryTitle,
    CategoryWrapper,
    CategoryList,
    ItemLink,
    ListItem,
    NeonWrapper,
    ItemImg,
    TitleWrapper,
    ItemTitle,
} from "./styled";
import { Container } from "../../assets/container";

export const Gallery = ({title, array}) => {
    return (
         <GalleryWrapper>
            <Container style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <GalleryTitle>{title}</GalleryTitle>
                    <CategoryWrapper>
                        <CategoryList>
                            {array.map((item, index) => (
                                <ListItem key={index}>
                                    <ItemLink
                                        to={`/product/${item.id}`}
                                    >
                                    <NeonWrapper>
                                    <ItemImg
                                        src={item.img}
                                            />
                                    <TitleWrapper>
                                        <ItemTitle>{item.title}</ItemTitle>
                                    </TitleWrapper>
                                    </NeonWrapper>
                                    </ItemLink>
                                </ListItem>
                            ))}
                        </CategoryList>
                    </CategoryWrapper>
            </Container>
        </GalleryWrapper>
    )
}