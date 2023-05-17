import { PhotoGallery } from "../../components/photoGallery/photoGallery"

import p1 from '../../images/p1.jpg';
import p2 from '../../images/p2.jpg';
import p3 from '../../images/p3.jpg';
import p4 from '../../images/p4.jpg';
import p5 from '../../images/p5.jpg';
import p6 from '../../images/p6.jpg';

 const items = [ 
    { img: p1, title: 'Title' , id:1 },
    { img: p2, title: 'Title' , id:2 },
    { img: p3, title: 'Title' , id:3 },
    { img: p4, title: 'Title' , id:4 },
    { img: p5, title: 'Title' , id:5 },
    { img: p6, title: 'Title' , id:6 },
    { img: p1, title: 'Title' , id:7 },
    { img: p2, title: 'Title' , id:8 },
    { img: p3, title: 'Title' , id:9 },
    { img: p4, title: 'Title' , id:10 },
    { img: p5, title: 'Title' , id: 11},
    { img: p6, title: 'Title' , id:12 },
    { img: p1, title: 'Title' , id:13 },
    { img: p2, title: 'Title' , id:14 },
    { img: p3, title: 'Title' , id:15 },
    { img: p4, title: 'Title' , id:16 },
    { img: p5, title: 'Title' , id: 17},
    { img: p6, title: 'Title' , id: 18},
    { img: p1, title: 'Title' , id: 19},
    { img: p2, title: 'Title' , id: 20},
    { img: p3, title: 'Title' , id: 21},
    { img: p4, title: 'Title' , id: 22},
    { img: p5, title: 'Title' , id: 23},
    { img: p6, title: 'Title' , id: 24},
];




export const GalleryPage = () => {
    return (
        <>
            <PhotoGallery
                items={items}
            />
        </>
    )
}