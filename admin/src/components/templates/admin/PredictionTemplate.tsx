"use client";

import MainContainer from "@/components/layouts/MainContainer";
import EntityTableHeader from "@/components/organisms/header/EntityTableHeader";
import EntityTableTemplate from "../reuseability/EntityTableTemplate";
import { Prediction } from "@/@types/Posts";
import { predictionColumns } from "@/components/organisms/columnTable/predictionColumns";

const Header = () => {
  return (
    <EntityTableHeader
      description="Manage and organize your content predictions."
      title="Predictions"
      newLink="/studio/desk/prediction"
    />
  );
};

export default function PredictionTemplate({ predictions }: { predictions: Prediction[] }) {
  return (
    <MainContainer>
      <EntityTableTemplate
        HeaderComponent={Header}
        columns={predictionColumns}
        data={predictions}
      />
    </MainContainer>
  );
}
