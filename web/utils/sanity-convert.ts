import { Presale } from "@/@types/Posts";
import { SanityPresale } from "@/@types/Sanity";
import { urlFor } from "@/sanity/lib/image";

export function convertSanityPresale(sanity: SanityPresale): Presale {
  return {
    id: sanity.id,
    name: sanity.name,
    description: sanity.description,
    startDate: sanity.startDate,
    endDate: sanity.endDate,
    softCap: sanity.softCap,
    hardCap: sanity.hardCap,
    tokenSupply: sanity.tokenSupply,
    status: sanity.status,
    contactEmail: sanity.contactEmail,
    imageUrl: sanity.image ? urlFor(sanity.image).width(64).height(64).url() : undefined,
    slug: sanity.slug?.current,
  };
}
