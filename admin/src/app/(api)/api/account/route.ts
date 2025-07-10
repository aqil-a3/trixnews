import { auth } from "@/auth";
import { apiDelete, apiPost } from "@/lib/api-server";
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

      if (statusCode === 400) {
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

export async function DELETE(req: NextRequest) {
  const { email } = await req.json();
  const session = await auth();
  const sessionEmail = session?.user.email;

  if (sessionEmail && sessionEmail === email) {
    return NextResponse.json(
      { message: "You can't delete yourself" },
      { status: 400 }
    );
  }

  try {
    const { data } = await apiDelete(`${secretApi}/users`, { email });

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error deleting user:", error);

    if (isAxiosError(error)) {
      return NextResponse.json(
        { message: "Failed to delete user", error: error.message },
        { status: 500 }
      );
    }
  }
}
