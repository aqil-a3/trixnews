import { revalidateTag } from "next/cache";
import { parseBody } from "next-sanity/webhook";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  console.log("🔥 Webhook receiveds");

  const secret = process.env.SANITY_REVALIDATE_SECRET;

  const { isValidSignature, body } = await parseBody<{ _type: string }>(
    req,
    secret!,
  );

  console.log("📦 Webhook body:", body);
  console.log("✅ Signature valid:", isValidSignature);

  if (!isValidSignature) {
    return new Response("Invalid signature", { status: 401 });
  }

  if (!body?._type) {
    return new Response("Bad Request", { status: 400 });
  }

  // Jalankan revalidate tag
  console.log(`🔁 Revalidating tag: ${body._type}`);
  revalidateTag(body._type);

  return NextResponse.json({ revalidated: true, tag: body._type });
}
