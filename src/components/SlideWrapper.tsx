"use client";

import { motion } from "framer-motion";

interface SlideWrapperProps {
  children: React.ReactNode;
  direction: number;
}

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0,
  }),
};

export default function SlideWrapper({ children, direction }: SlideWrapperProps) {
  return (
    <motion.div
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
      className="absolute inset-0 w-full h-full"
    >
      {children}
    </motion.div>
  );
}
