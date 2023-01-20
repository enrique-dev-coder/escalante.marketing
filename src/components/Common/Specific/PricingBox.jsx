import React from "react";

const PricingBox = ({ title, priceLineThrough, included, priceNew, plan }) => {
  return (
    <article className="border-2 rounded-md border-soft_color_bg py-2 mb-8 lg:w-[32%]">
      <div className=" w-5/6 mx-auto h-full flex flex-col space-y-1 ">
        <div className="flex-1">
          <h2 className="font-bold text-center text-[30px]">{title}</h2>
          <div>
            <div className="text-center flex space-x-2  flex-col text-[25px] px-3">
              <div className="flex justify-center py-4">
                <div className="relative">
                  <p className="text-[18px]  leading-none">Starting at...</p>
                  <h2 className=" line-through text-[23px] leading-none">
                    {priceLineThrough}
                  </h2>{" "}
                </div>
                <h2 className="font-black text-[30px]">{priceNew}</h2>
              </div>
              <div>
                <button className=" bg-black text-bright_yellow  button_shadow px-3 rounded-lg font-bold  text-center lg:text-left ">
                  Buy now
                </button>
              </div>
            </div>
          </div>
          <p className=" py-2 text-[24px] font-bold text-primary_bg">
            {plan === "BASIC" && "What´s included:"}
            {plan === "PREMIUM" && "Everything BASIC has,PLUS:"}
            {plan === "PLUS" && "Everything PREMIUM has,PLUS:"}
          </p>
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
                <div className="flex w-full">
                  <div className=" mb-2 text-sm flex-1">
                    <p className="w-[90%] font-semibold">{service.name}</p>
                  </div>
                  <p>
                    <span className=" line-through text-red">
                      {service.priceLineThrough}
                    </span>{" "}
                    <span className="font-black text-green_1">
                      {service.price}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </>
        </div>
      </div>
    </article>
  );
};

export default PricingBox;
