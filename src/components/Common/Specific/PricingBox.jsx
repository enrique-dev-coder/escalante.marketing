import React from "react";
import { Header2Text, ButtonPrimary } from "../../Common";

const PricingBox = ({ title, price, included }) => {
  return (
    <article className="border-2 rounded-md border-soft_color_bg py-2 mb-8 lg:w-1/4">
      <div className=" w-5/6 mx-auto flex flex-col space-y-1 ">
        <Header2Text text={title} />
        <Header2Text color="text-primary_headers_purple" text={`${price}/mo`} />
        <ButtonPrimary full text={"Buy"} />
        <p className=" py-2 font-semibold">What´s included</p>
        <>
          {included.map((service, i) => (
            <div
              key={i}
              className="flex space-x-2 items-center content-center w-full "
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#581c87"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </div>
              <p className=" mb-2 text-sm">{service}</p>
            </div>
          ))}
        </>
      </div>
    </article>
  );
};

export default PricingBox;
