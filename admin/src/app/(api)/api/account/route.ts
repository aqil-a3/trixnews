import { apiPost } from "@/lib/api-server";
import { secretApi } from "@/lib/server-utils";
import { isAxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const clientData = await req.json();

  try {
    const { data } = await apiPost(
      `${secretApi}/users/new-account`,
      clientData
    );

    return NextResponse.json(
      {
        success: true,
        message: "Admin account created successfully",
        data,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);

    if (isAxiosError(error)) {
      const statusCode = error.status;

      if(statusCode === 400){
          return NextResponse.json(
            {
              success: false,
              message: "Email is already in use",
            },
            { status: 400 }
          );
      }
      return NextResponse.json(
        {
          success: false,
          message: error?.message || "Something went wrong",
        },
        { status: 500 }
      );
    }
  }
}
