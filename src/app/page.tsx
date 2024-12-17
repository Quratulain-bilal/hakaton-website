 


import Hero from "./Components/Landingpage/Hero";
import GalleryImages from "./Components/Landingpage/GalleryImages";
import Cards from "./Components/Landingpage/Cards"; 
import Product from "./Components/Landingpage/Product";
import Blog from "./Components/Landingpage/Blog";
import Instra from "./Components/Landingpage/Instra" ;

import ProductDetails from "./Components/Singleproduct/ProductDetails";
import Account from "./Components/Account/Account";
import Blogdata from "./Components/Blogpage/Blogdata"
import Checkout from "./Components/checkout/Checkout";

import Shoppage from "./Components/shop/Shoppage" ;
import Cart from "./Components/Cart"






export default function Home() {
  return (
    <div>
      <Cart />
      <Hero />
      <GalleryImages />
      <Cards />
      <Product />
      <Blog />
      <Instra />
      
      

    
      <Account />
      <Blogdata />
      <Checkout />
      <Shoppage />
      <ProductDetails />

      
    </div>
  );
}
