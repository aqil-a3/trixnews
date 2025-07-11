import { Airdrop, Guide, Presale } from "@/@types/Posts";
import { SanityAirdrop, SanityGuide, SanityPresale } from "@/@types/Sanity";
import { urlFor } from "@/sanity/lib/image";
import { toHTML } from "@portabletext/to-html"

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

export function convertSanityAirdrop(doc: SanityAirdrop): Airdrop {
  return {
    id: doc.id,
    name: doc.name,
    description: doc.description,
    startDate: doc.startDate,
    endDate: doc.endDate,
    rewardAmount: doc.rewardAmount,
    status: doc.status,
    officialLink: doc.officialLink,
    contactEmail: doc.contactEmail,
    imageUrl: doc.mainImage ? urlFor(doc.mainImage).width(64).height(64).url() : undefined,
    slug: doc.slug.current,
  };
}

export function convertSanityGuideToGuide(guide: SanityGuide): Guide {
  return {
    title: guide.title,
    description: guide.description,
    slug: guide.slug.current,
    icon: guide.icon,
    content: toHTML(guide.content), // Ubah Portable Text jadi HTML
    popularity: guide.popularity,
  };
}