import { Presale } from "@/@types/Posts";
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
