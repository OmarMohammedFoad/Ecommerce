import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import ProductList from "./components/Productlist";
import {BrowserRouter ,Routes, Route } from "react-router-dom";
import About from "../src/components/About"
import ProductDetails from "../src/components/ProductDetails"
import Footer from "./components/Footer" 
export default function App ()
{
    return(
      <div className="App">
      <Navbar/>
      <BrowserRouter>
      <Routes>  
      <Route path="/" element={<>
     
      
      <ProductList/>
      </> }/>
       <Route path="/product/:productid" element={<>  <ProductDetails/> </>}/>  
       <Route path="/about" element={<>
       <About/>
       </>}   />
      </Routes>
    </BrowserRouter>
    <Footer/>
    
    </div>
    );
}