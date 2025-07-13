"use client";

import { Presale } from "@/@types/Posts";
import MainContainer from "@/components/layouts/MainContainer";
import { PresaleForm } from "@/components/organisms/Presale/PresaleForm";
import { updateHandler } from "@/components/organisms/Presale/utils";
import { mapPresaleToFormData } from "@/lib/utils";

export default function PresaleEditTemplate({ presale }: { presale: Presale }) {
  return (
    <MainContainer>
      <div className="space-y-6">
        <div className="border-b pb-4">
          <h1 className="text-3xl font-semibold tracking-tight">
            Edit Presale
          </h1>
          <p className="text-muted-foreground mt-1">
            Update information for <span className="font-medium">{presale.name}</span>
          </p>
        </div>

        <div className="bg-white dark:bg-muted rounded-lg border p-6 shadow-sm">
          <PresaleForm
            onSubmit={updateHandler(presale.id)}
            defaultValues={mapPresaleToFormData(presale)}
            submitLabel="Update"
          />
        </div>
      </div>
    </MainContainer>
  );
}
