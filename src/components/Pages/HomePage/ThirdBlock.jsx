import React from "react";
import { Header2Text, Header3Text } from "../../Common";
import { ContainerTwoSections, ContainerOneSection } from "../../Layout";

const SectionForText = () => (
  <div className=" my-6 pr-10">
    <Header2Text
      addedClasses={"pl-6"}
      color="text-white"
      text="This is one of the 30+ processes that we study for your company, and help you implement better proceses that will HELP DOUBLE YOUR REVENUE IN THE NEXT 90 DAYS"
    />
  </div>
);

const ImageSection = () => (
  <div className="h-[350px] bg-soft_color_bg my-6 rounded-md rounded-t ">
    Image
  </div>
);

const ThirdBlock = () => {
  return (
    <article>
      <ContainerTwoSections
        addedClasses={
          "bg-primary_headers_purple rounded-tr-3xl rounded-bl-3xl my-10"
        }
        Section1={<SectionForText />}
        Section2={<ImageSection />}
      />
    </article>
  );
};

export default ThirdBlock;
