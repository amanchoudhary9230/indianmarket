import { cn } from "@/config/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { ImageStack } from "./ImageStack";

export const ProductCards = ({
  items,
  className,
}: {
  items: {
    id: number;
    companyName: string;
    address: string;
    title: string;
    price: string;
    unit: string;
    description: string;
    link: string;
    imgs: string[];
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-8",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <div className="rounded-2xl h-full w-full p-4 overflow-hidden dark:bg-black bg-white border dark:border-white/[0.2] border-black/[0.2] dark:group-hover:border-slate-700 group-hover:border-neutral-400 relative z-20">
            <div className="flex items-center justify-center w-full">
              <ImageStack items={item.imgs} />
            </div>
            <div className="py-2 font-semibold">{item.title}</div>
            <div className="flex flex-col font-serif dark:text-stone-400 text-stone-700">
              <span>{item.companyName}</span>
              <span>{item.address}</span>
            </div>
            <div className="py-2">
              <span className="font-bold">{item.price}</span>
              <span className="lowercase dark:text-white/[0.6] text-black/[0.6]">
                {" "}
                /{item.unit}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
