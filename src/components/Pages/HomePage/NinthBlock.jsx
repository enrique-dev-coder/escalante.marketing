import React from "react";
import { PricingBox } from "../../Common";

const services = {
  title: "",
  priceLineThrough: "",
  priceNew: "",
  included: [
    {
      name: "Email Marketing",
      priceLineThrough: "",
      price: "$500 /mo",
    },
    {
      name: "SMS Marketing ",
      priceLineThrough: "",
      price: "$500 /mo",
    },
    {
      name: "Video Recording and Pictures",
      priceLineThrough: "",
      price: "$2,500 /mo",
    },
    {
      name: "Customized and creating strategy funnels ",
      priceLineThrough: "",
      price: "$1,500 /mo",
    },
    {
      name: "Answering and selling team*  per person",
      priceLineThrough: "",
      price: "$1,500 /mo",
    },
    {
      name: "ChatBot ",
      priceLineThrough: "",
      price: "$500 /mo",
    },
    {
      name: "Alexa / google voice apps ",
      priceLineThrough: "",
      price: "$1,000 /mo",
    },
    {
      name: "Website design and development ",
      priceLineThrough: "",
      price: "$2,500 /mo",
    },
    {
      name: "Professional video recording and video 1,250* 1 hour ",
      priceLineThrough: "",
      price: "$1,250 /mo",
    },
    {
      name: "Professional Pictures and 15 deliverables 1,250 1 hour",
      priceLineThrough: "",
      price: "$1,250 /mo",
    },
    {
      name: " ",
      priceLineThrough: "",
      price: "Extras on Contract",
    },
  ],
};

const NinthBlock = () => {
  return (
    <>
      <h2 className="text-center text-[50px] font-black">EXTRAS</h2>
      <div className="flex justify-center my-10">
        <PricingBox
          title={services.title}
          priceLineThrough={services.priceLineThrough}
          priceNew={services.priceNew}
          included={services.included}
        />
      </div>
    </>
  );
};

export default NinthBlock;
