import React from "react";

const PricingBox = ({ title, priceLineThrough, included, priceNew }) => {
  return (
    <article className="border-2 rounded-md border-soft_color_bg py-2 mb-8 lg:w-[32%]">
      <div className=" w-5/6 mx-auto h-full flex flex-col space-y-1 ">
        <div className="flex-1">
          <h2 className="font-bold text-center text-[30px]">{title}</h2>
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
        <button className="bg-bright_yellow rounded-lg">
          <div className="text-center flex space-x-2 lg:flex-row flex-col text-[25px] px-3">
            <h2 className=" font-black flex-1 text-center lg:text-left ">
              Book now
            </h2>
            <div className="flex justify-center">
              <h2 className=" line-through text-red">{priceLineThrough}</h2>{" "}
              <h2 className="font-black text-green_1">{priceNew}</h2>
            </div>
          </div>
        </button>
      </div>
    </article>
  );
};

export default PricingBox;
