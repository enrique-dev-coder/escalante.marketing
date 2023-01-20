import React from "react";

const SeventhBlock = () => {
  return (
    <div className="relative">
      <article className=" py-8 z-0 relative bg-center bg-cover bg-no-repeat bg-[url('/img/bg_seventh_block.png')] ">
        <div className="relative w-[90%] mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 h-full flex flex-col justify-between ">
          <h2 className="leading-none lg:mx-auto text-center  bg-primary_bg rounded-full text-white text-[30px] lg:text-[60px] pt-4 font-black  lg:w-[80%]">
            While we do this
          </h2>
          <div className="flex justify-center ">
            <ul className="font-black  w-[90%] lg:w-full mx-auto z-10 text_shadow_little  text-white text-[24px] lg:text-[50px] list-disc">
              <li>Posting</li>
              <li>Videos and images</li>
              <li>Content Creating</li>
              <li>Ads and optimizing</li>
              <li>Research</li>
              <li>Engaging with customers</li>
              <li>Deleting bad comments</li>
            </ul>
          </div>
        </div>
      </article>
      <div className="bg-[url('/img/notes.png')] relative h-[400px] z-10 bg-no-repeat bg-cover bg-center">
        <div className="w-full flex justify-center">
          <div className="bg-primary_bg rounded-full w-[300px] lg:w-fit mx-auto  absolute -top-5 z-20">
            <h2 className="leading-none background_clip mx-auto text-center   text-white text-[30px] lg:text-[60px] py-2 font-black  lg:w-[80%]">
              For as low as <span className=" text-bright_yellow">$2,500*</span>
            </h2>
          </div>
        </div>
        <div className="relative w-[90%] mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 h-full flex flex-col lg:flex-row ">
          <div className="lg:w-[50%] h-full flex  items-center">
            {" "}
            <h2 className="font-black z-10 text_shadow_little text-center  text-white text-[30px]  mt-10 lg:text-[50px]">
              Book your 30 min <span className=" text-bright_yellow">FREE</span>{" "}
              Strategy Session NOW!
            </h2>{" "}
          </div>
          <div className="lg:w-[50%] h-full flex  items-center justify-center">
            <button className=" bg-primary_button_color font-bold text-[30px] lg:text-[50px] text-white py-2 px-8   rounded-full">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://calendly.com/escalante-marketing/30-minute-free-strategy-call"
              >
                Book Now
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeventhBlock;
