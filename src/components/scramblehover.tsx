"use client";

import { motion } from "motion/react";

import ScrambleHover from "@/components/fancy/scramble-hover";

export default function Preview() {
  return (
    <div className="">
      <motion.div
        layout
        animate={{ opacity: [0, 1, 1], y: [10, 10, 0] }}
        transition={{
          duration: 0.1,
          ease: "circInOut",
          delay: 0 * 0.05 + 0.5,
          times: [0, 0.2, 1],
        }}
      >
        <ScrambleHover
          text="Excited to Join the Band!"
          scrambleSpeed={50}
          maxIterations={8}
          useOriginalCharsOnly={true}
          className="cursor-pointer"
        />
      </motion.div>
    </div>
  );
}
