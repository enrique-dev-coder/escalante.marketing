import React from "react";
import { Header1Text, PricingBox } from "../../Common";
import { ContainerOneSection } from "../../Layout";
import { services } from "../../../Data/services";
const Content = () => (
  <>
    <Header1Text
      isItPageTitle={false}
      text="Pricing Plans"
      text_size="text-4xl"
      text_color="text-primary_headers_purple"
    />
    <div className="flex flex-col lg:justify-between lg:flex-row ">
      {services.map((item) => (
        <PricingBox
          title={item.title}
          price={item.price}
          included={item.included}
        />
      ))}
    </div>
  </>
);

const PricingPlans = () => {
  return (
    <ContainerOneSection
      cetered
      Section={<Content />}
      addedClasses="lg:my-[100px]"
    />
  );
};

export default PricingPlans;
