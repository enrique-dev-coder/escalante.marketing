import React from "react";
import { ContainerOneSection } from "../../Layout";
import { Header1Text } from "../../Common";

const Section = () => (
  <div className="flex items-center justify-center">
    <div className="w-1/2">
      <p className="secondary_font text-2xl mb-6">
        Correct processes in place can MAXIMIZE your{" "}
        <b className="text-green_1">return and profit</b> on
        <b className="underline"> time and money</b> invested.
      </p>
      <p className="secondary_font text-2xl font-bold">
        We have brought companies from{" "}
        <span className="text-3xl text-green_1">
          7 Million a year to 20+ Million
        </span>{" "}
        a year{" "}
        <span className="text-[28px] underline">in less than 25 months!</span>
      </p>
    </div>
    <img
      className="w-[300px] animate-bounce secondary_font text-2xl"
      alt="investing"
      src="3d_money_bag.png"
    />
  </div>
);

const Banner = () => {
  return (
    <article>
      <ContainerOneSection
        centered
        Section={<Section />}
        addedClasses={"rounded-md py-6 px-6 my-10"}
      />
    </article>
  );
};

export default Banner;
