import { NextRequest, NextResponse } from "next/server"
import { isAxiosError } from "axios"
import { AirdropFormType } from "@/zod-schema/airdropFormSchema"
import { apiPost, apiPut } from "@/lib/api-server"
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

export async function PUT(req: NextRequest) {
  const body = (await req.json()) as AirdropFormType;
  const { searchParams } = req.nextUrl;
  const id = searchParams.get("id") as string;

  try {
    const { data } = await apiPut<{ message: string }>(
      `${secretApi}/airdrop/${id}`,
      body
    );

    return NextResponse.json({ message: data.message }, { status: 200 });
  } catch (error) {
    if (isAxiosError(error)) {
      const data = error.response?.data;

      return NextResponse.json(
        { message: data.message, error: data.error },
        { status: data.statusCode }
      );
    }
    console.error(error);
    return NextResponse.json(
      { message: "Unexpected server error" },
      { status: 500 }
    );
  }
}
