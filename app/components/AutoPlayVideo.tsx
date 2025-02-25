"use client";

import { useRef, useEffect } from "react";

interface VideoProps {
  src: string;
  className?: string;
}

export default function AutoPlayVideo({ src, className = "" }: VideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Autoplay failed:", error);
      });
    }
  }, []);

  return (
<div className="max-w-[100%] max-h-[90vh] h-fit rounded-3xl overflow-hidden sm:m-auto animate-fade3 transition-all
                ease-in-out duration-300 flex items-center justify-center">
  <video
    ref={videoRef}
    src={src}
    className={`max-h-[90vh] max-w-full w-auto h-auto rounded-lg ${className}`}
    autoPlay
    loop
    muted
    playsInline
    controls // ✅ Enables native video controls
  />
</div>

  );
}
