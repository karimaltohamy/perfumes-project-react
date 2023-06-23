import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useParams } from "react-router-dom";
import { data } from "autoprefixer";
import { productsData } from "../../data";
import ProductCard from "../../components/productCard/ProductCard";
import SecoundHero from "../../components/secoundHero/SecoundHero";

const Shop = () => {
  const { type } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const d = productsData.filter((item) => item.type === type);
    setData(d);
    console.log(data);
  }, [type]);

  return (
    <div>
      <Header />
      <div className="">
        <SecoundHero title={"Shop"} page={"Shop"} />
        <div className="container mx-auto my-[50px]">
          <div className="flex items-center gap-[30px] mb-[25px]">
            <div className="input_item flex items-center gap-3">
              <label htmlFor="">Sort By</label>
              <select name="" id="">
                <option value="featured">Featured</option>
                <option value="best-selling">Best Selling</option>
              </select>
            </div>
            <p>
              Showing 1 - {data.length} of {data.length} result
            </p>
          </div>
          <div className="products grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-[30px]">
            {data.length === 0
              ? "Loading..."
              : data.map((item, i) => {
                  return <ProductCard item={item} key={i} />;
                })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
