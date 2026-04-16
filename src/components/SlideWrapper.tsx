"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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

const DESIGN_WIDTH = 1280;
const DESIGN_HEIGHT = 720;

export default function SlideWrapper({ children, direction }: SlideWrapperProps) {
  const [scale, setScale] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const mobile = w < 768;
      setIsMobile(mobile);
      if (mobile) {
        const s = Math.min(w / DESIGN_WIDTH, h / DESIGN_HEIGHT);
        setScale(s);
      } else {
        setScale(1);
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

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
      {isMobile ? (
        <div
          style={{
            width: DESIGN_WIDTH,
            height: DESIGN_HEIGHT,
            transform: `scale(${scale})`,
            transformOrigin: "top left",
          }}
        >
          {children}
        </div>
      ) : (
        children
      )}
    </motion.div>
  );
}
