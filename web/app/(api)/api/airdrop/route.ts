import { airdropSchema } from "@/lib/schemas/airdropSchema";
import { apiUrl, sharedSecretKey } from "@/lib/variables";
import { NextRequest, NextResponse } from "next/server";
import z from "zod";

type ClientFormType = z.infer<typeof airdropSchema>;
export async function POST(req: NextRequest) {
  const body: ClientFormType = await req.json();

  try {
    const res = await fetch(`${apiUrl}/airdrop`, {
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
    const data = await res.json();

    return NextResponse.json({ message: data.message });
  } catch (error) {
    
    console.error(error);
  }
}
