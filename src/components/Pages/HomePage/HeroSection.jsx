import React from "react";
import { ContainerTwoSections } from "../../Layout";
import {
  Header1Text,
  Header2Text,
  Header3Text,
  ButtonPrimary,
  ButtonOutlined,
  Space,
} from "../../Common";

const Section1 = () => (
  <div className=" gap-2 my-10 lg:my-20 flex flex-col justify-between">
    <Header3Text text="If you’re a business owner making from 150k -1M dollars." />
    <Header3Text text="I can help you double your revenue in the next 30-60 days." />
    <Header2Text text="With little to no money, Guaranteed.  " />
    <Header1Text isItPageTitle text="Starting with $2,500 a month." />
    <Space>
      <ButtonPrimary text="Get a Demo" />
      <ButtonOutlined text="Watch a 6-min product Demo" />
    </Space>
  </div>
);
const ImageSection = () => (
  <div className="h-[350px] bg-soft_color_bg my-6 rounded-md">Image</div>
);

// TODO: add image on section 2
const HeroSection = () => {
  return (
    <ContainerTwoSections Section1={<Section1 />} Section2={<ImageSection />} />
  );
};

export default HeroSection;
