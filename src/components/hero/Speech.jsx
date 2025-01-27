import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";

const Speech = () => {
  return (
    <motion.div
      className="bubbleContainer"
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 0.9 }}
    >
      <div className="bubble">
        <TypeAnimation
          sequence={[
            1000,
            "I'm HRUSHIKESH. Full Stack Developer",
            1000,
            "Welome on my Portfolio... ",
            1000,
          ]}
          wrapper="span"
          speed={40}
          deletionSpeed={60}
          // omitDeletionAnimation
          repeat={Infinity}
        />
      </div>
      <img src="/homepr.png" alt="" />
    </motion.div>
  );
};

export default Speech;