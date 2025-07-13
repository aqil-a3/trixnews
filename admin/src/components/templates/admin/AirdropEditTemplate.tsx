"use client";

import { Airdrop } from "@/@types/Posts";
import MainContainer from "@/components/layouts/MainContainer";
import { AirdropForm } from "@/components/organisms/Airdrop/airdropForm";
import { updateHandler } from "@/components/organisms/Airdrop/utils";
import { mapAirdropToFormData } from "@/lib/utils";

export default function AirdropEditTemplate({ airdrop }: { airdrop: Airdrop }) {
  return (
    <MainContainer>
      <div className="space-y-6">
        <div className="border-b pb-4">
          <h1 className="text-3xl font-semibold tracking-tight">Edit Airdrop</h1>
          <p className="text-muted-foreground mt-1">
            Update information for <span className="font-medium">{airdrop.name}</span>
          </p>
        </div>

        <div className="bg-white dark:bg-muted rounded-lg border p-6 shadow-sm">
          <AirdropForm
            onSubmit={updateHandler(airdrop.id)}
            defaultValues={mapAirdropToFormData(airdrop)}
            submitLabel="Update"
          />
        </div>
      </div>
    </MainContainer>
  );
}
