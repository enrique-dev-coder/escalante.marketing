import React from "react";
import { PricingBox } from "../../Common";
import { ContainerOneSection } from "../../Layout";
import { services } from "../../../Data/services";

const Content = () => (
  <>
    <h2 className="text-center text-[50px] font-black">Pricing</h2>
    <div className="flex flex-col lg:justify-between lg:flex-row ">
      {services.map((item) => (
        <PricingBox
          plan={item.plan}
          title={item.title}
          priceLineThrough={item.priceLineThrough}
          priceNew={item.priceNew}
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
      addedClasses="lg:my-[50px]"
    />
  );
};

export default PricingPlans;
