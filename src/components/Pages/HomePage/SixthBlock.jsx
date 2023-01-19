import React from "react";

const SixthBlock = () => {
  return (
    <>
      <article className=" pt-8 bg-center bg-cover bg-no-repeat ">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 h-full flex flex-col justify-between ">
          <h2 className="leading-none background_clip mx-auto text-center bg-primary_bg rounded-full text-white text-[40px] lg:text-[60px] pt-4 font-black  lg:w-[80%]">
            To then apply solutions in your social media
          </h2>
        </div>
        <img
          src="/img/social_media_2.png"
          className="mx-auto py-8"
          alt="social media"
        />
      </article>
      <div className="h-[300px]  bg-center bg-[url('/img/graphic.png')] bg-no-repeat bg-cover ">
        <div className="mx-auto  max-w-7xl px-2 sm:px-6 lg:px-8 h-full flex flex-col  items-center justify-center ">
          <h2 className="leading-none background_clip mx-auto    rounded-full text-black text-[40px] lg:text-[60px] pt-4 font-black  lg:w-[60%]">
            For your company to <span className="text-bright_yellow">Grow</span>{" "}
            like this:
          </h2>
        </div>
      </div>
    </>
  );
};

export default SixthBlock;
