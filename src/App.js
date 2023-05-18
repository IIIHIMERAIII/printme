import { BrowserRouter, Route, Routes  } from 'react-router-dom';


import { HomePage } from './pages/homePage/home';
import { ProductsPage } from './pages/productsPage/productsPage';
import { Header } from './layouts/header/header';
import { Footer } from './layouts/footer/footer';
import { AboutPage } from './pages/aboutPage/aboutPage';
import { GalleriesPage } from './pages/galleriesPage/galleriesPage';
import { ProductPage } from './pages/productPage/productPage';
import { GalleryPage } from './pages/galleryPage/gelleryPage';

function App() {
  return (
    <BrowserRouter basename="/">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/products" element={<ProductsPage/>} />
        <Route path="/galleries" element={<GalleriesPage/>} />
        <Route path="/about" element={<AboutPage />} />
        <Route path='/product/:id' element={<ProductPage />} />
        <Route path='/gallery/:id' element={<GalleryPage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
