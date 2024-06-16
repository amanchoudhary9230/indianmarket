"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Image } from "@nextui-org/react";

export const ImageStack = ({ items }: { items: string[] }) => {
  const [cards, setCards] = useState<string[]>(items);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startFlipping = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setCards((prevCards) => {
          const newArray = [...prevCards]; // create a copy of the array
          newArray.unshift(newArray.pop()!); // move the last element to the front
          return newArray;
        });
      }, 2000);
    }
  };

  const stopFlipping = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null; // clear the interval reference
    }
    setCards([...items]);
  };

  useEffect(() => {
    // Cleanup interval on component unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [items]);

  return (
    <div
      className="relative h-[14rem] max-w-full overflow-hidden"
      onMouseEnter={startFlipping}
      onMouseLeave={stopFlipping}
    >
      <AnimatePresence>
        <motion.div
          key={cards[0]}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="dark:bg-black bg-white h-full w-full rounded-3xl overflow-hidden shadow-xl border border-neutral-200 dark:border-white/[0.1] shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between"
          style={{
            transformOrigin: "top center",
          }}
        >
          <Image
            src={cards[0]}
            alt={cards[0]}
            className="object-contain w-full h-full"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
