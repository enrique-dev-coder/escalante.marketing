import React from "react";
import HeroSection from "./HeroSection";
import Banner from "./Banner";
import FirstBlock from "./FirstBlock";
import SecondBlock from "./SecondBlock";
import SecondBanner from "./SecondBanner";
import ThirdBlock from "./ThirdBlock";
import PricingPlans from "./PricingPlans";

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <Banner />
      <FirstBlock />
      <SecondBlock />
      <SecondBanner />
      <ThirdBlock />
      <PricingPlans />
    </main>
  );
};

export default HomePage;
