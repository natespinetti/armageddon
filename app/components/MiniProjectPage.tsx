import ThreeDButton from "./3DButton";
import Header from "./Header";
import Image from "next/image";

export default function MiniProjectPage({ item }: { item: any }) {
  return (
    <main className="min-h-screen flex flex-col bg-gray-100 ">
    <Header />
      <div className="flex flex-col items-center justify-center p-6 m-auto">
        <div className="flex flex-col sm:flex-row gap-16 content-wrapper max-w-[1200px] w-screen p-6 flex-wrap">
            <div className="sm:max-w-[50%] w-full sm:w-[50%] animate-fade transition-all ease-in-out duration-300">
                <h1 className="text-text font-black tracking-wider text-4xl pb-4">{item.title}</h1>
                <p className="text-lg text-gray-600 mt-2 mb-10">{item.content}</p>
                <ThreeDButton href={`${item.link}`} newTab>View work</ThreeDButton>
            </div>
            <Image src={item.img} alt={item.title} width={500} height={300} className="rounded-3xl animate-fade1 transition-all ease-in-out duration-300" />
        </div>
      </div>
    </main>
  );
}

