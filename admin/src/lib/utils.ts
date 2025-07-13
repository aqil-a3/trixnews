import { Airdrop, Presale } from "@/@types/Posts";
import { AirdropFormType } from "@/zod-schema/airdropFormSchema";
import { PresaleFormType } from "@/zod-schema/presaleFormSchema";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function mapPresaleToFormData(presale: Presale): PresaleFormType {
  const toDateOnly = (isoString?: string) =>
    isoString ? isoString.split("T")[0] : "";

  return {
    businessEmail: presale.contactEmail,
    tokenName: presale.name,
    description: presale.description,
    status: presale.status,
    tokenSupply: presale.tokenSupply,
    presaleStartDate: toDateOnly(presale.startDate),
    presaleEndDate: toDateOnly(presale.endDate),
    softCap: presale.softCap,
    hardCap: presale.hardCap,
    presaleSite: presale.presaleSite,
  };
}

export function mapAirdropToFormData(airdrop: Airdrop): AirdropFormType {
  const toDateOnly = (isoString?: string) =>
    isoString ? isoString.split("T")[0] : "";

  return {
    contactEmail: airdrop.contactEmail,
    name: airdrop.name,
    description: airdrop.description,
    rewardAmount: airdrop.rewardAmount,
    officialLink: airdrop.officialLink,
    status: airdrop.status,
    startDate: toDateOnly(airdrop.startDate),
    endDate: toDateOnly(airdrop.endDate),
  };
}