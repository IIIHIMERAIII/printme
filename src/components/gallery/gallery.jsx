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
import { Link } from "react-router-dom";
import { Container } from "../../assets/container";

export const Gallery = ({title, array}) => {
    
    console.log(array)
    return (
         <GalleryWrapper>
            <Container style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <GalleryTitle>{title}</GalleryTitle>
                    <CategoryWrapper>
                        <CategoryList>
                            {array.map((item, index) => (
                                <ListItem key={index}>
                                    <Link
                                        to={`/product/${item.productId}`}
                                    >
                                    <NeonWrapper>
                                    <ItemImg
                                        src={item.img}
                                    />
                                    <ItemTitle>{item.title}</ItemTitle>
                                    </NeonWrapper>
                                    </Link>
                                </ListItem>
                            ))}
                        </CategoryList>
                    </CategoryWrapper>
            </Container>
        </GalleryWrapper>
    )
}