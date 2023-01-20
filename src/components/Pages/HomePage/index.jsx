import React from "react";
import HeroSection from "./HeroSection";
import FirstBlock from "./FirstBlock";
import SecondBlock from "./SecondBlock";
import ThirdBlock from "./ThirdBlock";
import FourthBlock from "./FourthBlock";
import FifthBlock from "./FifthBlock";
import SixthBlock from "./SixthBlock";
import SeventhBlock from "./SeventhBlock";
import PricingPlans from "./PricingPlans";
import EightBlock from "./EightBlock";
import NinthBlock from "./NinthBlock";
import TenthBlock from "./TenthBlock";

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <FirstBlock />
      <SecondBlock />
      <ThirdBlock />
      <FourthBlock />
      <FifthBlock />
      <SixthBlock />
      <SeventhBlock />
      <EightBlock />
      <PricingPlans />
      <NinthBlock />
      <h2 className=" text-center w-[90%] mx-auto  text-[30px] lg:text-[66px] font-black text_shadow_little ">
        Have you heard enough to make a decision?
      </h2>
      <ThirdBlock />
      <TenthBlock />
    </main>
  );
};

export default HomePage;
