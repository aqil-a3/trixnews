import { NextRequest, NextResponse } from "next/server"
import { isAxiosError } from "axios"
import { AirdropFormType } from "@/zod-schema/airdropFormSchema"
import { apiPost } from "@/lib/api-server"
import { secretApi } from "@/lib/server-utils"

export async function POST(req: NextRequest) {
  const body = (await req.json()) as AirdropFormType
  try {
    const { data } = await apiPost<{ message: string }>(
      `${secretApi}/airdrop`,
      body
    )

    return NextResponse.json({ message: data.message }, { status: 200 })
  } catch (error) {
    if (isAxiosError(error)) {
      const data = error.response?.data;

      return NextResponse.json(
        { message: data.message, error: data.error },
        { status: data.statusCode }
      )
    }
    console.error(error)
  }
}
