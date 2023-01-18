import React from "react";
import { InlineWidget } from "react-calendly";

const ThirdBlock = () => {
  return (
    <article>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 h-full flex flex-col justify-center py-4 ">
        <h2 className="text-black text-[40px] lg:text-[60px] font-black leading-none w-[80%] mx-auto text-center text_shadow_little">
          Book your <span className=" text-bright_yellow">FREE</span> 30 minute
          strategy session with me.{" "}
        </h2>
        {/*Calendly widget*/}
      </div>
      <div className="h-[95vh] relative bg-[url('/img/hands.png')] bg-center bg-cover  bg-no-repeat">
        <img
          src="/img/right_arrow.png"
          className="hidden lg:block absolute right-[15%] -top-[50px]"
        />
        <img
          src="/img/left_arrow.png"
          className="hidden lg:block absolute left-[15%] -top-[50px] "
        />
        <InlineWidget
          styles={{
            height: "95vh",
          }}
          url="https://calendly.com/escalante-marketing/30-minute-free-strategy-call"
        />
      </div>
    </article>
  );
};

export default ThirdBlock;
