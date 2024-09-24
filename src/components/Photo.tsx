"use client";

import { motion } from "framer-motion";

interface PhotoProps {
  imageSrc: string;
  imageAlt: string;
}

export default function Photo({ imageSrc, imageAlt }: PhotoProps) {
  return (
    <div className="relative h-full w-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.4, ease: "easeIn" }}
        className="relative flex items-center justify-center"
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 0.4, ease: "easeInOut" }}
          className="absolute h-[298px] w-[298px] p-10 xl:h-[498px] xl:w-[498px]"
        >
          <img
            src={imageSrc}
            alt={imageAlt}
            className="h-full w-full rounded-full object-contain"
          />
        </motion.div>

        {/* Circle */}
        <motion.svg
          className="h-[300px] w-[300px] xl:h-[506px] xl:w-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
}
