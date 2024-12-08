 

import Navbar from "./Components/Navbar";
import Hero from "./Components/Landingpage/Hero";
import GalleryImages from "./Components/Landingpage/GalleryImages";
import Cards from "./Components/Landingpage/Cards"; 
import Product from "./Components/Landingpage/Product";
import Blog from "./Components/Landingpage/Blog";
import Instra from "./Components/Landingpage/Instra" ;
import Contact from "./Components/Contact";
import Cart from "./Components/Cart";
import ProductDetails from "./Components/Singleproduct/ProductDetails";
import Account from "./Components/Account";
import Blogdata from "./Components/Blogpage/Blogdata"
import Checkout from "./Components/Checkout";
import Productinfo from "./Components/Singleproduct/Productinfo"
import Shoppage from "./Components/shop/Shoppage" ;
import Footer from "./Components/Footer";




export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <GalleryImages />
      <Cards />
      <Product />
      <Blog />
      <Instra />
      <Contact />
      <Footer/>

      <Productinfo />
      <Account />
      <Blogdata />
      <Checkout />
      <Shoppage />
      <Cart />
      <ProductDetails />
    </div>
  );
}
