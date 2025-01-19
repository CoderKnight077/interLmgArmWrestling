import Navbar from  "./components/Navbar/Navbar";
// import Home from "./components/Home/Home";
import "./App.css"
import Slider from "./components/Slider/Slider";
import ProductCategories from "./components/ProductCategories/ProductCategories";
import ContactUs from "./components/ContactUs/ContactUs";
import FeaturedCategories from "./components/FeaturedCategories/FeaturedCategories";
import Footer from "./components/Footer/Footer";
import ProductSection from "./components/product/ProductSection";
import About from  "./components/about/About";


function App() {
  return (
    <>
      <Navbar/>
      <Slider/>
      {/* <Home/> */}
      <FeaturedCategories/>
      <ProductSection/>
        <About/>
      <ProductCategories/>
      <ContactUs/>
      <Footer/>
    </>
  );
}

export default App;
