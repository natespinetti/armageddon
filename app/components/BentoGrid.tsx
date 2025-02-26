"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ThreeDButton from "./3DButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import LogoCarousel from "./LogoCarousel";
import ProjectBox from "./ProjectBox";

export default function BentoGrid() {

  const getSize = {
    small: "w-[calc(50%-8px)] sm:w-[calc(25%-12px)] aspect-[1/1]",
    medium: "w-full sm:w-[calc(50%-8px)]",
    large: "w-full",
  }

  return (
    <div className="gap-4 p-6 flex flex-wrap">
        <motion.div
          className={`animate-fade relative rounded-3xl border-2 overflow-hidden transition-all ${getSize["medium"]}
          hover:shadow-[0_5px_24px_0px_rgba(100,100,111,0.1)] ease-in-out duration-300
          `}
          layout
        >
          <div className="p-6 h-full flex flex-col">
            <Image src={"./NSLogo.svg"} alt={"Nathan Spinetti Logo"} width={70} height={70} className="rounded-lg sm:w-[100px] sm:h-[100px]" />
            <p className="text-text mt-[auto] pt-4 sm:pt-0 text-base sm:text-lg">I&apos;m Nathan, a developer from Boston specializing in React, Next.js, and AWS. 
                I&apos;m passionate about clean UI, AI, accessibility, and scalable full stack web apps.
            </p>
          </div>
        </motion.div>
                <motion.div
          className={`animate-fade1 relative rounded-3xl border-2 overflow-hidden transition-all ${getSize["small"]}
          hover:shadow-[0_5px_24px_0px_rgba(100,100,111,0.1)] ease-in-out duration-300`}
          layout
        >
          <div className="p-4 sm:p-6 h-full flex flex-col items-center justify-center gap-6">
            <ThreeDButton classes="sm:w-full" href="/resume/Nathan_Spinetti_Resume.pdf" newTab>View resume</ThreeDButton>
            <ThreeDButton classes="sm:w-full" href="mailto:nate.spinetti@gmail.com" newTab>Email me</ThreeDButton>
          </div>
        </motion.div>
        <motion.div
          className={`animate-fade2 relative rounded-3xl border-2 overflow-hidden transition-all ${getSize["small"]}
          hover:shadow-[0_5px_24px_0px_rgba(100,100,111,0.1)] ease-in-out duration-300`}
          style={{ backgroundImage: "url(./NS_Photo.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}
          layout
        >
        </motion.div>

        <ProjectBox classes={`animate-fade relative rounded-3xl items-end flex min-h-[260px] cursor-pointer border-2 transition-all w-full sm:w-[calc(33.333%-8px)] h-[500px]
          before:content-['Featured_works'] before:absolute before:top-[48%] before:left-[-220px] before:-rotate-90 before:w-full before:bg-gold before:items-center before:justify-center
          before:font-medium before:tracking-wider before:text-lg sm:before:flex before:hidden before:text-text
          hover:shadow-[0_5px_24px_0px_rgba(100,100,111,0.1)] ease-in-out duration-300`} 
                img={`url(./gbar.jpg)`} imgsize={`cover`} imgpos={`top`} buttonname={`View Gratitude Bar`} buttonlink={`/works/gratitude-bar`} 
        />

        <div className={`relative gap-4 sm:gap-0 sm:min-h-[500px] h-full sm:h-[500px] flex flex-col overflow-hidden transition-all w-full sm:w-[calc(66.666%-8px)] justify-between`}>
            <ProjectBox classes={`animate-fade1 relative rounded-3xl items-end flex cursor-pointer border-2 overflow-hidden transition-all h-[242px]
                hover:shadow-[0_5px_24px_0px_rgba(100,100,111,0.1)] ease-in-out duration-300`} 
                img={`url(./denverwhl.jpg)`} imgsize={`cover`} imgpos={`right`} buttonname={`View Workhuman Live`} buttonlink={`/works/workhuman-live-denver-2025`} 
            />

            <div className="flex flex-row justify-between">

            <ProjectBox classes={`animate-fade2 relative rounded-3xl items-end flex cursor-pointer border-2 overflow-hidden transition-all w-[calc(50%-8px)] aspect-[1/1] sm:h-[242px]
                hover:shadow-[0_5px_24px_0px_rgba(100,100,111,0.1)] ease-in-out duration-300`} 
                img={`url(./alt_text.png)`} imgsize={`cover`} imgpos={`center`} buttonname={`View Alt Text Generator`} buttonlink={`/works/alt-text-generator`} 
            />
            
                            <motion.div
            className={`animate-fade3 relative rounded-3xl cursor-pointer border-2 overflow-hidden transition-all w-[calc(50%-8px)] aspect-[1/1] sm:h-[242px]
                hover:shadow-[0_5px_24px_0px_rgba(100,100,111,0.1)] ease-in-out duration-300`}
            layout
            >
                <a href="/works" className="w-full h-full flex items-center justify-center text-text text-lg sm:text-3xl font-semibold gap-4">View works
                    <div className="w-4 h-4 sm:w-6 sm:h-6 flex"><FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-base sm:text-2xl" /></div>
                </a>
            </motion.div>
            </div>
        </div>

        <LogoCarousel/>

        <motion.div
          className={`animate-fade5 relative rounded-3xl border-2 overflow-hidden transition-all ${getSize["small"]}
          hover:shadow-[0_5px_24px_0px_rgba(100,100,111,0.1)] ease-in-out duration-300`}
          style={{ backgroundImage: "url(/pets/felix.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}
          layout
        >
        </motion.div>
        <motion.div
          className={`animate-fade6 relative rounded-3xl border-2 overflow-hidden transition-all ${getSize["small"]}
          hover:shadow-[0_5px_24px_0px_rgba(100,100,111,0.1)] ease-in-out duration-300`}
          style={{ backgroundImage: "url(/pets/baxter.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}
          layout
        >
        </motion.div>
        <motion.div
          className={`animate-fade7 relative rounded-3xl border-2 overflow-hidden transition-all ${getSize["small"]}
          hover:shadow-[0_5px_24px_0px_rgba(100,100,111,0.1)] ease-in-out duration-300`}
          style={{ backgroundImage: "url(/pets/bentley.jpg)", backgroundSize: "cover", backgroundPosition: "80% 50%" }}
          layout
        >
        </motion.div>
        <motion.div
          className={`animate-fade8 relative rounded-3xl border-2 overflow-hidden transition-all ${getSize["small"]}
          hover:shadow-[0_5px_24px_0px_rgba(100,100,111,0.1)] ease-in-out duration-300`}
          style={{ backgroundImage: "url(/pets/oliver.jpg)", backgroundSize: "cover", backgroundPosition: "60% 50%" }}
          layout
        >
        </motion.div>
    </div>
  );
}
