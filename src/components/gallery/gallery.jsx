import {
    GalleryWrapper,
    GalleryTitle,
    CategoryWrapper,
    CategoryList,
    ListItem,
    NeonWrapper,
    ItemImg,
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
                                    <NeonWrapper>
                                    <ItemImg
                                        src={item.img}
                                    />
                                    <ItemTitle>{item.title}</ItemTitle>
                                    </NeonWrapper>     
                                </ListItem>
                            ))}
                        </CategoryList>
                    </CategoryWrapper>
            </Container>
        </GalleryWrapper>
    )
}