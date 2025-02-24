import { notFound } from "next/navigation";
import minis from "../../data/minis.json"; 
import casestudies from "../../data/casestudies.json"; 

// Import different templates
import CaseStudyPage from "@/app/components/CaseStudyPage";
import MiniProjectPage from "@/app/components/MiniProjectPage";

interface PageProps {
  params: { id: string };
}

export default function ItemPage({ params }: PageProps) {
  const item = minis.find((item) => item.id === params.id) || casestudies.find((item) => item.id === params.id);

  if (!item) return notFound(); // 404 if ID is invalid

  // Choose template based on the `template` field
  return item.template === "casestudy" ? (
    <CaseStudyPage item={item} />
  ) : (
    <MiniProjectPage item={item} />
  );
}

// Generate static paths for pre-rendering
export async function generateStaticParams() {
  return [
    ...minis.map((item) => ({ id: item.id })),
    ...casestudies.map((item) => ({ id: item.id }))
  ];
}
