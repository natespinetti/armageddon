"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import ArrowButton from "./ArrowButton";

interface CaseStudyPreviewProps {
  classes: string;
  img: string;
  imgsize: string;
  imgpos: string;
  buttonname: string;
  buttonlink: string;
  side: string;
  overview: string;
  title: string;
}

export default function CaseStudyPreview({
  classes,
  img,
  imgsize,
  imgpos,
  buttonname,
  buttonlink,
  side,
  overview,
  title,
}: CaseStudyPreviewProps) {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <>
        <motion.a onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            href={`${buttonlink}`} className={`${classes} animate-fade relative rounded-3xl items-end flex sm:flex-row flex-col cursor-pointer border-2 overflow-hidden transition-all min-h-[350px]
                hover:shadow-[0_5px_24px_0px_rgba(100,100,111,0.1)] ease-in-out duration-300`}>
            {side === "left" && 
                <div className="w-full sm:w-1/2 h-full text-text text-lg p-6 sm:p-8 hidden sm:flex flex-col justify-center">
                    <h2 className="text-text font-black tracking-wider text-3xl pb-4">
                        {title}
                    </h2>
                    <div className="text-text text-lg">
                        {overview}
                    </div>
                </div>
            }
            <motion.div
            className={`${classes} relative items-end min-h-[300px] flex cursor-pointer overflow-hidden transition-all h-full w-full sm:w-1/2 sm:max-w-[50%]
             ease-in-out duration-300`}
            layout
            style={{ backgroundImage: `url(${img})`, backgroundSize: imgsize, backgroundPosition: imgpos }}
            >
                <ArrowButton text={`View ${buttonname}`} isHovered={isHovered} />
            </motion.div>
            {side === "right" && 
                <>
                <div className="w-full sm:w-1/2 h-full text-text text-lg p-6 sm:p-8 hidden sm:flex flex-col justify-center">
                    <h2 className="text-text font-black tracking-wider text-3xl pb-4">
                        {title}
                    </h2>
                    <div className="text-text text-lg">
                        {overview}
                    </div>
                </div>
                </>
            }
                <div className="sm:hidden w-full sm:w-1/2 h-full text-text text-lg p-6 sm:p-8 flex flex-col justify-center">
                    <h2 className="text-text font-black tracking-wider text-3xl pb-4">
                        {title}
                    </h2>
                    <div className="text-text text-lg">
                        {overview}
                    </div>
                </div>
        </motion.a>
        </>
    )
}