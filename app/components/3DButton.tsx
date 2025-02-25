"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface ThreeDButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  newTab?: boolean;
}

export default function ThreeDButton({ children, href, onClick, newTab = false }: ThreeDButtonProps) {
  const buttonClasses =
    "relative w-fit px-3 py-2 sm:px-6 sm:py-3 text-sm sm:text-lg text-text bg-gold rounded-lg font-semibold text-center ease-in-out hover:bg-[#f2c713] duration-3";

  const motionProps = {
    initial: { y: 2, boxShadow: "0px 4px 0px rgba(0, 0, 0, 0.3)" },
    whileHover: { y: 2, boxShadow: "0px 4px 0px rgba(0, 0, 0, 0.3)" },
    whileTap: { y: 4, boxShadow: "0px 2px 0px rgba(0, 0, 0, 0.3)" },
  };

  if (href) {
    return (
      <Link href={href} passHref legacyBehavior>
        <motion.a
          {...motionProps}
          className={buttonClasses}
          target={newTab ? "_blank" : "_self"}
          rel={newTab ? "noopener noreferrer" : undefined}
        >
          {children}
        </motion.a>
      </Link>
    );
  }

  return (
    <motion.button {...motionProps} className={buttonClasses} onClick={onClick}>
      {children}
    </motion.button>
  );
}
