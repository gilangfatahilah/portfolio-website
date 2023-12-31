import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const texts = [
    "Hi There, I'm Gilang",
    "A Junior Web Developer",
    "Wants to know more about me? ",
    "Let's Go!",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          onLoadingComplete();
          return 100;
        }
        return prevProgress + 1;
      });
    }, 75);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <motion.div
        key={index}
        className={`flex items-center justify-center h-screen w-3/4 mx-auto text-center text-3xl bg-[#030014] ${
          index == 3
            ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-bold"
            : "text-white font-bold"
        }`}
      >
        <motion.h1
          initial={index == 2 ? { opacity: 0, translateY: 5 } : { opacity: 0 }}
          animate={index == 2 ? { opacity: 1, translateY: 0 } : { opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={index == 2 ? { ease: "easeInOut" } : {}}
        >
          {texts[index]}
        </motion.h1>

        <div className="w-full h-full absolute">
          <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
            <video
              className="w-full h-auto"
              preload="false"
              playsInline
              loop
              muted
              autoPlay
              src="/videos/encryption.webm"
            />
          </div>
        </div>
      </motion.div>
      <motion.div
        className="fixed bottom-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 to-cyan-500"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: progress / 100 }}
        transition={{ duration: 0.01 }}
      />
      <div className="fixed text-2xl bottom-4 right-4 text-purple-500">
        {progress}%
      </div>
    </>
  );
};

export default LoadingScreen;
