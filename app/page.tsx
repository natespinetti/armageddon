import BentoGrid from "./components/BentoGrid";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center w-screen bg-soft">
      <div className="content-wrapper max-w-[1200px] w-screen">
      <div className="pt-14 p-6 pb-0 flex flex-col items-center sm:justify-center">
        <div className="text-darkdepth font-bold w-full sm:text-center tracking-wider text-lg pb-2">WELCOME</div>
        <h1 className="text-text font-black tracking-wider text-4xl pb-4">I&apos;m Nathan Spinetti</h1>
        <h2 className="text-text font-medium tracking-wider text-lg pb-4">A Full Stack Developer at <a href="https://www.workhuman.com/" target="_blank" className=" underline underline-offset-4 decoration-gold ">Workhuman</a></h2>
      </div>
      <BentoGrid />
      </div>
    </main>
  );
}
