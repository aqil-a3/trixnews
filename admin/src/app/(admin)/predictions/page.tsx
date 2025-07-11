import PredictionTemplate from "@/components/templates/admin/PredictionTemplate";
import { getAllPredictions } from "@/utils/posts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Predictions",
};

export default async function PredictionPage() {
  const predictions = await getAllPredictions();
  return <PredictionTemplate predictions={predictions} />;
}
