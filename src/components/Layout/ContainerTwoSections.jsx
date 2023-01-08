import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ContainerTwoSections = ({
  Section1,
  Section2,
  addedClasses,
  isImage,
}) => {
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
        className={`w-4/5 flex flex-col lg:flex-row lg:items-center max-w-[1536px] mx-auto ${addedClasses}`}
      >
        <div className={`lg:w-1/2 ${isImage && "hidden md:block"}`}>
          {Section1}
        </div>
        <div className="lg:w-1/2">{Section2}</div>
        {isImage && <div className="lg:hidden">{Section1}</div>}
      </motion.div>
    </div>
  );
};

export default ContainerTwoSections;
