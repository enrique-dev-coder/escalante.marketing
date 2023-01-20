import React from "react";

const TenthBlock = () => {
  return (
    <article className=" py-8 h-[800px] relative bg-center bg-cover bg-no-repeat bg-[url('/img/jump.png')] flex flex-col justify-end ">
      <h2 className="text-white  text-[70px] lg:text-[100px] font-black text-center ">
        Take Action Today
      </h2>
      {/* Book now button*/}
      <div className="flex justify-center ">
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
    </article>
  );
};

export default TenthBlock;
