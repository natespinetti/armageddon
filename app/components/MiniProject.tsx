"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import ArrowButton from "./ArrowButton";

interface MiniProjectProps {
  classes: string;
  img: string;
  imgsize: string;
  imgpos: string;
  buttonname: string;
  buttonlink: string;
}

export default function MiniProject({
  classes,
  img,
  imgsize,
  imgpos,
  buttonname,
  buttonlink,
}: MiniProjectProps) {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <>
            <motion.a
            className={`${classes} animate-fade relative rounded-3xl items-end flex cursor-pointer border-2 overflow-hidden transition-all h-[242px]
                hover:shadow-[0_5px_24px_0px_rgba(100,100,111,0.1)] ease-in-out duration-300`}
            layout
            style={{ backgroundImage: `url(${img})`, backgroundSize: imgsize, backgroundPosition: imgpos }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            href={`${buttonlink}`}
            >
                <ArrowButton text={`View ${buttonname}`} isHovered={isHovered} />
            </motion.a>
        </>
    )
}