"use client"

import MainContainer from "@/components/layouts/MainContainer"
import { PresaleForm } from "@/components/organisms/Presale/PresaleForm"
import { createHandler } from "@/components/organisms/Presale/utils"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export default function AddPresaleTemplate() {
  return (
    <MainContainer>
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight">Submit New Presale</h1>
          <p className="text-muted-foreground">
            Fill out the form below to submit a new token presale. Ensure the information is accurate and complete.
          </p>
        </div>

        <Card className="p-6">
          <CardHeader className="p-0 mb-4">
            <CardTitle className="text-xl">Presale Information</CardTitle>
            <CardDescription>Please provide the details of the presale.</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <PresaleForm onSubmit={createHandler} />
          </CardContent>
        </Card>
      </div>
    </MainContainer>
  )
}
