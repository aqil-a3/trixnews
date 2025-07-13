"use client";
import MainContainer from "@/components/layouts/MainContainer";
import { PresaleForm } from "@/components/organisms/Presale/PresaleForm";
import { createHandler } from "@/components/organisms/Presale/utils";

export default function AddPresaleTemplate() {
  return (
    <MainContainer>
      <PresaleForm onSubmit={createHandler} />
    </MainContainer>
  );
}
