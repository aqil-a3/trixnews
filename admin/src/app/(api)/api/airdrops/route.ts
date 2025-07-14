import { NextRequest, NextResponse } from "next/server"
import { isAxiosError } from "axios"
import { AirdropFormType } from "@/zod-schema/airdropFormSchema"
import { apiDelete, apiPost, apiPut } from "@/lib/api-server"
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

export async function DELETE(req: NextRequest) {
  const body = await req.json();

  try {
    const { data } = await apiDelete(`${secretApi}/airdrop`, body);

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Something Error" }, { status: 500 });
  }
}
