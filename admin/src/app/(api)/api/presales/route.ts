import { apiGet, apiPost, apiPut } from "@/lib/api-server";
import { secretApi } from "@/lib/server-utils";
import { PresaleFormType } from "@/zod-schema/presaleFormSchema";
import { isAxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await apiGet(`${secretApi}/ico-presale`);

    return NextResponse.json(response.data);
  } catch (error) {
    if (isAxiosError(error)) {
      console.error(
        "Failed to fetch presales:",
        error?.response?.data || error
      );

      return NextResponse.json(
        {
          message: "Failed to fetch presale data.",
          error: error?.response?.data || error?.message,
        },
        {
          status: error?.response?.status || 500,
        }
      );
    }
  }
}

export async function POST(req: NextRequest) {
  const body = (await req.json()) as PresaleFormType;
  try {
    const { data } = await apiPost<{ message: string }>(
      `${secretApi}/ico-presale`,
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
  }
}

export async function PUT(req: NextRequest) {
  const body = (await req.json()) as PresaleFormType;
  const { searchParams } = req.nextUrl;
  const id = searchParams.get("id") as string;

  try {
    const { data } = await apiPut<{ message: string }>(
      `${secretApi}/ico-presale/${id}`,
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
