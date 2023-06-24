import React, { Fragment, useEffect, useState } from "react";
import "./productDetails.scss";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import imgProduct1 from "../../images/product1.webp";
import imgProduct2 from "../../images/product2.webp";
import imgProduct3 from "../../images/product3.webp";
import imgProduct4 from "../../images/product4.webp";
import imgProduct5 from "../../images/product5.webp";
import imgProduct6 from "../../images/product6.webp";
import imgSecure from "../../images/secure.avif";

import { productsData } from "../../data";
import { AiFillStar } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { BsDash } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { t } from "i18next";

const ProductDetails = () => {
  const { id } = useParams();
  const [singleData, setSingleData] = useState({});
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const images = [
    imgProduct1,
    imgProduct2,
    imgProduct3,
    imgProduct4,
    imgProduct5,
    imgProduct6,
  ];

  useEffect(() => {
    const d = productsData.find((item) => item.id === Number(id));
    setSingleData(d);
  }, []);

  return (
    <Fragment>
      <Header />
      <div className="container mx-auto">
        <div className="product_details">
          <div className="left">
            <div className="image">
              <img
                src={images[activeImage]}
                alt="img-product"
                className="mx-auto w-[80%]"
                data-aos="zoom-in-left"
                data-aos-duration="1000"
                data-aos-delay="300"
              />
            </div>
            <div className="images flex items-center gap-4 justify-center mt-3 flex-wrap">
              {images &&
                images.map((img, index) => {
                  return (
                    <img
                      src={img}
                      alt="img-product"
                      className={`w-[50px] h-[50px] md:w-[70px] md:h-[70px] rounded cursor-pointer ${
                        activeImage === index ? "border border-red-500" : ""
                      }`}
                      onClick={() => setActiveImage(index)}
                      data-aos="fade-left"
                      data-aos-duration="1000"
                      data-aos-delay={`${index}00`}
                    />
                  );
                })}
            </div>
          </div>
          <div className="right">
            <div
              className="stars"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay={`200`}
            >
              {singleData.rating &&
                Array(Math.round(singleData.rating))
                  .fill("")
                  .map((ele) => {
                    return <AiFillStar size={18} />;
                  })}
            </div>
            <h1
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay={`300`}
            >
              {t(singleData.title)}
            </h1>
            <span
              className="price "
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay={`400`}
            >
              ${singleData.price}
            </span>
            <div
              className="details flex items-center gap-2 md:gap-3 flex-wrap py-2 md:py-5"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay={`500`}
            >
              <div className="detail flex items-center gap-2">
                <span className="font-semibold text-[14px] md:text-[17px]">
                  {t("Size")}:
                </span>
                <span className="py-1 px-2 bg-[#F6EBDE] text-[14px] md:text-[14px]">
                  3.5 oz
                </span>
              </div>
              <div className="detail flex items-center gap-2">
                <span className="font-semibold text-[14px] md:text-[17px]">
                  {t("Fragrance2")}:
                </span>
                <span className="py-1 px-2 bg-[#F6EBDE] text-[14px] md:text-[14px]">
                  Cardamom
                </span>
              </div>
              <div className="detail flex items-center gap-2">
                <span className="font-semibold text-[14px] md:text-[17px]">
                  {t("Year Introduced")}:
                </span>
                <span className="py-1 px-2 bg-[#F6EBDE] text-[14px] md:text-[14px]">
                  1972
                </span>
              </div>
              <div className="detail flex items-center gap-2">
                <span className="font-semibold text-[14px] md:text-[17px]">
                  {t("Type")}:
                </span>
                <span className="py-1 px-2 bg-[#F6EBDE] text-[14px] md:text-[14px]">
                  {singleData.type}
                </span>
              </div>
            </div>
            <p
              className="desc"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay={`600`}
            >
              {singleData.desc}
            </p>
            <div
              className="quantity flex items-center my-3"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="700"
            >
              <button
                className="py-1 px-2 md:py-2 md:px-3 bg-[#e32756] text-[white] rounded-sm"
                onClick={() => setQuantity(quantity + 1)}
              >
                <AiOutlinePlus size={20} />
              </button>
              <span className="py-1 px-2 md:py-2 md:px-3">{quantity}</span>
              <button
                className="py-1 px-2 md:py-2 md:px-3 bg-[#e32756] text-[white] rounded-sm"
                onClick={() => setQuantity(quantity == 1 ? 1 : quantity - 1)}
              >
                <BsDash size={20} />
              </button>
            </div>
            <Link
              to={`/checkout/${singleData.id}?quantity=${quantity}`}
              className="btn_cart inline-block mt-[10px] md:mt-[40px]"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay={`800`}
            >
              {t("Buy it now")}
            </Link>
            <div
              className="mt-2 md:mt-5"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay={`900`}
            >
              <h4 className="text-[15px] md:text-[18px] font-semibold">
                {t("100% Secured Payment")}
              </h4>
              <img src={imgSecure} alt="img-secure" className="mt-4 w-full" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default ProductDetails;
