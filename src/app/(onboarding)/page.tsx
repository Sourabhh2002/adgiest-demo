"use client";

import Button from "@/components/ui/Button";
import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

const pages = [
  {
    id: "choose-path",
    title: "Choose Your Path",
  },
  {
    id: "set-your-mission",
    title: "Set Your Mission",
  },
  {
    id: "help-us-know-your-business-better",
    title: "Help Us Know Your Business Better",
  },
  {
    id: "complete-your-business-profile",
    title: "Complete Your Business Profile",
  },
  {
    id: "verification",
    title: "Verification",
  },
];

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 0.7,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 0.6,
  }),
};

const previewVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 0.95,
    transition: {
      opacity: { duration: 1.5 },
      scale: { duration: 1.5 },
    },
  }),
  center: () => ({
    x: "30%",
    opacity: 0.4,
    scale: 0.85,
    transition: {
      x: { type: "tween", duration: 0.7, ease: "easeInOut" },
      opacity: { duration: 1 },
      scale: { duration: 1 },
    },
  }),
  exit: (direction: number) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0,
    scale: 0.85,
    transition: {
      x: { type: "tween", duration: 0.7, ease: "easeInOut" },
      opacity: { duration: 1.2 },
      scale: { duration: 1.2 },
    },
  }),
};

export default function Home() {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isFirstRender, setIsFirstRender] = useState(true);

  const currentPage = pages[currentPageIndex];
  const nextPage = pages[currentPageIndex + 1];
  const hasNextPage = currentPageIndex < pages.length - 1;
  const hasPrevPage = currentPageIndex > 0;

  useEffect(() => {
    setIsFirstRender(false);
  }, []);

  const handleNext = () => {
    if (hasNextPage) {
      setDirection(1);
      setCurrentPageIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (hasPrevPage) {
      setDirection(-1);
      setCurrentPageIndex((prev) => prev - 1);
    }
  };

  return (
    <section className="pt-5 flex-grow flex flex-col h-[calc(100vh-4.65rem)]">
      <h2 className="text-[#828282] ml-10">Create Account</h2>

      <div className="relative flex-grow overflow-x-hidden">
        <div className="absolute inset-0">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentPage.id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "tween", duration: 0.65, ease: "easeInOut" },
                opacity: { duration: 0.35 },
                scale: { duration: 0.75 },
              }}
              className="absolute w-[65%] flex flex-col ml-10"
            >
              <motion.h1 className=".heading-1 mb-6 mt-[2px]">
                {currentPage.title}
              </motion.h1>
              <div className="container-main flex items-center justify-center">
                <div className="w-[98%] h-[96%] border border-[#B1B1B1] border-opacity-70 rounded-lg">
                  <div className="absolute bottom-[8%] w-fit left-[50%] -translate-x-[50%] space-x-4">
                    <Button
                      variant="rounded"
                      onClick={handlePrev}
                      disabled={!hasPrevPage}
                    >
                      <div className="rotate-180">
                        <FaPlay />
                      </div>
                    </Button>

                    <Button
                      variant="rounded"
                      isActive
                      onClick={handleNext}
                      disabled={!hasNextPage}
                    >
                      <FaPlay />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {nextPage && (
            <motion.div
              key={`${nextPage.id}-preview`}
              variants={previewVariants}
              custom={direction}
              initial={isFirstRender ? false : "enter"}
              animate="center"
              exit="exit"
              className="absolute right-0 w-[30%] md:w-[40%] lg:w-[45%] top-[6.5%] flex flex-col"
            >
              <motion.h1
                className=".heading-1 mb-6 opacity-40 whitespace-nowrap"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                exit={{ opacity: 0 }}
                transition={{
                  opacity: { duration: 0.5 },
                  scale: { duration: 1.2 },
                }}
              >
                {nextPage.title}
              </motion.h1>
              <div className="container-sub flex items-center justify-center">
                <div className="w-[96%] h-[95%] border border-[#B1B1B1] border-opacity-70 rounded-lg"></div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
