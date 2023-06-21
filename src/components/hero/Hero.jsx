import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./hero.scss";
import imgHero from "../../images/img-hero.webp";
import imgHero2 from "../../images/img-hero2.webp";
import imgHero3 from "../../images/img-hero3.webp";
import { useTranslation } from "react-i18next";

import { Link } from "react-router-dom";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <div className="hero">
      <Swiper
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="h-full"
      >
        <SwiperSlide>
          <div className="line bg-2">
            <div className="container mx-auto h-full">
              <div className="left">
                <h1>{t("Best-Perfume")}</h1>
                <p>{t("desc hero")}</p>
                <Link to="/shop/men">{t("Shop Now")}</Link>
              </div>
              <div className="right">
                <div className="image">
                  <img src={imgHero} alt="" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="line bg-1">
            <div className="container mx-auto h-full">
              <div className="left">
                <h1>{t("Best-Perfume")}</h1>
                <p>{t("desc hero")}</p>
                <Link to="/shop/men">{t("Shop Now")}</Link>
              </div>
              <div className="right">
                <div className="image">
                  <img src={imgHero2} alt="" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="line bg-2">
            <div className="container mx-auto h-full">
              <div className="left">
                <h1>{t("Best-Perfume")}</h1>
                <p>{t("desc hero")}</p>
                <Link to="/shop/men">{t("Shop Now")}</Link>
              </div>
              <div className="right">
                <div className="image">
                  <img src={imgHero3} alt="" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
