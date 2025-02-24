import { notFound } from "next/navigation";
import minis from "../../data/minis.json"; 
import casestudies from "../../data/casestudies.json"; 

// Import different templates
import CaseStudyPage from "@/app/components/CaseStudyPage";
import MiniProjectPage from "@/app/components/MiniProjectPage";

interface PageProps {
  params: { id: string };
}

import { MiniProjectItem } from '@/app/components/MiniProjectPage';
import { CaseStudyItem } from "@/app/components/CaseStudyPage";

// Union type that allows both MiniProjectItem and CaseStudyItem
export type ProjectItem = MiniProjectItem | CaseStudyItem;


export default function ItemPage({ params }: PageProps) {
  const item: ProjectItem | undefined =
    minis.find((item) => item.id === params.id) ||
    casestudies.find((item) => item.id === params.id);

  if (!item) return notFound(); // 404 if ID is invalid

  // Choose template based on the `template` field
  return item.template === "casestudy" ? (
    <CaseStudyPage item={item as CaseStudyItem} />
  ) : (
    <MiniProjectPage item={item as MiniProjectItem} />
  );
}

// Generate static paths for pre-rendering
export async function generateStaticParams() {
  return [
    ...minis.map((item) => ({ id: item.id })),
    ...casestudies.map((item) => ({ id: item.id }))
  ];
}
