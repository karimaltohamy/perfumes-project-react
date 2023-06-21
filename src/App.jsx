import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Shop from "./pages/home/shop/Shop";
import { useEffect } from "react";
import ProductDetails from "./pages/productDetails/ProductDetails";

function App() {
  let defaultLang = localStorage.getItem("i18nextLng");

  useEffect(() => {
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
    </Routes>
  );
}

export default App;
