import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const { pathname } = useLocation();

  // Show button after scroll
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Automatic scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  // Button click scroll
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Animation
  const animation = {
    initial: { x: 0, y: -300, scale: 0.9, opacity: 0 }, // top se shuru hoga
    animate: {
      x: 0,
      y: 0, // apne original place pe aa jayega
      scale: [0.9, 1.05, 1],
      opacity: [0, 1, 1],
    },
    exit: { x: 0, y: -300, scale: 0.9, opacity: 0 }, // fir se top ki taraf jayega
    transition: { duration: 0.8, ease: "easeOut" },
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="scroll-btn"
          onClick={scrollToTop}
          initial={animation.initial}
          animate={animation.animate}
          exit={animation.exit}
          transition={animation.transition}
          className="fixed bottom-6 right-6 z-30 flex items-center justify-center w-14 h-14 rounded-full shadow-2xl
                     bg-green-gradient text-white text-lg overflow-visible cursor-pointer"
        >
          {/* Decorative shine + glow layers */}
          <span className="absolute inset-0 pointer-events-none rounded-full button-shine" />
          <span className="absolute -inset-px rounded-full ring-0 pointer-events-none button-glow" />
          <FaArrowUp className="w-5 h-5 z-10 " />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
