import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { galleryiesItems } from '../../assets/arrays';
import { PreviewGallery } from '../../components/previewGallery/previewGallery';
import { GalleryWrapper } from './styled';

export const GalleriesPage = () => {
    const { pathname } = useLocation();
        
    useEffect(() => {
     window.scrollTo(0, 0);
    }, [pathname]);
    
    return (
        <GalleryWrapper>
            <PreviewGallery
                items={galleryiesItems}
                />
        </GalleryWrapper>
    )
}