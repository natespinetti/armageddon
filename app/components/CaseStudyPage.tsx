import ThreeDButton from "./3DButton";
import Header from "./Header";
import Image from "next/image";
import AutoPlayVideo from "./AutoPlayVideo";

interface CaseStudyPageProps {
  item: CaseStudyItem;
}

export interface CaseStudyItem {
  id: string;
  template: string;
  link?: string; // Optional in case some items don't have links
  target?: string; // "_blank" for external links
  img: string;
  img2: string;
  img3: string;
  img4: string;
  img5: string;
  video: string;
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
        <div className="flex flex-col sm:flex-row gap-16 w-full content-wrapper max-w-[1200px] sm:w-screen p-6 flex-wrap">
            <div className="flex flex-col sm:flex-row gap-16 w-full flex-wrap items-center mt-16">
                <div className="sm:max-w-[70%] m-auto w-full h-full flex flex-col sm:w-[70%] animate-fade transition-all ease-in-out duration-300">
                    <h1 className="text-text font-black tracking-wider text-4xl pb-4">{item.title}</h1>
                    <p className="text-lg text-gray-600 mt-2 mb-10">{item.overview}</p>
                    {item.link ? (
                        <ThreeDButton href={`${item.link}`} newTab>View work</ThreeDButton>
                    ) : (
                        null
                    )}
                    <div className={`text-text font-semibold text-lg ${item.link ? 'mt-[60px]' : 'mt-[20px]'} mb-10 p-6 flex-col animate-fade2 relative rounded-3xl flex border-2 overflow-hidden transition-all
                    ease-in-out duration-300`}>
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
                </div>
            </div>
            {item.video && <AutoPlayVideo src={item.video} />}

            <div className="text-text font-semibold text-lg sm:max-w-[65%] w-full sm:m-auto animate-fade3 transition-all
                    ease-in-out duration-300">
                The Challenge
                <div className="font-normal text-base mt-2">
                    {item.challenge}
                </div>
            </div>

            {item.img2 && <Image src={item.img2} alt={item.title} width={1200} height={300} className="rounded-3xl max-w-[1200px] max-h-[90vh] h-fit animate-fade3 w-full sm:m-auto transition-all ease-in-out duration-300" />}

            <div className="text-text font-semibold text-lg sm:max-w-[65%] m-auto nimate-fade3 transition-all
                    ease-in-out duration-300">
                The Solution
                <div className="font-normal text-base mt-2">
                    {item.solution}
                </div>
            </div>

            {item.img3 &&
            <div className="flex flex-col sm:flex-row gap-4 m-auto nimate-fade3 transition-all max-w-[1200px] w-fill
                    ease-in-out duration-300">
            <Image src={item.img3} alt={item.title} width={400} height={300} className="rounded-3xl max-w-[400px] sm:mt-[150px] w-full h-fit animate-fade1 sm:m-auto transition-all ease-in-out duration-300" />
            <Image src={item.img4} alt={item.title} width={400} height={300} className="rounded-3xl max-w-[400px] w-full h-fit animate-fade1 transition-all ease-in-out duration-300" />
            <Image src={item.img5} alt={item.title} width={400} height={300} className="rounded-3xl max-w-[400px] sm:mt-[150px] w-full h-fit animate-fade1 sm:m-auto transition-all ease-in-out duration-300" />

            </div>
            }
        </div>
      </div>
    </main>
  );
}

