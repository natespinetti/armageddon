import ThreeDButton from "./3DButton";
import Header from "./Header";
import Image from "next/image";

interface CaseStudyPageProps {
  item: CaseStudyItem;
}

export interface CaseStudyItem {
  id: string;
  template: string;
  link?: string; // Optional in case some items don't have links
  target?: string; // "_blank" for external links
  img: string;
  shorthand?: string; // Optional, since not all items have this
  title: string;
  overview: string;
  challenge: string;
  solution: string;
  tools: string[];
}


export default function CaseStudyPage({ item }: CaseStudyPageProps) {
  return (
    <main className="min-h-screen flex flex-col bg-gray-100 ">
    <Header />
      <div className="flex flex-col items-center justify-center p-6 m-auto w-full">
        <div className="flex flex-col sm:flex-row gap-16 content-wrapper max-w-[1200px] w-screen p-6 flex-wrap">
            <div className="flex flex-col sm:flex-row gap-16 flex-wrap items-center mt-16">
            <div className="sm:max-w-[50%] w-full sm:w-[50%] animate-fade transition-all ease-in-out duration-300">
                <h1 className="text-text font-black tracking-wider text-4xl pb-4">{item.title}</h1>
                <p className="text-lg text-gray-600 mt-2 mb-10">{item.overview}</p>
                <ThreeDButton href={`${item.link}`} newTab>View work</ThreeDButton>
            </div>
            <Image src={item.img} alt={item.title} width={500} height={300} className="rounded-3xl h-fit animate-fade1 transition-all ease-in-out duration-300" />
            </div>
                <div className="text-text font-semibold text-lg mt-8 p-6 flex-col animate-fade2 relative rounded-3xl flex border-2 overflow-hidden transition-all
                 ease-in-out duration-300">
                    Tools used:
                    <div className="block text-text font-normal text-base">
                        {item.tools.map((tool: string, index: number) => (
                            <span key={index}>
                                {tool}
                                {index < item.tools.length - 1 ? ", " : ""}
                            </span>
                        ))}
                    </div>
                </div>
             <div className="text-text font-semibold text-lg">
                The Challenge
                <div className="font-normal text-base">
                    {item.challenge}
                </div>
            </div>
            <div className="text-text font-semibold text-lg">
                The Solution
                <div className="font-normal text-base">
                    {item.solution}
                </div>
            </div>
        </div>
      </div>
    </main>
  );
}

