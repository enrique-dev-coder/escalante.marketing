import React from "react";

const HeroSection = () => {
  return (
    <main className=" bg-no-repeat bg-cover bg-center py-10  bg-[url('/img/bg_img_hero.png')]">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <h1 className=" leading-relaxed text-bright_yellow text-[45px] lg:text-[60px] pt-4 font-black lg:w-4/12 ">
          <span className="bg-black">EXPLODE Sales With Online Marketing</span>
        </h1>
        <p className="text-white text-[40px] lg:text-[30px] lg:w-4/12 font-bold text_shadow_little my-4">
          With little to no money invested,{" "}
          <span className=" text-bright_yellow">from $2,500*.</span> Call us now
          and book a <span className=" text-bright_yellow">FREE</span> Strategy
          session!{" "}
        </p>
        {/* Book now button*/}
        <div className="flex justify-center lg:justify-start">
          <button className=" bg-primary_button_color font-bold  text-[40px] lg:text-[50px] text-white py-2 px-8   rounded-full">
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
    </main>
  );
};

export default HeroSection;
