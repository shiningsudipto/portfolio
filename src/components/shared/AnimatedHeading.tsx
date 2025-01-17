"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";
type propTypes = {
  title: ReactNode;
};

const AnimatedHeading = ({ title }: propTypes) => {
  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        delay: 0.05,
        duration: 0.4,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
      }}
    >
      {title}
    </motion.div>
  );
};

export default AnimatedHeading;
