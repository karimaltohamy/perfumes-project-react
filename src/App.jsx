import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";
import { useEffect } from "react";
import ProductDetails from "./pages/productDetails/ProductDetails";
import CheckOut from "./pages/checkout/CheckOut";
import ContactUs from "./pages/contact/ContactUs";
import Login from "./pages/login/Login";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  let defaultLang = localStorage.getItem("i18nextLng");

  useEffect(() => {
    AOS.init();

    if (defaultLang === "ar") {
      document.body.style.direction = "rtl";
    } else {
      document.body.style.direction = "ltr";
    }
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop/:type" element={<Shop />} />
      <Route path="/productDetails/:id" element={<ProductDetails />} />
      <Route path="/checkout/:id" element={<CheckOut />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
