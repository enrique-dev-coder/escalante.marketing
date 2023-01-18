import React from "react";

const HeroSection = () => {
  return (
    <main className=" bg-no-repeat bg-cover bg-center h-screen lg:h-[85vh] bg-[url('/img/bg_img_hero.png')]">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <h1 className=" leading-relaxed text-bright_yellow text-[30px] lg:text-[60px] pt-4 font-black w-4/12 ">
          <span className="bg-black">EXPLODE Sales With Online Marketing</span>
        </h1>
        <p className="text-white lg:text-[30px] w-4/12 font-bold text_shadow_little my-4">
          With little to no money invested,{" "}
          <span className=" text-bright_yellow">from $2,500*.</span> Call us now
          and book a <span className=" text-bright_yellow">FREE</span> Strategy
          session!{" "}
        </p>
        {/* Book now button*/}
        <div className="flex justify-start">
          <button className=" bg-primary_button_color font-bold  lg:text-[50px] text-white py-2 px-8   rounded-full">
            Book Now
          </button>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
