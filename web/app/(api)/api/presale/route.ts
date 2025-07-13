import { presaleFormSchema } from "@/lib/schemas/presaleSchema";
import { apiUrl, sharedSecretKey } from "@/lib/variables";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

type ClientFormType = z.infer<typeof presaleFormSchema>;
export async function POST(req: NextRequest) {
  const body: ClientFormType = await req.json();

  try {
    const res = await fetch(`${apiUrl}/ico-presale`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Auth-Secret": sharedSecretKey,
      },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      const errorBody = await res.json();
      return NextResponse.json(
        {
          message: errorBody.message,
          error: res.statusText,
        },
        { status: res.status }
      );
    }
  } catch (error) {
    console.error(error);
  }

  return new Response();
}
