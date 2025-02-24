"use client";

import items from "../data/minis.json"; // Import JSON data
import casestudies from "../data/casestudies.json"; // Import JSON data
import MiniProject from "../components/MiniProject";
import Header from "../components/Header";
import CaseStudyPreview from "../components/CaseStudyPreview";

export default function Works() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center w-screen bg-soft">
        <Header />
      <div className="content-wrapper max-w-[1200px] w-screen">
      <div className="gap-4 p-6 flex flex-wrap w-full">
        <h1 className="animate-fade mt-8 mb-4 sm:mb-8 underline underline-offset-4 text-text font-black tracking-wider text-4xl w-full decoration-gold relative overflow-hidden items-center min-h-[70px] p-6 ease-in-out duration-300">
            Featured works
        </h1>
        <div className="flex flex-col flex-wrap gap-8 sm:gap-16 w-full overflow-hidden">
            {casestudies.map((item, index) => (
            <CaseStudyPreview key={item.id} classes={'w-full'} img={`${item.img}`} imgsize={"cover"} imgpos={"center"} buttonname={`${item.shorthand || item.title}`} buttonlink={`/works/${item.id}`} side={index % 2 === 0 ? "right" : "left"} overview={`${item.overview}`} title={`${item.title}`} />
            ))}
        </div>
        <div className="animate-fade underline underline-offset-4 mt-8 text-text font-black tracking-wider text-4xl w-full decoration-gold relative overflow-hidden items-center min-h-[70px] p-6 ease-in-out duration-300">
            Mini works
        </div>
        {items.map((item) => (
          <MiniProject key={item.id} classes={'w-full sm:w-[calc(33.333%-12px)]'} img={`${item.img}`} imgsize={"cover"} imgpos={"center"} buttonname={`${item.shorthand || item.title}`} buttonlink={`/works/${item.id}`}></MiniProject>
        ))}
        </div>
      </div>
    </main>
  );
}
