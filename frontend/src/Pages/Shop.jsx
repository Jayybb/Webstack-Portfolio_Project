import React from 'react';
import Hero from '../Components/Hero/Hero';
import Offers from '../Components/Offers/Offers';
import NewCollections from '../Components/NewCollections/NewCollections';
import NewsLetter from '../Components/NewsLetter/NewsLetter';
import Footer from '../Components/Footer/Footer';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Shop = () => {
  return (
    <div>
      <Hero />
      <Offers />
      <NewCollections />
      <RelatedProducts />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default Shop;
