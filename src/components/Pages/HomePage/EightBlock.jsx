import React from "react";
import { PricingBox } from "../../Common";

const services = {
  title: "Immediate Setup and Optimization",
  priceLineThrough: "$2500",
  priceNew: "FREE",
  included: [
    {
      name: "Detailed research and competitive analysis",
      priceLineThrough: "$1500",
      price: "Waived",
    },
    {
      name: "Customized advertising plan and account setup ",
      priceLineThrough: "$1000",
      price: "Waived",
    },
    {
      name: "Customized social media plan strategy and account setup",
      priceLineThrough: "$1000",
      price: "Waived",
    },
    {
      name: "Customized internal sales strategy and account setup",
      priceLineThrough: "$1000",
      price: "Waived",
    },
  ],
};

const EightBlock = () => {
  return (
    <div className="flex w-5/6 mx-auto justify-center my-10">
      <PricingBox
        title={services.title}
        priceLineThrough={services.priceLineThrough}
        priceNew={services.priceNew}
        included={services.included}
      />
    </div>
  );
};

export default EightBlock;
