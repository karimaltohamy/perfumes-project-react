import React from "react";
import "swiper/css";
import "./hero.scss";
import heroImg3 from "../../images/hero-img3.avif";
import heroImg2 from "../../images/hero-img2.avif";
import circleImg from "../../images/agency_elipse1.png";
import rocketImg from "../../images/agency-rocket.png";
import fligureImg from "../../images/agency_figure.png";

import { useTranslation } from "react-i18next";

import { Link } from "react-router-dom";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <div className="hero">
      <div className="line bg-2">
        <div className="container mx-auto h-full">
          <div className="left">
            <h1
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="300"
            >
              {t("Discover Your Perfect")} <span>{t("Fragrance")}</span>{" "}
            </h1>
            <p
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="500"
            >
              {t("desc hero")}
            </p>
            <Link
              to="/shop/men"
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="700"
            >
              {t("Shop Now")}
            </Link>
            <div className="circle_img">
              <img src={circleImg} alt="circle" />
            </div>
          </div>
          <div className="right">
            <div className="images flex place-items-end justify-center">
              <div
                className="w-[50%] h-full"
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                <span className="circle"></span>
              </div>
              <div
                className="w-[50%] h-full"
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="500"
              >
                <div className="image">
                  <img src={heroImg3} alt="hero-img" className="hero_img1" />
                </div>
              </div>
            </div>

            <div className="images flex items-start justify-end ">
              <div
                className="w-[50%] h-full"
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="700"
              >
                <div className="image">
                  <img src={heroImg2} alt="hero-img" className="hero_img2" />
                </div>
              </div>
              <div
                className="w-[50%] h-full"
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="900"
              >
                <span className="border_circle"></span>
              </div>
            </div>
            <div className="rocket_img">
              <img src={rocketImg} alt="rocket-img" />
            </div>
            <div className="fligure_img">
              <img src={fligureImg} alt="fligure_img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
