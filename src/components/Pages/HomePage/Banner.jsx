import React from "react";
import { ContainerOneSection } from "../../Layout";
import { Header1Text } from "../../Common";

const Section = () => (
  <>
    <Header1Text
      isItPageTitle={false}
      text_color="text-white"
      text="Marketing and Sales go hand in hand. "
      text_size="text-2xl"
    />
    <Header1Text
      isItPageTitle={false}
      text_color="text-white"
      text="But marketing is not only putting a great picture out there to attract your ideal consumer. "
      text_size="text-3xl"
    />
  </>
);

const Banner = () => {
  return (
    <article>
      <ContainerOneSection
        centered
        bgColor="bg-primary_headers_purple"
        Section={<Section />}
        addedClasses={"rounded-md py-6 px-6 my-10"}
      />
    </article>
  );
};

export default Banner;
