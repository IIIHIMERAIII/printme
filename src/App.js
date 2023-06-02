import React, { lazy, Suspense} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Header } from './layouts/header/header';
import { Footer } from './layouts/footer/footer';
import { Loader } from './components/loader/loader';

const HomePage = lazy(() => import('./pages/homePage/home').then(module => ({ default: module.HomePage })));
const ProductsPage = lazy(() => import('./pages/productsPage/productsPage').then(module => ({ default: module.ProductsPage })));
const GalleriesPage = lazy(() => import('./pages/galleriesPage/galleriesPage').then(module => ({ default: module.GalleriesPage })));
const AboutPage = lazy(() => import('./pages/aboutPage/aboutPage').then(module => ({ default: module.AboutPage })));
const ProductPage = lazy(() => import('./pages/productPage/productPage').then(module => ({ default: module.ProductPage })));
const GalleryPage = lazy(() => import('./pages/galleryPage/gelleryPage').then(module => ({ default: module.GalleryPage })));
const DocPage = lazy(() => import('./pages/docPage/docPage').then(module => ({ default: module.DocPage })));
const NotFoundPage = lazy(() => import('./pages/notFoundPage/notFoundPage').then(module => ({ default: module.NotFoundPage })));

function App() {  
  return (
    <BrowserRouter basename="/">
      <Header />
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/galleries" element={<GalleriesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/gallery/:id" element={<GalleryPage />} />
          <Route path="/documentation" element={<DocPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;