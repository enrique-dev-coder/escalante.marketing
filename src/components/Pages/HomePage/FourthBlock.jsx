import React from "react";

const FourthBlock = () => {
  return (
    <article className=" pt-8 bg-center bg-cover bg-no-repeat bg-[url('/img/bg_fourth_block.png')] ">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 h-full flex flex-col justify-between ">
        <h2 className="leading-none w-[90%] mx-auto  text-black text-[30px] lg:text-[60px] pt-4 font-black  lg:w-[100%]">
          Get my FREE 7 step Process On how to Profit from social media
        </h2>
        <div className="flex justify-between relative">
          <div className="flex  items-end">
            <img src="/img/ivan_2.png" alt="ivan escalante" />
          </div>
          <div>
            <div className="flex flex-col justify-center h-full lg:justify-start">
              <img src="/img/ad.png" alt="link here" />
              <button className=" bg-primary_button_color font-bold  lg:text-[50px] text-white py-2 px-8   rounded-full">
                Link Here
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default FourthBlock;
