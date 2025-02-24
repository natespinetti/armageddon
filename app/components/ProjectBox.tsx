"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import ArrowButton from "./ArrowButton";

interface ProjectBoxProps {
  classes: string;
  img: string;
  imgsize: string;
  imgpos: string;
  buttonname: string;
  buttonlink: string;
}

export default function ProjectBox({
  classes,
  img,
  imgsize,
  imgpos,
  buttonname,
  buttonlink,
}: ProjectBoxProps) {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <>
            <motion.a
            className={`${classes}`}
            layout
            style={{ backgroundImage: img, backgroundSize: imgsize, backgroundPosition: imgpos }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            href={`${buttonlink}`}
            >
                <ArrowButton text={`${buttonname}`} isHovered={isHovered} />
            </motion.a>
        </>
    )
}