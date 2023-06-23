import React from "react";
import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import Banner from "../../components/banner/Banner";
import BestSaller from "../../components/bestSaller/BestSaller";
import SectionTypes from "../../components/sectionTypes/SectionTypes";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <Header bgActive={true} />
      <Hero />
      <Banner />
      <BestSaller />
      <SectionTypes />
      <Footer />
    </div>
  );
};

export default Home;
