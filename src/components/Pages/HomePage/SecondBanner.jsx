import React from "react";
import { ContainerOneSection } from "../../Layout";
import { Header1Text } from "../../Common";

const Section = () => (
  <>
    <Header1Text
      isItPageTitle={false}
      text_color="text-secondary_headers"
      text="We give you the EXACT structure and questions, you will ask to keep these records, and STOP LEAVING LOST MONEY ON THE TABLE. "
      text_size="lg:text-3xl"
    />
    <Header1Text
      isItPageTitle={false}
      text_color="text-secondary_headers"
      text="If you call your business right now, will they ask for name and phone number? 
      Information for them to call you back?
       "
      text_size="lg:text-2xl"
    />
    <Header1Text
      mb="mb-0"
      isItPageTitle={false}
      text_color="text-secondary_headers"
      text="Or after 30 seconds on the phone, you hang up and nobody ever contacts you anymore?"
      text_size="lg:text-2xl"
    />
  </>
);

const SecondBanner = () => {
  return (
    <article className="pattern flex items-center ">
      <ContainerOneSection
        centered
        Section={<Section />}
        addedClasses={"rounded-md py-6 px-6  my-12"}
      />
    </article>
  );
};

export default SecondBanner;
