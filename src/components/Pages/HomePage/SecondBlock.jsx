import React from "react";
import { Header2Text, Header3Text } from "../../Common";
import { ContainerTwoSections, ContainerOneSection } from "../../Layout";

const SectionForText = () => (
  <div className=" my-6 pl-10">
    <Header3Text
      text="Do you have records of all the people who have called your business? 
   "
    />
    <Header3Text text="What they needed?" />
    <Header3Text text="A way of contact ? " />
    <Header3Text text="An email to send more information ?  " />
  </div>
);

const ImageSection = () => (
  <div className="h-[350px] bg-soft_color_bg my-6 rounded-md">Image</div>
);
const FirstBlock = () => {
  return (
    <article>
      <ContainerTwoSections
        Section1={<ImageSection />}
        Section2={<SectionForText />}
      />
    </article>
  );
};

export default FirstBlock;
