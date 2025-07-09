import { revalidateTag } from 'next/cache';
import { NextResponse, type NextRequest } from 'next/server';
import { parseBody } from 'next-sanity/webhook';

type WebhookPayload = {
  _type: string;
};

export async function POST(req: NextRequest) {
  try {
    const secret = process.env.SANITY_REVALIDATE_SECRET;
    if (!secret) {
      return new Response('Missing secret', { status: 500 });
    }

    const { isValidSignature, body } = await parseBody<WebhookPayload>(req, secret);

    if (!isValidSignature) {
      return new Response('Invalid signature', { status: 401 });
    }

    if (!body?._type) {
      return new Response('Bad payload', { status: 400 });
    }

    revalidateTag(body._type); // contoh: _type === "post"
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return new Response('Server error', { status: 500 });
  }
}
