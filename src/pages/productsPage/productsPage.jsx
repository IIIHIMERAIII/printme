import { Gallery } from "../../components/gallery/gallery"
import { servicesItems } from "../../assets/arrays"


export const ProductsPage = () => {
    return (
        <>
        <Gallery
            title='Наша продукція'
            array={servicesItems}
        />
        </>
    )
}