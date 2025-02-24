"use client";

import Image from "next/image";

export default function Header() {
    return (
        <>
        <header className="w-screen flex flex-row pt-8 items-center px-4 justify-between max-w-[1200px] mx-[auto]">
            <a href="/" className="text-text font-black tracking-wider text-base sm:text-xl flex flex-row gap-4 items-center"><Image src={"../../NSLogo.svg"} alt={"Nathan Spinetti Logo"} width={40} height={40} className="rounded-lg sm:w-[40px] sm:h-[40px]" /><span className="hidden sm:flex">Nathan Spinetti</span></a>
            <div className="flex flex-row gap-8">
                <a href="/" className="hover:underline text-text hover:underline-offset-4 hover:decoration-gold">Home</a>
                <a href="/works" className="hover:underline text-text hover:underline-offset-4 hover:decoration-gold">Works</a>
            </div>
        </header>
        </>
    )
}
