"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-full fixed top-0 md:top-10 inset-x-0 border border-transparent dark:border-white/[0.2] rounded-xl dark:bg-black bg-white shadow-none md:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-5 md:px-10 py-2 mx-0 md:mx-8 items-center justify-center space-x-4",
          className
        )}
      >
        <div className="flex w-full text-black items-center justify-between">
          <div className="text-[2rem] flex items-center justify-center ">
            <span className="text-[#7F56D9]">N</span>AV
            <span className="hidden md:block">
              <span className="text-[#7F56D9]">B</span>AR
            </span>
          </div>
          <div className="flex text-black text-[0.9rem] items-center font-bold justify-center gap-8">
            {navItems.map((navItem: any, idx: number) => (
              <Link
                key={`link=${idx}`}
                href={navItem.link}
                className={cn(
                  "relative dark:text-neutral-50 items-center flex space-x-1 dark:hover:text-neutral-300 hover:text-neutral-500"
                )}
              >
                <span className="block sm:hidden">{navItem.icon}</span>
                <span className="hidden sm:flex items-center justify-center gap-3">
                  {navItem.name}
                  {(navItem.name === "Products" ||
                    navItem.name === "Resources") && <FaAngleDown />}
                </span>
              </Link>
            ))}
          </div>
          <div className="hidden md:flex text-[1rem] items-center justify-center gap-5">
            <button className="rounded-lg border-2 bg-[#7f56d90e] border-[#7f56d981] py-2 px-3 font-semibold text-[#7F56D9]">
              Login
            </button>
            <button className="rounded-lg py-2 px-3 font-semibold text-white bg-[#7F56D9]">
              Sign up
            </button>
          </div>
          <div className="text-[2rem] md:hidden">
            <IoMenu />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
