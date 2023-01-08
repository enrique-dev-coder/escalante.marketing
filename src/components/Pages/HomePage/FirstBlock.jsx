import React from "react";
import { Header2Text, Header3Text } from "../../Common";
import { ContainerTwoSections, ContainerOneSection } from "../../Layout";

const Section1 = () => (
  <Header2Text text="Its also putting the correct processes into place to ensure, that after a person has shown interest.  The client is able to understand the value your company or service brings to them. " />
);

const SectionForText = () => (
  <div className=" my-6 pr-10">
    <Header3Text
      text="Its putting the correct follow up process in place to promote, advertise, and create an offer 
  So that the possible client, the LEAD, can comprenhend the value of your poduct and you make the sale. 
   "
    />
  </div>
);

const ImageSection = () => (
  <div className="h-[350px] bg-soft_color_bg my-6 rounded-md">Image</div>
);

const FirstBlock = () => {
  return (
    <article>
      <ContainerOneSection Section={<Section1 />} addedClasses={"my-14"} />
      <ContainerTwoSections
        Section1={<SectionForText />}
        Section2={<ImageSection />}
      />
    </article>
  );
};

export default FirstBlock;
