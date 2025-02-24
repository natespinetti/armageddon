"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";

interface ArrowButtonProps {
  text?: string;
  href?: string;
  isHovered?: boolean;
}

export default function ArrowButton({ text = "View More", isHovered = false }: ArrowButtonProps) {
  const [hoverWidth, setHoverWidth] = useState(40); // Default width (icon only)
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const fullWidth = textRef.current.getBoundingClientRect().width;
      setHoverWidth(fullWidth + 28); // Add padding
    }
  }, []);

  return (
    <>
      {/* Hidden offscreen div to measure content width */}
      <div ref={textRef} className="absolute -z-50 opacity-0 flex items-center gap-2">
        <span className="text-sm">{text}</span>
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-4 h-4" />
      </div>

      {/* Button expands on hover, triggered by the parent hover */}
      <motion.div
        className={`relative ml-auto flex items-center m-2 gap-2 bg-soft text-text font-semibold rounded-full px-2 py-2 transition-all w-12
           min-w-[2.5rem]`}
        style={{
          width: isHovered ? hoverWidth : 48, // Dynamically change width
          transition: "width 0.3s ease-in-out",
        }}
      >
        <motion.span
          className="overflow-hidden whitespace-nowrap text-text text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          {text}
        </motion.span>

        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-4 h-4 bg-soft text-text mr-2" />
      </motion.div>
    </>
  );
}
