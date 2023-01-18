import React from "react";
const FirstBlock = () => {
  return (
    <article className="bg-no-repeat bg-cover bg-right lg:bg-center  h-[50vh] bg-[url('/img/bonsai.png')]">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 h-full flex flex-col justify-center py-4 ">
        <div className="bg-black/60 lg:w-1/2 py-1 px-3 rounded-lg">
          <h2 className="leading-none text-white text-[40px] lg:text-[60px] pt-4 font-black w-[80%] lg:w-[60%]">
            Results in:{" "}
          </h2>
          <ul className="pl-8 text-white list-disc text-[30px] lg:text-[40px] leading-none font-bold">
            <li>Production companies</li>
            <li>Manufacturing companies</li>
            <li>Airlines</li>
            <li>Lawfirms</li>
            <li>Restaurants</li>
            <li>and more</li>
          </ul>
        </div>
      </div>
    </article>
  );
};

export default FirstBlock;
