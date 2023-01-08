import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ContainerOneSection = ({ centered, bgColor, Section, addedClasses }) => {
  const animationVariants = {
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
    hidden: { opacity: 0, y: 10 },
  };

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className=" w-full ">
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={animationVariants}
        className={`w-4/5 flex lg:flex-col max-w-[1536px] mx-auto ${
          centered && "justify-center"
        } ${bgColor} ${addedClasses}`}
      >
        <div>{Section}</div>
      </motion.div>
    </div>
  );
};

export default ContainerOneSection;
