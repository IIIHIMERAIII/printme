import React, { useEffect } from 'react';
import { useLocation,  useParams } from 'react-router-dom';
import { servicesItems } from "../../assets/arrays";
import { ProductWrapper, ProductCard, AnimationWrapper, NeonWrapper, TitleWrapper, ProductImg, ProductTitle, ProductDescr } from "./pageStyled";
import { Container } from "../../assets/container";


export const ProductPage = () => {
    const { id } = useParams();
    const productId = parseInt(id, 10);
    const product = servicesItems.find(item => item.productId === productId);
    const { pathname } = useLocation();

    useEffect(() => {
     window.scrollTo(0, 0);
    }, [pathname]);


    console.log(servicesItems)

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
                        <ProductDescr>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, quasi. Aliquam, corporis. Beatae repellat amet doloribus nesciunt aspernatur? Laborum totam, excepturi iste quo quam, quidem voluptate amet dignissimos enim facere facilis sed beatae numquam tempora reiciendis, culpa recusandae minus quod animi. Necessitatibus, dicta iste quod voluptatem, similique odit pariatur placeat consequuntur deserunt quasi obcaecati corrupti nemo. Officiis sint nam eos.</ProductDescr>
                    </TitleWrapper>
                </ProductCard>
            </Container>
            </ProductWrapper>
    )
}