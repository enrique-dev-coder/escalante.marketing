import React from "react";

const FirstBlock = () => {
  return (
    <article className=" pt-8 bg-center bg-cover bg-no-repeat bg-[url('/img/bg_second_block.png')] ">
      <div className="mx-auto  max-w-7xl  sm:px-6 lg:px-8 h-full flex flex-col justify-between ">
        <h2 className="leading-none w-[90%] lg:w-full mx-auto text-white text-[30px] lg:text-[60px] pt-4 font-black ">
          We're specialized in Maximizing{" "}
          <span className=" text-bright_yellow">ROI</span> and{" "}
          <span className=" text-bright_yellow">PROFIT</span>
        </h2>
        <div className="flex justify-between relative">
          <h2 className=" text-center bg-black/40 rounded-lg absolute top-[70%]  lg:top-[50%] left-[15%]  lg:left-[35%] leading-none text-white text-[30px]  lg:text-[60px] pt-4 font-black lg:w-[25%] ">
            In less than <span className=" text-bright_yellow">90 days</span>
          </h2>
          <div className="flex  items-end">
            <img src="/img/ivan_1.png" alt="ivan escalante" />
          </div>
        </div>
      </div>
    </article>
  );
};

export default FirstBlock;
