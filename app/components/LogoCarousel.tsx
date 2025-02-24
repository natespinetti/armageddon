"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  "/tools/nextjs.png",
  "/tools/react.png",
  "/tools/typescript.png",
  "/tools/aws.png",
  "/tools/dynamodb.png",
  "/tools/amazon-lambda.webp",
  "/tools/openai.png",
  "/tools/python.svg",
  "/tools/adobe-cc.png",
];

// Duplicate logos to create seamless scrolling effect
const duplicatedLogos = [...logos, ...logos, ...logos];

export default function LogoCarousel() {
  return (
    <div className="animate-fade4 bg-soft relative overflow-hidden w-full min-h-[125px] p-6 border-2 rounded-3xl hover:shadow-[0_5px_24px_0px_rgba(100,100,111,0.1)] ease-in-out duration-300">
      <motion.div
        className="flex items-center flex-row gap-16 w-[200%]"
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{ ease: "linear", duration: 50, repeat: Infinity }}
      >
        {duplicatedLogos.map((logo, index) => (
          <Image key={index} src={logo} alt="Logo" width={100} height={100} className="w-[250px] max-h-[100px] min-w-[200px] h-auto object-contain" />
        ))}
      </motion.div>
    </div>
  );
}
