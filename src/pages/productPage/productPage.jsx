import React, { useEffect } from 'react';
import { useLocation,  useParams } from 'react-router-dom';
import { servicesItems } from "../../assets/arrays";
import { ProductWrapper, ProductCard, AnimationWrapper, NeonWrapper, TitleWrapper, ProductImg, ProductTitle, ProductDescr } from "./pageStyled";
import { Container } from "../../assets/container";


export const ProductPage = () => {
    const { id } = useParams();
    let product = servicesItems.find(item => item.id === id);
    const { pathname } = useLocation();

    useEffect(() => {
     window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <ProductWrapper>
            <Container>
                <ProductCard>
                    <AnimationWrapper>
                    <NeonWrapper>
                        <ProductImg src={product.img} alt="4" />
                    </NeonWrapper>
                    </AnimationWrapper>
                    <TitleWrapper>
                        <ProductTitle>{product.title}</ProductTitle>
                        <ProductDescr>{product.descr}</ProductDescr>
                    </TitleWrapper>
                </ProductCard>
            </Container>
            </ProductWrapper>
    )
}