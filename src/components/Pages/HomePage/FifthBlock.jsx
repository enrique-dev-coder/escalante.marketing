import React from "react";

const FifthBlock = () => {
  return (
    <>
      <article className=" py-8 relative bg-center bg-cover bg-no-repeat bg-[url('/img/bg_fifth_block.png')] ">
        <div className="relative mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 h-full flex flex-col justify-between ">
          <h2 className="leading-none  text-black text-[40px] lg:text-[60px] pt-4 font-black  lg:w-[80%]">
            We run data analysis of your:
          </h2>
          <ul className="font-black z-10 text-black text-[40px] W-[90%] lg:w-full mx-auto lg:text-[50px] list-disc">
            <li>Posts behavior</li>
            <li>Lead generation</li>
            <li>Qualifying Rate</li>
            <li>Closing Rate</li>
            <li>Engagement</li>
            <li>SEO</li>
            <li>And more...</li>
          </ul>
        </div>
        <img
          src="/img/social_media_1.png"
          alt="social media"
          className="hidden md:block absolute right-0  bottom-0"
        />
      </article>
      <img
        src="/img/social_media_1.png"
        alt="social media"
        className="md:hidden block"
      />
    </>
  );
};

export default FifthBlock;
